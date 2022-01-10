import Header from "@/components/atoms/header";
import Post from "@/models/post";
import { motion, Variants } from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
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
    <motion.section variants={variants} initial={"hidden"} animate={"show"}>
      <Head>
        <title>Blogs</title>
      </Head>
      <Header text="Blogs" />
      <div className="container mx-auto flex flex-row flex-wrap justify-center">
        {blogs.map((blog) => {
          let tags: String | undefined = blog.frontmatter.tags;
          let array: string[] | undefined = tags?.split(",");

          return (
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-70 cursor-pointer m-5">
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <img
                    src="assets/img/pp.jpg"
                    alt="blog photo"
                    className="max-h-40 w-full object-cover"
                  />
                </a>
              </Link>
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  {blog.frontmatter.title}
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  {blog.frontmatter.description}
                </p>
                <motion.div
                  drag="x"
                  dragSnapToOrigin={true}
                  dragConstraints={{
                    top: 0,
                    bottom: 0,
                    left: -50,
                    right: 50,
                  }}
                  className="flex justify-starts items-center mt-4"
                >
                  {array?.map((tag) => {
                    return (
                      <div className="text-xs m-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                        {tag}
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
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
