import { createFileRoute } from "@tanstack/react-router";
import { createServerFileRoute } from "@tanstack/react-start/server";

import { createMiddleware, json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute("/api/health").methods({
  GET: async ({ request }) => {
    return json({ success: true, message: "Server is healthy" });
  },
});
