import styles from "../styles/home.module.css"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.homewrapper}>
        <h1>Learning Next.js!</h1>
        <p>This framework is so crazy that it has custom routing already instilled within it, so just create a new Component
          and go to that route via typing the relavant name in URL!
        </p>
      </div>
    </>
  )
}
