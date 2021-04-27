import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'
import styles from '../styles/logInOut.module.css'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className={styles.gridContainer}>
            <div>
                <b>Username:</b>
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <b>Email:</b>
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <b>Password:</b>
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

        </div>
    )


    return (
        <Layout>
            <Head>
                <title>Register Page</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.Login}>
                    <div className={styles.text1}><h1>Register</h1></div>
                    <div className={styles.text2}>Status: {status}</div> <br />
                    <div className={styles.content}>
                        {registerForm()}
                    </div>
                    <div>
                        <button className={styles.btn}
                        onClick={register}>Register</button>
                    </div>
                    <br /><br />
                    <div className={styles.text3}><b>TOKEN :  </b > <b className={styles.text4}>{token.substring(0, 15)}... </b>
                        <button className={styles.btn1}
                            onClick={() => { navigator.clipboard.writeText(token) }}>
                                COPY
                        </button>
                        <button className={styles.btn1} onClick={() => {window.open('https://jwt.io');}}> CHECK</button>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
