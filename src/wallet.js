import { FractalWallet, useFractalUser, useSolBalance } from '@fractalwagmi/fractal-sdk';
import { useState,useEffect } from 'react';

export default function Wallet() {
    // Hook returns userId, publicKey, and username
    const user = useFractalUser();
    // Returns sol in lamports
    const sol = useSolBalance();
    const [textVisible,setTextVisible] = useState(false)
    
    console.log(user);
    console.log(sol);

    const handleTextVisible =  () => {
      console.log('hello')
      if(user){
        setTextVisible(false)
      }
      else{
        setTextVisible(true)
      }
    }
    useEffect(() => {
      const timer = setTimeout(() => {
        handleTextVisible();
      }, 5000);
      return () => clearTimeout(timer);
    }, [user]);
  
    return (
      <>
        <FractalWallet
          onLogin={user => {
            console.log('User : ',user);
          }}
          onLogout={() => {
            console.log('logged out');
          }}
          ready={() => {
            console.log('ready');
          }}
        />
       {textVisible && user && <div>
        <div style={{color:'#fff'}}>{'User Id : '}{user?.userId}</div>
        <div style={{color:'#fff'}}>{'Public Key : '}{user?.publicKey}</div>
        <div style={{color:'#fff'}}>{user?.username}</div>
        <div style={{color:'#fff'}}>{sol?.balance}</div>
        </div>}
      </>
    );
  }