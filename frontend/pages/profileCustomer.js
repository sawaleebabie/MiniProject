import axios from "axios";
import React, { useState, useEffect } from "react";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
import styles from "../styles/admin.module.css";
const URL = "http://localhost:8080/api/laundry";
import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'

const profileCustomer = ({ token }) => {
  const [user, setUser] = useState({});
  const [customers, setCustomers] = useState({});
  const [CustomerID, setCustomerID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [status, serStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    getCustomers();
    profileUser();
  }, []);
  
  const profileUser = async () => {
    try {
        // console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        // console.log('user: ', users.data)
        setUser(users.data)
    }
    catch (e) {
        console.log(e)
    }
}

  const getCustomer = async (id) => {
    const result = await axios.get(`${URL}/${id}`)
    console.log('customers ID: ', result.data)
    setCustomer(result.data)
}
 
  const getCustomers = async () => {
    let result = await axios.get(URL);
    setCustomers(result.data.list);
  };

  const showCustomers = () => {
    if (customers && customers.length) {
      return customers.map((item, index) => {
        return (
            <div className={styles.edit_button}>
              <button className={styles.button_get} onClick={() => getCustomer(item.id)}>
                Get
              </button>
            </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <Layout>
        <div className={styles.container}>
        <Head>
            <title>User profile</title>
        </Head>
        <Navbar />
            <div>
                <b> HELLO :</b> 
                {JSON.stringify(user)}
            </div>
            <div className={styles.list}>{showCustomers()}</div>
            <div className={styles.list}><b>(selected customer):</b> 
                <b>CustomerID:</b>{customer.CustomerID} 
                <b>Name:</b>{customer.name} 
                <b>Surname:</b>{customer.surname}  
                <b>status:</b>{customer.status}  
                <b>price:</b>{customer.price}
            </div>
        </div>
    </Layout>
  );
};
export default withAuth(profileCustomer);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}



