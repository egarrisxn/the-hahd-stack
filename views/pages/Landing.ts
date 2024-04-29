import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import Title from "../components/Title.ts";

export default function Landing() {
  return html`
    <div class="container">
      ${Title({ title: "Landing", primary: false })}
      <p>
        This a simple application using HTMX, Deno, Hono, Alpine.js, &
        Simple.css.
      </p>
      <p>
        This is the landing page. You can create your own pages by creating new
        files in the <code>views/pages</code> directory.
      </p>
      <a href="/auth/login">Login</a>
    </div>
  `;
}
