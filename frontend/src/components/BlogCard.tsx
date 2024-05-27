import { Link } from "react-router-dom";

interface BlogsType {
  id : string;
  authorName: string;
  title: string;
  content: string;
  published: string;
}
export default function BlogCard({
  id,
  authorName,
  title,
  content,
  published,
}: BlogsType) {
  return (
    <div>
      <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 ">
          <div className="flex">
            <div className="flex justify-center flex-col">
              <Avatar authorName={authorName} />
            </div>
            <div className="flex justify-center flex-col pl-1">
              <Circle></Circle>
            </div>
            <div className="pl-1">{authorName}</div>
            <div className="flex justify-center flex-col pl-1">
              <Circle></Circle>
            </div>
            <div className="font-light pl-1">{published}</div>
          </div>
          <div className="font-semibold text-xl">{title}</div>
          <div className="font-thin text-md">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </div>
          <div>{`${Math.ceil(content.length / 70)} minute(s) read`}</div>
        </div>
      </Link>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 bg-slate-400 rounded-full"></div>;
}

export function Avatar({
  authorName,
  size = "small",
}: {
  authorName: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      }  bg-gray-300 overflow-hidden rounded-full`}
    >
      <span className="font-medium text-gray-700 ">
        {authorName[0].toUpperCase()}
      </span>
    </div>
  );
}
