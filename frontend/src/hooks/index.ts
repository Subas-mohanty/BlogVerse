import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface BlogType{
    id : string,
    name : string,
    title : string,
    content : string,
    author : {
        name : string
    },
    publishDate : string
}


export function useBlog({id} : {id : string}){
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogType[]>([]); 

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers :{
                Authorization : localStorage.getItem("token")
            }
        }).then((res)=>{
            setBlog(res.data.blog);            
            setLoading(false);
        })
    }, [])
    return {
        loading,
        blog
    }
}

export function useBlogs(){
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers :{
                Authorization : localStorage.getItem("token")
            }
        }).then((res)=>{
            setBlogs(res.data.blogs);            
            setLoading(false);
        })
    }, [])
    return {
        loading,
        blogs
    }
}