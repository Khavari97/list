import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/users');
    const data = res.data;

    return {
        props: { ninjas: data },

    }
}
// https://jsonplaceholder.typicode.com/users

const Product = ({ninjas}) => {

    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>
                details about productId : {productId}
            </h1>

            {ninjas.map(ninja => (



                <Link href={'/articles/' + ninja.id+"/review/" + ninja.name} key={ninja.id}>

                    <h3>{ninja.id} - {ninja.name}</h3>

                </Link>
            ))}
        </div>
    );
}

export default Product