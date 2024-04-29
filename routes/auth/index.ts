import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import login from "./login.ts";
import logout from "./logout.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Auth Page!");
});

app.route("/login", login);
app.route("/logout", logout);

export default app;
