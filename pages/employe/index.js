import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const P1 = () => {

    const [data, setData] = useState([]);
    const router = useRouter();
    console.log('test',router.query);

    const getData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
            setData(res.data);
            console.log(data);
        });

    }

    useEffect(() => {
        getData();
    }, []);

    const handleClick =(ids)=>{

        if(data.findIndex((i)=> i.id === ids.id)){
            if(window.type !== "undefined"){
                window.sessionStorage.setItem('postid',ids);
            }
        }

    }

    return (
        <div>

            {data.map((d,index)=>(
             
                <Link href={`/employe/${d.id}/` + d.title} key={d.id}>
                <p onClick={()=>handleClick(d.id)}> {d.title}</p>
                </Link>
              
            ))}


        </div>
    );
}

export default P1