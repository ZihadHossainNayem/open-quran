import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  if (import.meta.env.DEV) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#1a1a1a",
          fontFamily: "monospace",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ff4444",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Error</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={resetErrorBoundary}
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "4px 12px",
                cursor: "pointer",
              }}
            >
              Retry
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "4px 12px",
                cursor: "pointer",
              }}
            >
              Reload
            </button>
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                color: "#ff6b6b",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              ERROR MESSAGE
            </div>
            <div
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #444",
                padding: "16px",
                color: "#ff8a8a",
              }}
            >
              {error.message}
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                color: "#ffa726",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              STACK TRACE
            </div>
            <div
              style={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #444",
                padding: "16px",
                overflow: "auto",
                maxHeight: "600px",
              }}
            >
              <pre
                style={{
                  color: "#e0e0e0",
                }}
              >
                {error.stack}
              </pre>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#333",
            borderTop: "1px solid #444",
            padding: "8px 20px",
            color: "#888",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Development Mode</span>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "500px" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>😵</div>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Oops! Something went wrong
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: "1.5",
          }}
        >
          We're sorry for the inconvenience. Please try refreshing the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        if (import.meta.env.DEV) {
          console.group("Error Boundary Caught Error");
          console.error("Error:", error);
          console.error("Component Stack:", errorInfo.componentStack);
          console.groupEnd();
        }
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
