import React,{useEffect,useContext} from 'react';
import './App.css';
import Unity, { UnityContext } from "react-unity-webgl";
import useWindowDimensions from './hooks/useWindowDimensions';

import Wallet from './wallet'

import { WalletProvider } from '@fractalwagmi/fractal-sdk';

const unityContext = new UnityContext({
  loaderUrl: "buildUnity/Contention.loader.js",
  dataUrl: "buildUnity/Contention.data",
  frameworkUrl: "buildUnity/Contention.framework.js",
  codeUrl: "buildUnity/Contention.wasm",
  setFullscreen: false,
  
  
});

function App() {
  const { height, width } = useWindowDimensions();
  

  

  
  return (
    <div style={{backgroundColor:'#000000'}}>
      <div >


  
  <Unity style={{width:(width-5),height:(height-4)}} unityContext={unityContext} />
      </div>
  <div style={{position:'absolute',right:10,top:10}}>

    <WalletProvider endpoint={'https://api.devnet.solana.com'}>
    <div style={{marginTop:20}}/>
    <Wallet/>
  </WalletProvider>
  </div>
    </div>
 

  );
}

export default App;
