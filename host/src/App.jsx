import { useState, useRef } from "react";
import Button from "remoteApp/Button";
import DemoApp from "remote2/DemoApp";
import MappZen from "mappZen/MappZen";
import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Ballooning from "./Ballooning";
const MappEye = lazy(() => import("mappEye/MappEye"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ballooning" element={<Ballooning />} />
        <Route path="/mappZen" element={<MappZen />} />
      </Routes>
    </>
  );
}

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Host Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div style={{ border: "2px solid #888", margin: "20px 10px", padding: "10px 10px" }}>
        <h1>Remote Repo 1</h1>
        <Button />
      </div>
      <div style={{ border: "2px solid #888", margin: "20px 10px", padding: "10px 10px" }}>
        <h1>Remote Repo 2</h1>
        <DemoApp />
      </div>
      <div style={{ border: "2px solid #888", margin: "20px 10px", padding: "10px 10px" }}>
        <h1>Remote Repo 3</h1>
        <MappZen />
      </div>
      <div style={{ border: "2px solid #888", margin: "20px 10px", padding: "10px 10px" }}>
        <h1>Remote Repo 4</h1>
        {MappEye && (
          <Suspense fallback={<div>Loading...</div>}>
            <MappEye />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;
