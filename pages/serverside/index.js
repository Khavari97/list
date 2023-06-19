import React from 'react';
import axios from 'axios';

function Home({ data }) {
  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1/');
  return {
    props: { data: data.title },
  };
}

export default Home;