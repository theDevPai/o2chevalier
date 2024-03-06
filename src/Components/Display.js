import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { data } from "./data";

const Display = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  //   const [backendData, setBackendData] = useState([{}]);

  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBackendData(data);
  //       });
  //   }, []);
  return (
    <div className="contact-page-wrapper" id="Try-now">
      <h1 className="primary-heading">Take the first step ...</h1>
      <h1 className="primary-subheading">
        Enter the species of tree you want to plant
      </h1>
      <Form className="contact-form-container">
        <InputGroup className="my-3" />
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tree Species..."
        />
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Scientific Name</th>
            <th>Common Name</th>
            <th>CO2 Absorption kg/year</th>
            <th>O2 released per year kg/year</th>
            <th>Distance Between Trees (ft)</th>
            <th>Growth Time for Full Growth</th>
            <th>Number of Trees Per acre</th>
            <th>Region</th>
            <th>Tree Size</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item["Common Name"].toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.Sl}>
                <td>{item.Sl}</td>
                <td>{item["Scientific Name"]}</td>
                <td>{item["Common Name"]}</td>
                <td>{item["CO2 Absorption kg/year"]}</td>
                <td>{item["O2 released per year kg/year"]}</td>
                <td>{item["Distance Between Trees (ft)"]}</td>
                <td>{item["Growth Time for Full Growth"]}</td>
                <td>{item["Number of Trees Per acre"]}</td>
                <td>{item.Region}</td>
                <td>{item["Tree Size"]}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* <div className="primary-text">
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div> */}
    </div>
  );
};

export default Display;
