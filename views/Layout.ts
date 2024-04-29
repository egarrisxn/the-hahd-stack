import { html } from "https://deno.land/x/hono@v4.2.8/helper.ts";
import { HtmlEscapedString } from "https://deno.land/x/hono@v4.2.8/utils/html.ts";

export default function Layout({
  title,
  content,
}: {
  title: string;
  content: HtmlEscapedString | Promise<HtmlEscapedString>;
}) {
  return html`
    <html>
      <head>
        <title>${title}</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.12"
          integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2"
          crossorigin="anonymous"
        ></script>
        <script src="//unpkg.com/alpinejs" defer></script>
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}
