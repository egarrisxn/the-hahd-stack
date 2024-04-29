import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import AppLayout from "../../views/AppLayout.ts";
import Profile from "../../views/pages/Profile.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.html(AppLayout({ title: "My Profile", content: Profile() }));
});

export default app;
