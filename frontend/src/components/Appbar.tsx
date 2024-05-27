import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export function Appbar(){
    return <div className="bg-gray-200 flex justify-between px-10 py-2 border-b fixed w-full">
        <div className="flex flex-col justify-center">
        <Link to={"/blogs"}>
            <div className="font-bold text-lg cursor-pointer">
                BlogVerse
            </div>
        </Link>
        </div>
        <div className="flex">
            <Link to={"/publish"}>
                <div className="flex justify-center flex-col">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-2">New</button>
                </div>
            </Link>
            <div className="cursor-pointer">
                <Avatar size = {"big"} authorName="Subas Mohanty"/>
            </div>
        </div>
    </div>
}
