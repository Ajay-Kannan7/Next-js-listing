import Link from "next/link"
import styles from "../styles/navbar.module.css"
import Image from "next/image"
function NavBar(){
    return(
        <div className={styles.navbar}>
            <Image src="/logo.png" width={200} height={100}></Image>
            <div className={styles.navlinks}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/components">List</Link>
            </div>
        </div>
    )
}

export default NavBar