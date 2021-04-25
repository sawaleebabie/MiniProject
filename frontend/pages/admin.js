import axios from "axios";
import React, { useState, useEffect } from "react";
import withAuth from "../components/withAuth";
import Navbar from "../components/navbar";
const URL = "http://localhost:8080/api/laundry";

const admin = ({ token }) => {
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
          <div key={index}>
            <div><b>CustomerID:</b> {item.CustomerID}</div>
            <div><b>Name:</b> {item.name}</div>
            <div><b>Surname:</b> {item.surname}</div>
            <div><b>status:</b> {item.status}</div>
            <div><b>price:</b> {item.price}</div>
            <div>
              <button
                onClick={() => getCustomer(item.id)}
              >
                Get
              </button>
              <button
                onClick={() => updateCustomer(item.id)}
              >
                Update
              </button>
              <button
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
      <Navbar />
      <h1><ins>customer Data Edit </ins></h1>
      <div>
        <h2>Add customers</h2>
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
        <input
          type="text"
          name="status"
          onChange={(e) => serStatus(e.target.value)}
        ></input>
        price:
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button
          onClick={() => addCustomer(CustomerID, name, surname, status, price)}
        >
          Add
        </button>
      </div>

      <div>{showCustomers()}</div>
      <div><b>(selected customer):</b> 
              <b>CustomerID:</b>{customer.CustomerID} 
              <b>Name:</b>{customer.name} 
              <b>Surname:</b>{customer.surname}  
              <b>status:</b>{customer.status}  
              <b>price:</b>{customer.price}
      </div>
    </div>
  );
};
export default withAuth(admin);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
