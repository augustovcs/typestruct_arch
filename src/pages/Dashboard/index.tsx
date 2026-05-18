import "./styles.css"
import { CardReact } from "../../shared/ui/Cards";

export function DashboardPage() {
    return (
        <div>
            <h1> Dashboard Principal Modulo </h1>
            <div className="card">
                <CardReact title="T1" description="T2" value="2"/>
                <CardReact title="T1" description="T2" value="2"/>
                <CardReact title="T1" description="T2" value="2"/>
                <CardReact title="T1" description="T2" value="2"/>
            </div>
           
        </div>
    )
}