import Header from "@/components/atoms/shared/header";
import Blog from "@/components/molecules/blogs/blog";
import Post from "@/models/post";
import { motion, Variants } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import React from "react";

type Props = {
  blogs: Array<Post>;
};
const variants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const Index = ({ blogs }: Props) => {
  blogs.sort((a, b) => b.frontmatter.updatedAt - a.frontmatter.updatedAt);
  return (
    <motion.section
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto"
    >
      <Head>
        <title>Blogs</title>
      </Head>
      <Header text="Blogs" />
      <div className="flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => {
          return (
            <Blog
              content={blog.content}
              slug={blog.slug}
              frontmatter={blog.frontmatter}
            />
          );
        })}
      </div>
    </motion.section>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/data/blogs`, "utf-8");
  const blogs: Array<Post> = files.map((fileName: string) => {
    const file = fs.readFileSync(`src/data/blogs/${fileName}`).toString();

    const { data, content } = matter(file);
    const frontmatter = {
      title: data.title,
      description: data.description,
      tags: data.tags,
      // createdAt: data.createdAt,
      updatedAt: Math.floor(data.updatedAt / 1000),
    };
    return {
      slug: fileName.replace(".md", ""),
      content: content,
      frontmatter,
    };
  });
  return {
    props: { blogs },
  };
}

export default Index;
