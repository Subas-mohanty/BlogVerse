import { Appbar } from "./Appbar";

export function FullBlogSkeleton(){

    return <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full mt-20 max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">
                <div className="h-6 bg-gray-200 rounded-full w-56 mb-4"></div>
            </div>
            <div className="text-slate-500 pt-2">
            <div className="h-3 bg-gray-200 rounded-full w-36 mb-4"></div>
            </div>
            <div className="pt-4">
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full max-w-lg mb-4"></div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="h-2 bg-gray-200 rounded-full w-12 mb-2.5"></div>
            <div className="flex">
                <div className="flex flex-col justify-center pr-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div>
                    <div className="font-bold text-xl">
                    <div className="h-3 w=36 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-slate-400">
                    <div className="h-3 w-52 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}