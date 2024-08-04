import { useState, useRef } from "react";
import Button from "remoteApp/Button";
import DemoApp from "remote2/DemoApp";
import MappZen from "mappZen/MappZen";
import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Ballooning from "./Ballooning";
import Navbar from "./components/Navbar";
import SideNavItems from "./components/SideNav";
import ChatBot from "./components/ChatBot";

const MappEye = lazy(() => import("mappEye/MappEye"));

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <SideNavItems />
        <ChatBot /> 
       
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
  
    </div>
  );
}

export default App;
