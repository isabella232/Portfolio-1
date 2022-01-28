import Post from "@/models/post";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Blog = ({ frontmatter, slug }: Post) => {
  let tags: String | undefined = frontmatter.tags;
  let array: string[] | undefined = tags?.split(",");
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-70 cursor-pointer m-5">
      <Link href={`/blog/${slug}`}>
        <a>
          <img alt="blog photo" className="max-h-40 w-full object-cover" />
        </a>
      </Link>
      <div className="bg-white dark:bg-gray-800 w-full p-4">
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {frontmatter.title}
        </p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
};

export default Blog;
