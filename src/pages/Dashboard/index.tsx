import "./styles.css"
import { CardReact } from "../../shared/ui/Cards";
import { mockCard } from "../../shared/mocks/cardMock";

export function DashboardPage() {
    return (
        <div>
            <h1> Dashboard Principal Modulo </h1>
            <div className="cards-grid">
                {mockCard.map((card) => (
                    <CardReact 
                    title={card.title}
                    description={card.description}
                    value={card.value}
                    />
                ))}
            </div>
           
        </div>
    )
}