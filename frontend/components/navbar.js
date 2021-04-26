import Link from 'next/link'
import styles from "../styles/nav.module.css";

const Navbar = () => (
    <div className={styles.head}>
        <button className={styles.buttonNav}><Link href="/"><a> <b>HOME </b></a></Link></button>
        <button className={styles.buttonNav}><Link href="/customer"><a> <b>CUSTOMER</b> </a></Link> </button>    
        <button className={styles.buttonNav}><Link href="/admin"><a> <b>ADMIN</b> </a></Link></button>  
        <button className={styles.buttonNavLogin}><Link href="/login"><a> <b>LOGIN</b> </a></Link> </button>    
        <button className={styles.buttonNavLogout}><Link href="/logout"><a> <b>LOGOUT</b> </a></Link> </button>   
    </div>  
)

export default Navbar 