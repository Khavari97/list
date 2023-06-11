import React,{useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";

const Comments =({user})=>{


    const [datas , setData] = useState([]);
    useEffect( ()=>{
        const getdata = async ()=>{
            try {
                await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
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
            <ul>
                {user.map((res,key)=>(
                    <li key={res.id}>{res.name}</li>
                ))}
            </ul>
            <div>
                {datas.map((comment,key)=>(
                    <p key={comment.id}>{comment.body}</p>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');

    return{
        props : {
            user : users.data
        }

    }

};

export default Comments;
