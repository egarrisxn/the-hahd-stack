import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import Layout from "../../views/Layout.ts";
import Logout from "../../views/pages/Logout.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(Layout({ title: "Logout", content: Logout() }));
});

app.post("/", (c) => {
  return c.redirect("/");
});

export default app;
