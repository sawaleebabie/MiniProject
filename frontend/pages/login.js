import { useState } from "react";
import axios from "axios";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import config from "../config/config";
import styles from "../styles/logInOut.module.css";
import Head from "next/head"
import Link from 'next/link'
import Image from 'next/image'

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [remember, setRemember] = useState(false);

  const login = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/login`,{ username, password, remember },{ withCredentials: true });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.status + ": " + result.data.user.username);
    } 
    catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };
  const reMem = async () => {
    setRemember(!remember);
  };

  const loginForm = () => (
    <div className={styles.gridContainer}>
      <div><b>Username:</b></div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div><b>Password:</b></div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          onClick={reMem}
        /> 
      </div> 
      <div ><label><ins><b>Remember Me</b></ins></label></div>
    </div>
  );

  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>
          <Image
            src="/laundry.png"
            alt="Picture"
            width={900}
            height={200}
            sizes="(max-width: 500px) 100px"
          />
      </div>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.Login}>
          <div className={styles.text1}><h1>Login</h1></div>
          <div className={styles.text2}>Status: {status}</div> <br />
          {loginForm()}
          <div>
            <button className={styles.btn2} onClick={login}>LOGIN</button>
            <button className={styles.btnRe}><Link href="/register"><a> <span>REGISTER</span> </a></Link></button>     
          </div>
        </div> 
      </div> 
    </Layout> 
  ); 
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
