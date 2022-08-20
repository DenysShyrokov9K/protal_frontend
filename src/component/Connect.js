import { useState } from 'react';
import Header from './Header';
import './Main.css'

const Connect = () => {
    
    const [transferType, setTransferType] = useState("");
    
    return(
        
        <div className='body'>
            <Header check={transferType}/>
            <div className='container'>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            
        </div>
    )
}

export default Connect;