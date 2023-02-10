import Link from "next/link"
import { useRouter } from "next/router";
function NotFound(){
    let route=useRouter();
    setTimeout(()=>{
        route.push("/")
    },2000)
    return(
        <div className="error-page">
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Go back to the <Link href="/">homepage</Link></p>
        </div>
    )
}

export default  NotFound;