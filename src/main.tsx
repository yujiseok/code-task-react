import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import logo from "../public/logo.png";
import App from "./App.tsx";
import "./index.css";
import Skeleton from "./components/Skeleton.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <main className="grid min-h-screen place-items-center px-4 py-6 text-code-black">
        <div className="w-full max-w-7xl px-6">
          <h1 className="pb-12 pt-4">
            <img src={logo} alt="code logo" />
          </h1>
        </div>
        <Suspense fallback={<Skeleton />}>
          <App />
        </Suspense>
      </main>
    </RecoilRoot>
  </React.StrictMode>
);
