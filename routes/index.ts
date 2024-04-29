import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import dashboard from "./app/index.ts";
import Layout from "../views/Layout.ts";
import Landing from "../views/pages/Landing.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Layout({ title: "Landing", content: Landing() }));
});

app.route("/app", dashboard);

export default app;
