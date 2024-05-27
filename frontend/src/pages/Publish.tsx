import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>
      <Appbar />
      </div>
      <div className="flex justify-center m-auto flex-col max-w-4xl">
        <div className="max-w-screen-lg w-full mt-20">
          <input
            type="text"
            onChange={(e)=> setTitle(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Title"
          />
        </div>
        <TextEditor onChange = {(e)=>{
          setContent(e.target.value)
        }}/>
        <button
          type="submit" onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
              title, content
            },{
              headers : {
                Authorization : localStorage.getItem("token")
              }
            })
            console.log(response.data);
            
            navigate(`/blog/${response.data.id}`)
          }}
          className="max-w-32 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus: ring-4 focus:ring-blue-200  hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  );
}

function TextEditor({onChange} : {onChange : (e : ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <form>
      <div className="w-full mb-4 border mt-2">
        <div className="flex items-center justify-between border">
          <div className="py-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea
              id="editor"
              rows={8}
              onChange={onChange}
              className="block w-full px-0 text-sm text-gray-800 bg-white
        border-0 pl-2"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}
