import type { CardPropsAPI }
from "../../../types/mainlayout";

//@ts-ignore
import "./style.css";

export function CardReact({
    id,
    name,
    cpf,
    email,
    phone,
    renda_mensal
}: CardPropsAPI) {

    return (

        <div className="card">

            <h3 className="card-title">
                {name}
            </h3>

            <p className="card-description">
                {email}
            </p>

            <span className="card-value">
                {cpf}
            </span>

        </div>
    );
}