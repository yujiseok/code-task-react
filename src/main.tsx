import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";
import Skeleton from "./components/Skeleton.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <main className="grid min-h-screen place-items-center px-4 py-6">
        <Suspense fallback={<Skeleton />}>
          <App />
        </Suspense>
      </main>
    </RecoilRoot>
  </React.StrictMode>
);
