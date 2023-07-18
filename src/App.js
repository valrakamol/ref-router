import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./Contact";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return (
    <nav className="be-secondary p-2 md-3 text-center">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Product
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        Contact Us
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <>
      <Layout />
      <h3 ref={header1}>Hello</h3>
      <Button
        onClick={() => {
          header1.current.innerHTML = "React";
        }}
      >
        Clik Me
      </Button>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.DeleteRow(index);
  };

  const data = [
    ["กางเกงยีนส์", 1200],
    ["เสื้อยืด", 350],
    ["กางเกงขาสั้น", 450],
    ["หมวก", 500],
    ["ไก่", 50],
  ];

  return (
    <>
      <Layout />
      <h4>Product</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                ker={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-ligh">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
