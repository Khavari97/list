import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// export const getStaticProps = async () => {
//   const res = await fetch('https://retoolapi.dev/b3TpSs/contacts/');
//   const data = await res.json();

//   // map data to an array of path objects with params (id)
//   const paths = data.map(ninja => {
//     return {
//       params: { id: ninja.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await axios('https://jsonplaceholder.typicode.com/users/' + id);
  const data = res.data;

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {

 const router = useRouter();
 useEffect(()=>{

  router.query.name = ninja.name;
  router.push(router);

 },[]);

 return (
    <div>
      <h1>name : {ninja.name}</h1>
      <p>email : {ninja.email}</p>
      <p>username : {ninja.username}</p>
      <p>address : {ninja.address.city}</p>
      
    </div>
  );
}

export default Details;