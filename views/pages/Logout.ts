import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import Title from "../components/Title.ts";

export default function Logout() {
  return html`
    <div class="container">
      ${Title({ title: "Logout", primary: true })}
      <form hx-post="/auth/logout" hx-trigger="submit" hx-swap="outerHTML">
        <button type="submit">Logout</button>
      </form>
    </div>
  `;
}
