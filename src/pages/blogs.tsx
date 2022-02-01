import Header from "@/components/atoms/shared/header";
import Blogs from "@/components/organisms/content/blogs";
import Post from "@/models/post";
import { motion, Variants } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const BlogsPage = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.section
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto">
      <Head>
        <title>Blogs</title>
      </Head>
      <Header text="Blogs" />
      <Blogs blogs={blogs} />
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
      updatedAt: Math.floor(Date.now() / 1000),
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

export default BlogsPage;
