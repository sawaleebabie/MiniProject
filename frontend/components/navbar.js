import Link from 'next/link'

const Navbar = () => (
    <div>
        <Link href="/"><a> <b>HOME </b></a></Link> |
        <Link href="/customer"><a> <b>CUSTOMER</b> </a></Link> |
        <Link href="/register"><a> <b>REGISTER</b> </a></Link>  |
        <Link href="/login"><a> <b>LOGIN</b> </a></Link> | 
        <Link href="/admin"><a> <b>ADMIN</b> </a></Link> |
        <Link href="/logout"><a> <b>LOGOUT</b> </a></Link> 
    </div>
)

export default Navbar