import Head from 'next/head' 
import Layout from '../components/layout' 
import useSWR, { mutate } from "swr";
import React, { } from "react";
import Navbar from "../components/navbar";

const URL = "http://localhost:8080/api/laundry";
const fetcher = (key) => fetch(key).then((res) => res.json());

const index = () => {
  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);
  
  const showCustomers = () => {
    if (data.list && data.list.length) {
      return data.list.map((item, index) => {
        return (
          <div>
            <div><b>CustomerID:</b> {item.CustomerID}</div>
            <div><b>Name:</b> {item.name}</div>
            <div><b>Surname:</b> {item.surname}</div>
            <div><b>Status:</b> {item.status} </div>
            <div><b>Price:</b> {item.price}</div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };
  return (
    <Layout>
       <Head>
        <title>Home Page</title>
    </Head>
    <div><Navbar />
      <div>
</div>
      <div>
        {showCustomers()}
      </div>
      
    </div>
    </Layout>
  );
};
export default index;
