import React,{useState,useEffect} from "react";
import Link from "next/link";
import axios from "axios";

const Users =({user})=>{

    return(
        <div>
            <ul>
                {user.map((res,key)=>(
                    <li key={res.id}>{res.name}</li>
                ))}
            </ul>
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

export default Users;
