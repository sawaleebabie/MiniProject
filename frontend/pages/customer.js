import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/admin.module.css";
import axios from "axios";
export default function CustomerPage({ token }) {
    const URL = "http://localhost:8080/api/laundry";

    const [user, setUser] = useState({});
    const [customers, setCustomers] = useState({});
    const [CustomerID, setCustomerID] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [status, setStatus] = useState("Waiting");
    const [price, setPrice] = useState(0);
    const [customer, setCustomer] = useState({});
  
    useEffect(() => {
      getCustomers();
    }, []);
  
    const getCustomers = async () => {
      let result = await axios.get(URL);
      setCustomers(result.data.list);
    };
  
    const addCustomer = async () => {
      let result = await axios.post(URL, {
        CustomerID,
        name,
        surname,
        status,
        price,
      });
      console.log(result);
      getCustomers();
    };
  
    const showCustomers = () => {
      if (customers && customers.length) {
        return customers.map((item, index) => {
          return (
            <div className={styles.listItem} key={index}>
              <div><b>CustomerID:</b> {item.CustomerID}</div>
              <div><b>Name:</b> {item.name}</div>
              <div><b>Surname:</b> {item.surname}</div>
              <div><b>status:</b> {item.status}</div>
              <div><b>price:</b> {item.price}</div>
            </div>
          );
        });
      } else {
        return <p>Loading...</p>;
      }
    };


    return (
        <div className={styles.container}>
          <Navbar />
          <h1><ins>For Customer Add Data</ins></h1>
          <div className={styles.form_add}>

            <h2>Add your Data</h2>
            CustomerID:
            <input
              type="text"
              name="CustomerID"
              onChange={(e) => setCustomerID(e.target.value)}
            ></input>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            Surname:
            <input
              type="text"
              name="surname"
              onChange={(e) => setSurname(e.target.value)}
            ></input>
            status:
            <input className={styles.text}
              type="text"
              name="status"
              disabled="disabled"
              value ="Waiting"
              onChange={(e) => setStatus(e.target.value)}
            ></input>
            price:
            <input 
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <button className={styles.button_add}
              onClick={() => addCustomer(CustomerID, name, surname, status, price)}
            >
              Add
            </button>
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
      );
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
