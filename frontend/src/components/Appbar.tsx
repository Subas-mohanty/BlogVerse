import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useState } from "react";
import DropDown from "./DropDown";


export function Appbar(){
    const [visibleDropDown, setVisibleDropDown] = useState(false);

    function toggleDropDown(){
        setVisibleDropDown(!visibleDropDown);
    }

    return <>
        <div className="bg-gray-200 flex justify-between px-10 py-2 border-b fixed w-full">
        <div className="flex flex-col justify-center">
        <Link to={"/blogs"}>
            <div className="font-bold text-2xl cursor-pointer">
                BlogVerse
            </div>
        </Link>
        </div>
        <div className="flex">
            <Link to={"/publish"}>
                <div className="flex mt-1.5">
                    <button type="button" className="text-black bg-slate-400 hover:bg-slate-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-2">Write</button>
                </div>
            </Link>
            <div className="cursor-pointer flex flex-col justify-center" 
                onClick={toggleDropDown}
            >
                <Avatar size = {"big"} authorName="Subas Mohanty"/>
            </div>
        </div>
    </div>
    {visibleDropDown && (
        < DropDown />
      )}
    </>
}
