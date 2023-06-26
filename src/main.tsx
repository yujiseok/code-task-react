import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";
import Logo from "./components/Logo.tsx";
import MainLayout from "./components/MainLayout.tsx";
import Skeleton from "./components/Skeleton.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <MainLayout>
        <Logo />
        <Suspense fallback={<Skeleton />}>
          <App />
        </Suspense>
      </MainLayout>
    </RecoilRoot>
  </React.StrictMode>
);
