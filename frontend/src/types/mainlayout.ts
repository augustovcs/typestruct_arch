

export type MainLayoutProps = {
    children: React.ReactNode;
};


export type CardProps = {
    title: string,
    description: string,
    value: string
}

export type CardPropsAPI = {

    id?: number,
    name: string,
    cpf: number,
    email: string,
    phone: number,
    renda_mensal: number,
    
}