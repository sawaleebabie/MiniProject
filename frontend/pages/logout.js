import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import styles from "../styles/logInOut.module.css";
import Image from 'next/image' 

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("Logout successful")
    }
 
    return (
        <Layout>
            <Head>
                <title>Logout Page</title>
            </Head>
            <div>
                <Image
                    src="/page.png"
                    alt="Picture"
                    width={900}
                    height={200}
                    sizes="(max-width: 500px) 100px"
                />
            </div>
            <div className={styles.container}>
                <Navbar/>
                <div  className={styles.Logout}>
                    <h1>Logout</h1>
                    <div>
                        <h2> {status}  </h2>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}
