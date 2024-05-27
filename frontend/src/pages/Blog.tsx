
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export default function Blog() {
  const id = useParams();

  const { loading, blog } = useBlog({
    id: id.id || "",
  });

  if (loading) {
    return <div>
      <FullBlogSkeleton/>
    </div>;
  }

  return (
    <FullBlog blog={blog}/>
  );
}
