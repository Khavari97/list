import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const P1 = () => {

    
    const[phone , setPhone] = useState('');
    const [fullname , setFullname] = useState('');

    const sendData = async (event) => {
        event.preventDefault();
        const user ={phone,fullname};
        try{
            await axios.post('https://retoolapi.dev/b3TpSs/contacts',JSON.stringify(user)).then((res) => {
            console.log(res);
            console.log(user);
            
        });

        } catch(e){
            console.log(e);
        }
    }

    
    return (
        <div>

            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder='phone'/>
            <input value={fullname} onChange={e => setFullname(e.target.value)} placeholder='fullname'/>

            <button onClick={sendData}>click me</button>

           


        </div>
    );
}

export default P1