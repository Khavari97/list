import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
  const res = await fetch('https://retoolapi.dev/b3TpSs/contacts/');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios('https://retoolapi.dev/b3TpSs/contacts/' + id);
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
      <h1>name : {ninja.fullname}</h1>
      <p>email : {ninja.fullname}</p>
      <p>website : {ninja.fullname}</p>
      <p>address : {ninja.fullname}</p>
      
    </div>
  );
}

export default Details;