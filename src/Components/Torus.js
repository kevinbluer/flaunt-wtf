import React, { useEffect, useState } from "react";
import OpenLogin from "@toruslabs/openlogin";
import AccountInfo  from "./AccountInfo";
import { Bridge } from "arb-ts";
import  * as ethers from "ethers";

// import "./style.scss";

const kovan4_testnet_config = {
  ethRPC: "https://kovan.infura.io/v3/65982ef7e3f24b3586823483ebdc99e0",
  arbRPC: 'https://kovan4.arbitrum.io/rpc',
  erc20BridgeAddress: '0x2948ac43e4AfF448f6af0F7a11F18Bb6062dd271',
  arbTokenBridgeAddress: '0x64b92d4f02cE1b4BDE2D16B6eAEe521E27f28e07',
};

const ethProvider = ethers.providers.getDefaultProvider(kovan4_testnet_config.ethRPC);
const arbProvider = new ethers.providers.JsonRpcProvider(kovan4_testnet_config.arbRPC);


function Login({showAccountDialog, accountDialog, metadataCID}) {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [bridgeInstance, setArbitrumBridge] = useState(null);
  const [arbSigner, setArbSigner] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin({
        clientId: "BHEDy3yxtQ6CQBwX92Y7bCw4AzriP7SrDp1gYGP-4-jAWFvx8cQx0v4e9jC9w60hwy2TjmBpuYAXY_KRHscWY-E", // your project id
        network: "testnet",
      });
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        const privateKey = sdkInstance.privKey;
        createArbitrumBridge(privateKey);
      }
      setSdk(sdkInstance);
      setLoading(false);
    }
    initializeOpenlogin();
  }, []);

  async function handleLogin() {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      setLoading(false)
    } catch (error) {
      console.log("error", error);
      setLoading(false)
    }
  }

  async function createArbitrumBridge(privateKey){
    const ethSigner = new ethers.Wallet(privateKey, ethProvider);
    const arbSigner = new ethers.Wallet(privateKey, arbProvider);
    const bridgeInstance = new Bridge(kovan4_testnet_config.erc20BridgeAddress,kovan4_testnet_config.arbTokenBridgeAddress, ethSigner, arbSigner);
    setArbitrumBridge(bridgeInstance);
    setArbSigner(arbSigner);
  }

  const handleLogout = async () => {
    setLoading(true)
    await openlogin.logout();
    setLoading(false)
  };

  return (
    <>
    {
    loading ?
      <div>
          <strong>loading...</strong>
      </div> :
      <div>
        {
          (openlogin && openlogin.privKey) ?
            <span>logged in (<strong onClick={() => showAccountDialog( accountDialog ? false : true)}>view account</strong>)</span> :
            <div>
                <div onClick={handleLogin}>
                  <strong>login with openlogin</strong> 
                </div>
            </div>
        }

      </div>
    }

  <div className={`modal ${ accountDialog ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
      <header className="modal-card-head">
        <p className="modal-card-title">arbitrum (via torus)</p>
        <button className="delete" aria-label="close" onClick={()=> showAccountDialog(false) }></button>
      </header>
      <section className="modal-card-body">
        {
        (openlogin && openlogin.privKey) ?
          <AccountInfo
            bridgeDetails={bridgeInstance}
            handleLogout={handleLogout}
            loading={loading}
            privKey={openlogin?.privKey}
            arbProvider={arbProvider}
            arbSigner={arbSigner}
            metadataCID={metadataCID}
          />
        :
        <span>please login into your torus account first</span>
        }
      </section>
      <footer className="modal-card-foot">
      </footer>
      </div>
    </div>

    </>
  );
}

export default Login;