import type { CardProps } from "../../../types/mainlayout";
import "./style.css"

export function CardReact({title, description, value}: CardProps) {

    return(

        <div className="card">
            <h3 className="title">
            {title}
            </h3>
            <p className="description">
            {description}
            </p>
            <span className="value">
            {value}
            </span>
        </div>
    )

}