import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import Title from "../components/Title.ts";

export default function App() {
  return html`
    <div>
      ${Title({ title: "App", primary: true })}
      <p>Welcome to the app.</p>
    </div>
  `;
}
