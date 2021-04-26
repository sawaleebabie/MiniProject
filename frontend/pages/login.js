import Head from "next/head";
import Link from 'next/link'
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/logInOut.module.css";
import axios from "axios";
import config from "../config/config";
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
      <div className="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          onClick={reMem}
        />
       
      </div> 
      <div className={styles.text}><label><ins><b>Remember Me</b></ins></label></div>
    </div>
  );

  const copyText = () => {
    navigator.clipboard.writeText(token);
  };

  return (
    <Layout>
      <Head>
        <title>Login Page</title>
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
        <Navbar />
        <div className={styles.Login}>
          <h1>Login</h1>
        <div>
          <b>Token:</b> {token.substring(0, 15)}...
          <button className={styles.btn1} onClick={copyText}> Copy token </button>
        </div>
        <br />
        <div>Status: {status}</div>
        <br />
        {loginForm()}
        <Link href="/register"><a> <b>REGISTER</b> </a></Link> 
        <div>
          <button className={styles.btn2} onClick={login}>Login</button>
        </div>
        </div>
        
        
      </div>
    </Layout>
  ); 
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}