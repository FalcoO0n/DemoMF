import { useState, useRef } from "react";
import Button from "remoteApp/Button";
import DemoApp from "remote2/DemoApp";
import MappZen from "mappZen/MappZen";
import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Ballooning from "./Ballooning";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

const MappEye = lazy(() => import("mappEye/MappEye"));

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <SideNav />
        <div className="h-full bg-green-300">
        </div>
        {/* <Routes>
          <Route path="/" element={<Ballooning />} />
          <Route path="/ballooning" element={<Button />} />
          <Route path="/mappZen" element={<MappZen />} />
        </Routes>
 */}
        
      </div>
      
    </>
  );
}

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      {/* <Navbar /> */}
      {/* <SideNav /> */}

      {/* <h1>Host Application</h1>
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
      </div> */}
    </div>
  );
}

export default App;
