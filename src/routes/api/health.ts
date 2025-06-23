import { createServerFileRoute } from "@tanstack/react-start/server";

import { json } from "@tanstack/react-start";

export const ServerRoute = createServerFileRoute("/api/health").methods({
  GET: async ({ request }) => {
    const { headers } = request;
    return json({ success: true, message: "Server is healthy", headers });
  },
});
