import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Prerendered per-route head tags are for crawlers; the app's <Seo> takes over at runtime.
document.querySelectorAll("head [data-prerender]").forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(<App />);
