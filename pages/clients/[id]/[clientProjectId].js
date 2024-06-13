import { useRouter } from "next/router"

export default function ClientProjectDetailPage(){
    const router = useRouter();
    return(
        <div>
            <h1>this is for detail project of client {router.query.id} project {router.query.clientProjectId}</h1>
        </div>
    )
}