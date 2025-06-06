import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./layout/Layout";
import { QueryProvider } from "./service/api/provider/QueryProvider";
import { ErrorBoundary } from "./components/error-boundary/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <Layout />
      </QueryProvider>
    </ErrorBoundary>
  </StrictMode>
);
