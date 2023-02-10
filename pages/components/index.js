import Head from "next/head"
import styles from "../../styles/list.module.css"
import Link from "next/link"

export const getStaticProps= async () =>{
    let res=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await res.json()
    return {
        props:{ ninjas:data }
    }
}

function MainPage({ninjas}){
    return(
    <>
        <Head>
            <title>List-Page</title>
        </Head>
        <div className={styles.listWrapper}>
            <h1>List page for all the members!</h1>
            {ninjas.map(ele=>(
                <Link href={`/components/${ele.id}`} className={styles.names} key={ele.id}>
                    <h3>{ele.name}</h3>
                </Link>
            ))}
        </div>
    </>
    )
}

export default MainPage