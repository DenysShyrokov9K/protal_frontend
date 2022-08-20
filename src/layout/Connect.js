import React, { useState } from 'react';
import Header from './Header';
import './Main.css'
import ToggleButton from './ToggleButton'

const Connect = () => {
    const [transferType,setTransferType] = useState("Deposit");

    const changeTransferType = () =>{
        if(transferType === "Deposit")
            setTransferType("WithDraw");
        else setTransferType("Deposit");
    }

    const DepositScreen = ({walletBalance,gameBalance}) => (
        <div>
            <div className='row mt-20'>
                <div className='col-6'>
                    <p className='text-white'><strong>Wallet Balance:{walletBalance}</strong></p>
                    <input className="form-control form-control-lg background-dark text-white" type="text" placeholder="0.0"  />
                </div>
                <div className='col-4'>
                    <p className='text-white'><strong>Game Balance:{gameBalance}</strong></p>
                    <input className="form-control form-control-lg background-dark text-white" type="text" placeholder="0.0" readOnly />
                </div>
            </div>
            <div className='mt-5'>
                <button onClick={() => {}} className='m-auto font-2 button-width-80 border-radius-10 button-height-8 connect-button-background border-none text-white flex-container' >
                    Deposit
                </button>
            </div>
        </div>
    )

    const WithDrawScreen = ({walletBalance,gameBalance}) => (
        <div>
            <div className='row mt-20'>
                <div className='col-4'>
                    <p className='text-white'><strong>Game Balance:{gameBalance}</strong></p>
                    <input className="form-control form-control-lg background-dark text-white" type="text" placeholder="0.0"  />
                </div>
                <div className='col-6'>
                    <p className='text-white'><strong>Wallet Balance:{walletBalance}</strong></p>
                    <input className="form-control form-control-lg background-dark text-white" type="text" placeholder="0.0" readOnly />
                </div>
            </div>
            <div className='mt-5'>
                <button onClick={() => {}} className='m-auto font-2 button-width-80 border-radius-10 button-height-8 connect-button-background border-none text-white flex-container' >
                    WithDraw
                </button>
            </div>
        </div>
    )

    return(
        <div className='body'>
            <Header check={transferType}/>
            <div className='container'>
                <label className='text-white mr-3'>Deposit</label>
                <ToggleButton check = {changeTransferType}/>
                <label className='text-white'>WithDraw</label>
                {transferType === "Deposit" ? <DepositScreen walletBalance={0}  gameBalance={0}/> : 
                    <WithDrawScreen walletBalance={0}  gameBalance={0}/>
                }
                <div className='mt-3'>
                    <p className='text-white pl-20 background-darkgray border-radius-10'>Use this portal to depositand withdraw game coins
                    <br />
                    There is a maximum withdrawal amount of 1000 coins perday
                    <br/><br/>
                    Game coins will automatically appear in your game wallet.
                    <br/>
                    The ratio is set 1:1
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Connect;