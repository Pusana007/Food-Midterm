import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";

export function Layout() {
  return (
    <nav className="bg-secondary p-2 mb-3 text-left">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
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
        ตารางเปรียบเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div>
        <div className="container">
          <br />
          <img src="f0101.jpg" alt="" height="150px" />
          <br />
          <h1>เมี่ยงคำกลีบบัวหลวงแบบโบราณ</h1>
          <p className="center">
            <br />
            เมี่ยงคำกลีบบัวหลวง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
            ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
            มีความโดดเด่นและมีเอกลักษณ์ที่มีความประณีตสวยงาม
            เป็นต้นตำรับเมนูสมุนไพรของคนไทยโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม
            เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ มีคุณค่าทางสมุนไพรสูง
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <br />
          <img src="f0402.jpg" alt="" height="150px" />
          <br />
          <h1>หลนเค็มบักนัด</h1>
          <p className="center">
            หลนเค็มบักนัด เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
            ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
            มีความโดดเด่นและมีเอกลักษณ์เฉพาะของจังหวัดอุบลราชธานี
            เป็นภูมิปัญญาในการถนอมอาหารด้วยวิธี แปรรูป
            แบบดองเค็มเพื่อให้เก็บไว้ได้นานเป็นปี
            เป็นอาหารพื้นเมืองโบราณของจังหวัดอุบลราชธานีมาช้านานที่ได้สืบทอดกันมารุ่นต่อรุ่น
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <br />
          <img src="f0701.jpg" alt="" height="150px" />
          <br />
          <h1>อู๋หน่อไม้พุงปลา</h1>
          <p className="center">
            อุ๋หน่อไม้พุงปลา เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ
            ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี
            ที่ได้สืบทอดกันมารุ่นต่อรุ่น
            มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี
            อุ๋เป็นอาหารพื้นเมืองที่มีลักษณะคล้ายแกงอ่อม
          </p>
        </div>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const [num, setNum] = useState(0);

  const data = [
    ["เมี่ยงคำกลีบบัวหลวงแบบโบราณ", 310],
    ["หลนเค็มบักนัด", 310],
    ["อู๋หน่อไม้พุงปลา", 310],
    ["รวม", num],
  ];

  return (
    <>
      <Layout />
      <h4>Products</h4>
      <Table striped border hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>เมนู</th>
            <th>ปริมาณแคลอรี่</th>
            <th>เลือกเมนูนี้</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                key={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => setNum(num + 310)}>
                    เลือกเมนูนี้
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
      <Container className="p-3 my-3 bg-light">
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
