//@ts-ignore
import "./styles.css";

import { GlowButton } from "../../shared/ui/Buttons";
import { CardReact } from "../../shared/ui/Cards";

import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../../services/Users";

export function DashboardPage() {

    const {
        data: users = [],
        isLoading,
        error
    } = useQuery({

        queryKey: ["users"],

        queryFn: getUsers,

        staleTime: 1000 * 60
    });

    if (isLoading) {
        return <h1>carregando...</h1>;
    }

    if (error) {
        return <h1>erro ao carregar usuários</h1>;
    }

    return (

        <div>

            <h1>
                Dashboard Principal Modulo
            </h1>

            <div className="cards-grid">

                {users.map((user: any) => (

                    <CardReact
                        key={user.id}

                        id={user.id}
                        name={user.name}
                        cpf={user.cpf}
                        email={user.email}
                        phone={user.phone}
                        renda_mensal={user.renda_mensal}
                    />
                ))}

            </div>

            <div className="dashboard-btt-action">

                <GlowButton
                    text="TESTE BOTAO"
                />

            </div>

        </div>
    );
}