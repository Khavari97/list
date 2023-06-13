import React,{useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const res = await axios('http://192.168.11.131:8000/en/api/logo/');
  const data = res.data;

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {

  const router = useRouter();
  const [ts , setts] = useState(false);



  const handleClick =()=>{
    console.log('clicked');
    setts(!ts);
  }

  return (
    <div>
      <h1>list of users</h1>
      <button onClick={() => {handleClick()}}> click me </button>
      {ninjas && ninjas.map(ninja => (

       
        
        <Link href={'/user/' + ninja.id} key={ninja.id}>
          
          <img src={ninja.image} key={ninja.id} style={{width:'150px',height:'150px',borderRadius:'4px'}}/>
          
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;