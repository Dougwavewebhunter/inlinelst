import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// Re-export the start handler as the default Cloudflare Worker export.
// TanStack Start's vite plugin (target: "cloudflare-pages") expects the
// server entry to export a fetch handler.
export { default } from "./start";
