import type { CardProps } from "../../../types/mainlayout";
import "./style.css"

export function CardReact({title, description, value}: CardProps) {

    return(

        <div className="card">
            <h3>
            {title}
            </h3>
            <p>
            {description}
            </p>
            <span>
            {value}
            </span>
        </div>
    )

}