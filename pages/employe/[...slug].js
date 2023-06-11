import { useRouter } from 'next/router';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Test from '../test/Test';

const P2 =()=>{

    const router = useRouter();
    const [token,setToken] = useState('');
    const [data , setData]=useState('');
    const [data1 , setData1]=useState('');

    useEffect(()=>{
        setToken(window.sessionStorage.getItem("postid"));
        console.log('pathname',window.location.pathname[9]);
        getData();

    },[data]);

    const getData = async () => {
        console.log(token);
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${router.query.slug[0]}/`).then((res) => {
            setData(res.data['id']);
            setData1(res.data['title']);
            console.log('token' , token);
            console.log(data);
        });

    }

    
    return(
        <div>
            <p> id : {data}</p>
            <p> title : {data1}</p>
        </div>
    );

}


export default P2