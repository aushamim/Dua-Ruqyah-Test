"use client";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <div className="p-10 min-h-screen flex gap-8">
        <nav className="w-[6%]">
          <Nav />
        </nav>
        <div className="w-[80%] bg-green-200">body</div>
        <div className="w-[17%] bg-red-200">sidebar</div>
      </div>
      {/* Toastify */}
      <ToastContainer
        position="bottom-center"
        hideProgressBar
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
