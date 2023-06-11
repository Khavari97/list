import React,{useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";

const Albums =({album})=>{

    return(
        <div>
            <ul>
                {album.map((res,key)=>(
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps(){
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums');

    return{
        props : {
            album : albums.data
        }

    }

};

export default Albums;
