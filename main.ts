import { Hono } from "https://deno.land/x/hono@v4.2.8/mod.ts";
import auth from "./routes/auth/index.ts";
import _app from "./routes/app/index.ts";
import landing from "./routes/index.ts";

const app = new Hono();

app.route("/", landing);
app.route("/auth", auth);
app.route("/app", _app);

Deno.serve(app.fetch);
