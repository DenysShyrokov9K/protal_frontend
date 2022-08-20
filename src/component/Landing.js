import React, {useState} from 'react'
import './Main.css'
import {Link} from 'react-router-dom';
import Header  from './Header';

const Landing = () =>{

    const [check, setCheck] = useState("");
    return(
        <div className="body">
            <Header check={check}/>
            <div className="main flex-container">
                <Link to="/connect" className='font-2 button-width-50 border-radius-10 button-height-8 connect-button-background border-none text-white flex-container' >
                    Connect Wallet
                </Link>
            </div>
        </div>
    )
}

export default Landing;