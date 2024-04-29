import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import Layout from "../../views/Layout.ts";
import Login from "../../views/pages/Login.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Layout({ title: "Login", content: Login() }));
});

app.post("/", (c) => {
  return c.redirect("/app");
});

export default app;
