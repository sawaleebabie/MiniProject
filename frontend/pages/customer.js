import React, { useState, useEffect } from "react";
import Head from 'next/head' 
import Navbar from "../components/navbar";
import Image from 'next/image' 
//import styles from "../styles/admin.module.css";
import styles from "../styles/customer.module.css";
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
              <div><b>Status:</b> {item.status}</div>
              <div><b>Price:</b> {item.price}</div>
            </div>
          );
        });
      } else {
        return <p>Loading...</p>;
      }
    };

    return ( 
      <div>
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
          <div className={styles.fontTitle}><h1>For Customer Add Data </h1></div>
          
          <div className={styles.form}>
            <tr>
            <th>
              <div className={styles.form_add}>
                <h2>Add your Data</h2>
                CustomerID:
                <input
                  type="text"
                  disabled="disabled"
                  name="CustomerID"
                  value = {CustomerID}
                  onChange={(e) => setCustomerID(e.target.value)}>  
                </input>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}>
                </input>
                Surname:
                <input
                  type="text"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}>
                </input>
                Status:
                <input className={styles.text}
                  type="text"
                  name="status"
                  disabled="disabled"
                  value ="Waiting"
                  onChange={(e) => setStatus(e.target.value)}>
                </input>
                Price:
                <input 
                  type="number"
                  name="price"
                  disabled="disabled"
                  value = {price}
                  onChange={(e) => setPrice(e.target.value)}>           
                </input>
                <button className={styles.button_add}
                  onClick={() => addCustomer(CustomerID, name, surname, status, price)}>
                  Add
                </button>
                <div className={styles.textConfirm}><h5>Please Wait Admin confirm...</h5> </div>
              </div>
            </th>

              <div className={styles.form_add1}> 
              <div className={styles.wight}><h2>Wight: 25-30 Kg Temperature : HOT Time: 30 Minute</h2></div>
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("A001");setPrice(150)} }>
                        A001
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("A002");setPrice(150)} }>
                        A002
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("A003");setPrice(150)} }>
                        A003
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("A004");setPrice(150)} }>
                        A004
                  </button>
                </div>
                <div className={styles.wight}><h2>Wight: 25-30 Kg Temperature : Medium Time: 40 Minute</h2></div>
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("B005");setPrice(100)} }>
                        B005
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("B006");setPrice(100)} }>
                        B006
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("B007");setPrice(100)} }>
                        B007
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("B008");setPrice(100)} }>
                        B008
                  </button>
                </div>
                <div className={styles.wight}><h2>Wight: 20-25 Kg Temperature : HOT Time: 45 Minute</h2></div>
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("C009");setPrice(80)} }>
                        C009
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("C010");setPrice(80)} }>
                        A010
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("C011");setPrice(80)} }>
                        C011
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("C012");setPrice(80)} }>
                        C012
                  </button>
                </div>
                <div className={styles.wight}><h2>Wight: 20-25 Kg Temperature : Medium Time: 50 Minute</h2></div>
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("D013");setPrice(60)} }>
                        D013
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("D014");setPrice(60)} }>
                        D014
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("D015");setPrice(60)} }>
                        D015
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("D016");setPrice(60)} }>
                        D016
                  </button>
                </div>
                <div className={styles.wight}><h2>Wight: 15-20 Kg Temperature : Medium Time: 55 Minute</h2></div>
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("E017");setPrice(50)} }>
                        E017
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("E018");setPrice(50)} }>
                        E018
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("E019");setPrice(50)}  }>
                        E019
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("E020");setPrice(50)}  }>
                        E020
                  </button>
                </div>
                <div className={styles.wight}><h2>Wight: 10-15 Kg Temperature : Medium Time: 60 Minute</h2></div> 
                <div>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("F021");setPrice(40)}  }>
                        F021
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("F022");setPrice(40)} }>
                        F022
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("F023");setPrice(40)} }>
                        F023
                  </button>
                  <button  className={styles.button_ID} onClick= {() => {setCustomerID("F024");setPrice(40)} }>
                        F024
                  </button>
                </div>
              </div>
          
          </tr>
          </div>
          
            
          <tr>
            <div className={styles.list}>{showCustomers()}</div>
          </tr>       
        </div>
      </div>       
    );    
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
