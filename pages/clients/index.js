import Link from "next/link";
import { useRouter } from "next/router"

export default function ClientPage(){
    const router = useRouter();
    const clients = [
        {id: 'yudha', name: 'YudhaHe'},
        {id: 'kusuma', name: 'KusumaHe'}
    ];
    return(
        <div>
            <h1>The clients page</h1>
            <ul>
                {clients.map((client) => 
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}