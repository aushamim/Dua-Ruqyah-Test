"use client";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <div>
      <div className="p-10 min-h-screen grid grid-cols-[6%_1fr] gap-8">
        <nav>
          <Nav />
        </nav>

        <div>
          <Topbar />

          <div className="grid grid-cols-[1fr_17%] gap-8">
            <div className="bg-green-200">body</div>
            <div className="bg-red-200">sidebar</div>
          </div>
        </div>
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
