import styles from "../../styles/details.module.css"
export const getStaticPaths = async ()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await res.json();

    let paths=data.map(ninja=>{
        return{
            params:{id : ninja.id.toString() }
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context)=>{
    let id=context.params.id;
    let res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data=await res.json();

    return{
        props:{ninja:data}
    }
}

function Details({ninja}){
    return(
        <div className={styles.mainWrapper}>
            <h1>The Details Page!</h1>
            <h2>{ninja.name}</h2>
            <h3>{ninja.email}</h3>
            <h3>{ninja.address.street}</h3>
            <h3>{ninja.phone}</h3>
            <h3>{ninja.website}</h3>
        </div>
    )
}

export default Details;