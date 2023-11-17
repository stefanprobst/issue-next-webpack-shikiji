import { codeToHtml } from "shikiji";

export default function IndexPage() {
  return (
    <main>
      <CodeBlock code={`const hello = "World";`} />
    </main>
  );
}

async function CodeBlock({ code }: { code: string }) {
  const html = await codeToHtml(code, {
    lang: "javascript",
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: 'light'
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
