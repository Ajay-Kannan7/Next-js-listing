import styles from "../styles/home.module.css"
import Head from "next/head"
function AboutPage(){
    return(
       <> 
            <Head>
                <title>About</title>
            </Head>
            <div className={styles.homewrapper}>
                <h1>About Page</h1>
                <p>Seems like you finally made it on the other side or shall I say in this case
                    onto the about page!</p>
            </div>
        </>
    )
}

export default AboutPage