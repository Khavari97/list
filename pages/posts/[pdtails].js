import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const PostDetails =()=>{

    const router = useRouter();

    const [datas , setData] = useState([]);
    useEffect( ()=>{
        const getdata = async ()=>{
            try {
                await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.pdtails}/`)
                    .then((res)=> res.json())
                    .then((data)=>{
                        setData(data);
                    })


            } catch (error) {
                console.log(error);
            }
        }

        getdata();


    },[]);

    return(
        <div>
            <p>{datas.id}</p>
            <p>{datas.title}</p>
        </div>
    )
}

export default PostDetails;