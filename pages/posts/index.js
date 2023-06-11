import React,{useState,useEffect} from "react";
import Link from "next/link";

const Posts =()=>{

    const [datas , setData] = useState([]);
    useEffect( ()=>{
        const getdata = async ()=>{
            try {
                 await fetch('https://jsonplaceholder.typicode.com/posts/')
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
               {/*<li><Link href={"/posts/1"}> post 1 </Link></li>*/}
               {/*<li><Link href={"/posts/2"}> post 2 </Link></li>*/}
               {/*<li><Link href={"/posts/3"}> post 3 </Link></li>*/}
               {datas.map((res,key)=>(
                   <li key={res.id}><Link href={`/posts/${res.id}`}>{res.title}</Link></li>
               ))}
           </ul>
        </div>
    )
}

export default Posts;
