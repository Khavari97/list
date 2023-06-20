import React,{useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
  const data = res.data;

  return {
    props: { ninjas: data },
    //revalidate: 10
  }
}
// https://jsonplaceholder.typicode.com/users

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
      {ninjas.map(ninja => (

       
        
        <Link href={'/user/' + ninja.id} key={ninja.id}>
          
            <h3>{ninja.id} - { ninja.name }</h3>
          
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;