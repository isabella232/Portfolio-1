import Post from "@/models/post";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Blog = ({ frontmatter, slug }: Post) => {
  let tags: String | undefined = frontmatter.tags;
  let array: string[] | undefined = tags?.split(",");
  return (
    <div className="h-90 md:w-70 m-5 w-60 cursor-pointer overflow-hidden rounded-lg shadow-lg">
      <Link href={`/blog/${slug}`}>
        <a>
          <img alt="blog photo" className="max-h-40 w-full object-cover" />
        </a>
      </Link>
      <div className="w-full bg-white p-4 dark:bg-gray-800">
        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
          {frontmatter.title}
        </p>
        <p className="text-md font-light text-gray-400 dark:text-gray-300">
          {frontmatter.description}
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
          className="justify-starts mt-4 flex items-center">
          {array?.map((tag) => {
            return (
              <div className="m-2 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                {tag}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
