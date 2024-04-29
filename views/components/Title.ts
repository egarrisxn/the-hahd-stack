import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";

export default function Title({ title }: { title: string; primary: boolean }) {
  return html` <h1 class="title">${title}</h1> `;
}
