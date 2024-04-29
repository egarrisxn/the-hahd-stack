import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import Title from "../components/Title.ts";

export default function Profile() {
  return html`
    <div class="container">
      ${Title({ title: "My Profile", primary: true })}
      <p>Welcome to your profile.</p>
      <a href="/auth/logout">Logout</a>
    </div>
  `;
}
