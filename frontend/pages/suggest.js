import Layout from '../components/layout' 
import React, { } from "react";
import Navbar from "../components/navbar";
import Image from 'next/image' 
import styles from "../styles/suggest.module.css";
import Head from 'next/head'
const URL = "http://localhost:8080/api/laundry";

const suggest = () => {
  
  return (
    <Layout>
      <Head>
          <title>Suggest</title>
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
        <div className={styles.container1}>
          <div className={styles.title}>
          <marquee bgcolor="White" direction="lefe" scrollamount="8" width="100%">Introduce How to Use Basic</marquee></div>
        </div>
        <div className={styles.intro}>
          <Image
            src="/intro.png"
            alt="Picture"
            width={1200}
            height={325}
          />
        </div>
        <div className={styles.thank}>THANK YOU</div>

      </div>
    </Layout>
  );
};
export default suggest;