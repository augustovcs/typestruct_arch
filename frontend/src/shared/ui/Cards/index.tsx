import type { CardProps, CardPropsAPI } from "../../../types/mainlayout";
import {GetUsersService} from "../../../../../backend/src/modules/users/services/GetUsersService";


//@ts-ignore
import "./style.css"

export function CardReact({id, name, cpf, email, phone, renda_mensal}: CardPropsAPI) {

    const {
        data: cards-obj = [],
        isLoading, 
        error
    } = useQuery({
        queryKey: ["cards-obj"],
        queryFn: GetUsersService,

        staleTime = 1000 * 60 * 1
    })
    const queryClient = useQueryClient();


    const deleteMutation = useMutation({
        mutationFn: deleteTests,
        onSuccess: () =>  {
        queryClient.invalidateQueries({
            queryKey: ["tests"]
        })

        }
    })

    if (isLoading) {
        return <div>Loading tests...</div>;
    }

    if (error) {
        return <div>Failed to load tests.</div>;
    } 


    return(
        

        <div className="card">
            <h3 className="card-title">
            {id}
            </h3>
            <p className="card-description">
            {name}
            </p>
            <span className="card-value">
            {cpf}
            </span>
        </div>
    )

}