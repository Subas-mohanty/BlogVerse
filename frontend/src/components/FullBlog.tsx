import { BlogType } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export function FullBlog({blog} : {blog : BlogType}){

    return <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full mt-20 max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              Posted n 28th May 2024
            </div>
            <div className="pt-4">
              {blog.title}
            </div>
          </div>
          <div className="col-span-4">
            Author
            <div className="flex">
                <div className="flex flex-col justify-center pr-2">
                <Avatar size="big" authorName={blog.author.name || "Anonymous"}/>
                </div>
                <div>
                    <div className="font-bold text-xl">
                    {blog.author.name || "Anonymous"}
                    </div>
                    <div className="text-slate-400">
                        Random phrase to about the author's ability to grab the user's attention
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}