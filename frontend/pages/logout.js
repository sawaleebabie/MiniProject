import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import config from '../config/config';
import styles from "../styles/logInOut.module.css";
import Image from 'next/image'
import Head from 'next/head'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
         logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        localStorage.removeItem('token')
        setStatus("Logout successful")
    }

    return (
        <Layout>
            <Head>
                <title>Logout Page</title>
            </Head>
            <div>
                <Image
                    src="/facebook.png"
                    alt="Picture"
                    width={900}
                    height={200}
                    sizes="(max-width: 500px) 100px"
                />
            </div>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.Logout}>
                    <div className={styles.text1}><h1>Logout</h1></div>
                    <div>
                        <h2> {status}  </h2>
                    </div>
                </div>
                <div className={styles.Logout}>
                    <Image
                        src="/check.png"
                        alt="Picture"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </Layout>
    )
}
