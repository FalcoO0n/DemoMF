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
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Ballooning />
            </Layout>
          }
        />
        <Route
          path="/ballooning"
          element={
            <Layout>
              {" "}
              <Button />{" "}
            </Layout>
          }
        />
        <Route
          path="/mappZen"
          element={
            <Layout>
              {" "}
              <MappZen />{" "}
            </Layout>
          }
        />
        <Route
          path="/mappEye"
          element={
            <Layout>
              {" "}
              <DemoApp />{" "}
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export function Home() {
  const [count, setCount] = useState(0);

  return <div className="flex h-screen"></div>;
}

export default App;

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row h-[calc(100vh-40px)]">
        <SideNavItems />
        <ChatBot />
        <div className="flex flex-col w-full h-[100%] overflow-y-auto">
          {/* Childrens */}
          {children}
        </div>
      </div>
    </div>
  );
}
