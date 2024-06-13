import { useRouter } from "next/router"


export default function PortfolioDetailPage(){
    const router = useRouter();
    return(
        <div>
            <h1>The detail for portfolio {router.query.id} page</h1>
        </div>
    )
}