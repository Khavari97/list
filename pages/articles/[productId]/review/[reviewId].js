import React from "react";
import { useRouter } from "next/router";
import axios from "axios";


const Review =({ninjas})=>{

    const router = useRouter();
    const {productId , reviewId} = router.query;
    return(
        <div>
            {/* <h1>
                details about productId : {productId} and reviewId is : {reviewId}
            </h1> */}
            <p> id : {ninjas.id}</p>
            <p> name : {ninjas.name}</p>
            <p> email : {ninjas.email }</p>
        </div>
    );
}

export const getServerSideProps = async (context) => {

    const id = context.params.productId;

    const res = await axios('https://jsonplaceholder.typicode.com/users/'+ id);
    const data = res.data;

    return {
        props: { ninjas: data },

    }
}

export default Review