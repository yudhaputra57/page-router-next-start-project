import { useRouter } from "next/router"

export default function BlogPostsPage(){
    const router = useRouter();
    return(
        <div>
            <h1>
                The Blog posts for {JSON.stringify(router.query)}
            </h1>
        </div>
    )
}