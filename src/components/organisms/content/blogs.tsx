import Blog from "@/components/molecules/blogs/blog";
import Post from "@/models/post";
import React from "react";
type Props = {
  blogs: Post[];
};
const Blogs = ({ blogs }: Props) => {
  blogs.sort((a, b) => b.frontmatter.updatedAt - a.frontmatter.updatedAt);

  return (
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
  );
};

export default Blogs;
