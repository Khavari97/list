import React,{useState,useEffect} from "react";
import axios from "axios";

const Test =()=>{
    const [token,setToken] = useState('');
    const [data , setData]=useState('');

    useEffect(()=>{
        setToken(window.sessionStorage.getItem("postid"));
    //    getData();

    },[]);

    const getData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/5/`).then((res) => {
            setData(res.data['id']);
            console.log('token' , token);
            console.log(data);
        });

    }

    
    return(
        <div>
            {data}
        </div>
    );
}

export default Test;