import axios from "axios";
import React, { useState, useEffect } from "react";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
import styles from "../styles/admin.module.css";
import Image from 'next/image' 
const URL = "http://localhost:8080/api/laundry";

const admin = ({ token }) => {
  const [user, setUser] = useState({});
  const [customers, setCustomers] = useState({});
  const [CustomerID, setCustomerID] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    getCustomers();
    profileUser();
  }, []);
  
  const profileUser = async () => {
    try {    
      const users = await axios.get(`${config.URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });  
      setUser(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getCustomer = async (id) => {
    const result = await axios.get(`${URL}/${id}`)
    console.log('customers ID: ', result.data)
    setCustomer(result.data)
    setCustomerID(result.data.CustomerID)
    setName(result.data.name)
    setSurname(result.data.surname)
    setStatus(result.data.status)
    setPrice(result.data.price)
}
 
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

  const deleteCustomer = async (id) => {
    let result = await axios.delete(`${URL}/${id}`);
    getCustomers();
  };

  const updateCustomer = async (id) => {
    let result = await axios.put(`${URL}/${id}`, {
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
            <div className={styles.edit_button}>
              <button className={styles.button_get}
                onClick={() => getCustomer(item.id)}
              >
                Get
              </button>
              <button className={styles.button_update}
                onClick={() => updateCustomer(item.id)}
              >
                Update
              </button>
              <button className={styles.button_delete}
                onClick={() => deleteCustomer(item.id)}
              >
                Delete
              </button>
            </div>
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
          src="/page.png"
          alt="Picture"
          width={900}
          height={200}
          sizes="(max-width: 500px) 100px"
        />
      </div>
      <div className={styles.container}>
        <Navbar />
        <h1><ins>customer Data Edit </ins></h1>
        <div className={styles.form_add}>
          <h2>Add customers</h2>
          CustomerID:
          <input
            type="text"
            name="CustomerID"
            value = {CustomerID}
            onChange={(e) => setCustomerID(e.target.value)}
          ></input>
          Name:
          <input
            type="text"
            name="name"
            value = {name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          Surname:
          <input
            type="text"
            name="surname"
            value = {surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          Status:
          <input
            type="text"
            name="status"
            value = {status}
            onChange={(e) => setStatus(e.target.value)}
          ></input>
          Price:
          <input
            type="number"
            name="price"
            value = {price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button className={styles.button_add}
            onClick={() => addCustomer(CustomerID, name, surname, status, price)}
          >
            Add
          </button>
        </div>
        <div ><h2>STATUS</h2></div>
        <div>
          <button   onClick= {() => setStatus("Washing") }>
            Washing
          </button>
          <button   onClick= {() => setStatus("Rinse") }>
            Rinse
          </button>
          <button   onClick= {() => setStatus("Air Dry") }>
            Air Dry
          </button>
          <button   onClick= {() => setStatus("Spin dryer") }>
            Spin dryer
          </button>
        </div>
        <div className={styles.list}>{showCustomers()}</div>
      </div>
    </div>   
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
