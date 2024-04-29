import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import Title from "../components/Title.ts";

export default function Login() {
  return html`
    <div class="container">
      ${Title({ title: "Login", primary: true })}
      <form
        hx-post="/auth/login"
        hx-trigger="submit"
        hx-target="#login-form"
        hx-swap="outerHTML"
      >
        <div id="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            autofocus
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  `;
}

// <form action="/auth/login" method="post">
//   <div class="form-control">
//     <label for="email">Email</label>
//     <input type="email" id="email" name="email" required />
//   </div>
//   <div class="form-control">
//     <label for="password">Password</label>
//     <input type="password" id="password" name="password" required />
//   </div>
//   <button type="submit">Login</button>
// </form>;
