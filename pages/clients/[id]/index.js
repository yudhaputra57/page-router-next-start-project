import Link from "next/link";
import { useRouter } from "next/router"

export default function ClientProjectsPage(){
    const router = useRouter();
    const projects = [
        {id:'1', project:'This is first project'},
        {id:'2', project:'This is second project'},
    ]
    function LoadProjectHandler(){
        router.push({
            pathname: `${router.asPath}/project-1`,
            query: {
                id: `${router.query.id}`,
                clientProjectId: 'project-1'
            }
        }, (`${router.asPath}/project-1`))
    }

    function LoadProjectHandlerAlternative(projectId){
        router.push(`${router.asPath}/${projectId}`)
    }
    return(
        <div>
            <h1>this is for projects list of client {router.query.id}</h1>
            <button onClick={LoadProjectHandler}>Load my project</button>
            {/* <ul>
                {projects.map(project =>
                    <li key={project.id}>
                        <button onClick={LoadProjectHandlerAlternative(project.id)}>
                            {project.project}
                        </button>
                    </li>
                )}
            </ul> */}
        </div>
    )
}