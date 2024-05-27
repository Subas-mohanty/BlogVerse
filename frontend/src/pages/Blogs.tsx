import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div >
        <div>
         <Appbar />
        </div>
        {/* make a skeleton for the loading */}
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div>
        <div className="flex justify-center">
          <div className=" max-w-xl mt-[70px]">
            {blogs.map((blog) => (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                published="24th may 2024"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
