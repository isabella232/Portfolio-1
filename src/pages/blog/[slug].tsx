import Post from "@/models/post";

import fs from "fs";
import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

const BlogPage = ({ slug, content, frontmatter }: Post) => {
  const t = [materialDark, dracula, vscDarkPlus];
  const y = Math.floor(Math.random() * 3);
  return (
    <article className="prose pt-5 pb-10 mx-auto">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={t[y]}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code>{children}</code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const file = fs
    .readFileSync(`${process.cwd()}/src/data/blogs/${slug}.md`)
    .toString();
  const { data, content } = matter(file);
  console.log(data);
  return {
    props: {
      slug,
      content,
      frontmatter: { title: data.title, description: data.description },
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/src/data/blogs`, "utf-8");

  const paths = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      return {
        params: {
          slug: fn.replace(".md", ""),
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
}

export default BlogPage;
