import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import profile from "./profile.ts";
import AppLayout from "../../views/AppLayout.ts";
import App from "../../views/pages/App.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(AppLayout({ title: "App", content: App() }));
});

app.route("/profile", profile);

export default app;
