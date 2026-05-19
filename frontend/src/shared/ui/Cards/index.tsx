import type { CardProps } from "../../../types/mainlayout";
import "./style.css"

export function CardReact({title, description, value}: CardProps) {

    return(

        <div className="card">
            <h3 className="card-title">
            {title}
            </h3>
            <p className="card-description">
            {description}
            </p>
            <span className="card-value">
            {value}
            </span>
        </div>
    )

}