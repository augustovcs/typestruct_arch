# TypeStruct Arch

> A production-grade, multilayered and modular architecture boilerplate for TypeScript full-stack applications — inspired by the structural rigor of C# and Java ecosystems.

---

## 📌 Overview

TypeStruct Arch is an opinionated architectural foundation for building scalable, maintainable and highly orchestrable TypeScript applications. It brings to the Node.js/TypeScript ecosystem the same structural discipline found in enterprise-grade frameworks like ASP.NET and Spring Boot — with clear separation of concerns, explicit dependency boundaries and maximum modularity.

The goal is not to be a framework, but a **reference architecture**: a set of conventions, patterns and project structure decisions that teams can adopt and extend without fighting against the tooling.

---

## 🧱 Architecture Philosophy

TypeStruct Arch is built around three core principles:

| Principle | Description |
|-----------|-------------|
| **Multilayered** | Each layer has a single, well-defined responsibility. Layers communicate only through defined contracts. |
| **Modular** | Every domain or feature is a self-contained module. Modules can be developed, tested and deployed independently. |
| **Orchestrable** | The system is designed for scalability — modules are loosely coupled and the orchestration layer is explicit and traceable. |

---

## 🗂️ Project Structure

```
typestruct-arch/
├── src/
│   ├── core/                    # Shared kernel — base classes, interfaces, errors, result types
│   │   ├── domain/
│   │   │   ├── Entity.ts
│   │   │   ├── ValueObject.ts
│   │   │   └── AggregateRoot.ts
│   │   ├── logic/
│   │   │   ├── Result.ts
│   │   │   └── Guard.ts
│   │   └── errors/
│   │       ├── AppError.ts
│   │       └── DomainError.ts
│   │
│   ├── modules/                 # Feature modules (one per domain context)
│   │   └── [module-name]/
│   │       ├── domain/          # Entities, value objects, domain events
│   │       ├── application/     # Use cases, DTOs, interfaces
│   │       ├── infrastructure/  # Repositories, external services, ORM
│   │       └── presentation/    # Controllers, routes, validators
│   │
│   ├── shared/                  # Cross-module utilities
│   │   ├── container/           # Dependency injection container
│   │   ├── middleware/          # HTTP middlewares
│   │   ├── events/              # Domain event bus
│   │   └── utils/
│   │
│   ├── config/                  # Environment, database, app configuration
│   └── main.ts                  # Application entry point and bootstrap
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── prisma/                      # Schema and migrations (if using Prisma)
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

---

## 🔀 Layer Responsibilities

### Domain Layer
The innermost layer. Contains **Entities**, **Value Objects**, **Aggregates** and **Domain Events**. Has zero external dependencies — no frameworks, no ORMs, no HTTP. Pure TypeScript classes enforcing business invariants.

```ts
// Example: Entity base class
export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;
  public readonly props: T;

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID();
    this.props = props;
  }

  public equals(entity?: Entity<T>): boolean {
    if (!entity) return false;
    return this._id.equals(entity._id);
  }
}
```

### Application Layer
Contains **Use Cases** (one class per use case). Each use case receives a DTO as input and returns a `Result<T, E>` — never throws. Orchestrates domain logic and calls repository interfaces.

```ts
// Example: Use case pattern
export class CreateUserUseCase implements UseCase<CreateUserDTO, Result<UserDTO>> {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(dto: CreateUserDTO): Promise<Result<UserDTO>> {
    const emailOrError = Email.create(dto.email);
    if (emailOrError.isFailure) return Result.fail(emailOrError.error);

    const user = User.create({ email: emailOrError.getValue(), name: dto.name });
    await this.userRepo.save(user);

    return Result.ok(UserMap.toDTO(user));
  }
}
```

### Infrastructure Layer
Implements the repository interfaces defined in the Application layer. Handles database access, external HTTP clients, caching, file storage. All implementation details are isolated here.

### Presentation Layer
Express/Fastify routes and controllers. Responsible for parsing HTTP requests, calling use cases and mapping results to HTTP responses. Contains input validation (Zod schemas).

---

## 🧩 Module Anatomy

Each module is a self-contained vertical slice of the application:

```
modules/user/
├── domain/
│   ├── User.ts              # Aggregate root
│   ├── Email.ts             # Value object
│   └── events/
│       └── UserCreated.ts   # Domain event
├── application/
│   ├── useCases/
│   │   ├── CreateUser/
│   │   │   ├── CreateUserUseCase.ts
│   │   │   ├── CreateUserDTO.ts
│   │   │   └── CreateUserErrors.ts
│   │   └── GetUser/
│   │       └── ...
│   └── repos/
│       └── IUserRepository.ts
├── infrastructure/
│   ├── UserRepository.ts
│   └── UserMapper.ts
└── presentation/
    ├── UserController.ts
    ├── UserRoutes.ts
    └── UserValidation.ts
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js + TypeScript |
| HTTP Framework | Express / Fastify |
| Dependency Injection | TSyringe / InversifyJS |
| ORM / Query Builder | Prisma / TypeORM |
| Validation | Zod |
| Testing | Vitest + Supertest |
| Containerization | Docker + Docker Compose |
| Linting | ESLint + Prettier |

---

## 🔌 Dependency Injection

Modules register their dependencies in a local container file, which is composed at the application root:

```ts
// modules/user/container.ts
container.registerSingleton<IUserRepository>("UserRepository", PrismaUserRepository);
container.register<CreateUserUseCase>("CreateUserUseCase", CreateUserUseCase);

// main.ts
import "./modules/user/container";
import "./modules/product/container";
// ...
```

---

## 📦 Result Pattern

All use cases return a `Result<T, E>` instead of throwing exceptions, making error flows explicit and predictable:

```ts
const result = await createUser.execute(dto);

if (result.isFailure) {
  return res.status(400).json({ error: result.error });
}

return res.status(201).json(result.getValue());
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Docker and Docker Compose

### Installation

```bash
git clone https://github.com/augustovcs/typestruct-arch
cd typestruct-arch
npm install
cp .env.example .env
```

### Running with Docker

```bash
docker-compose up -d
npm run dev
```

### Running tests

```bash
npm run test          # Unit tests
npm run test:int      # Integration tests
npm run test:e2e      # End-to-end tests
```

---

## 🗺️ Roadmap

- [x] Core domain primitives (Entity, ValueObject, AggregateRoot, Result)
- [x] Multilayered module structure
- [x] Dependency injection container setup
- [ ] Domain event bus implementation
- [ ] CQRS pattern with command/query segregation
- [ ] OpenAPI spec auto-generation from Zod schemas
- [ ] CLI scaffolder to generate new modules
- [ ] Example frontend integration (React + Vite)
- [ ] CI/CD pipeline with GitHub Actions

---

## 📄 License

MIT © [augustovcs](https://github.com/augustovcs)