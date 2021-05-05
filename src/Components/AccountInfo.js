import React, { useEffect, useState } from "react";
// import { PageHeader, Button } from "antd";
import { useArbTokenBridge } from "token-bridge-sdk";
import { utils } from "ethers";
import { toast, ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AccountInfo({handleLogout, privKey, bridgeDetails}) {
const bridge = useArbTokenBridge(
    bridgeDetails, false
)

const {
  walletAddress,
  balances,
} = bridge;
 console.log("bridge", bridge)

 useEffect(()=>{
    window.setTimeout(async()=>{
      await balances.update()
    }, 3000);
 },[])

 async function depositEthToArbitrum(){
  try {
    toast.info("deposit request initiated. waiting for confirmation");
    const receipt = await bridge.eth.deposit("0.01");
    console.log("reciept", receipt);
    toast.success("Eth depostited to arbitrum bridge wallet")
    refreshBalances();
  } catch (error) {
    console.log("error", error.reason);
    toast.error("Error while depositing eth to arbitrum:"+  error.reason);
  }
}

async function withdrawEthToArbitrum(){
  try {
    toast.info("Withdrawal request initiated, waiting for confirmation");
    const receipt = await bridge.eth.withdraw("0.01");
    console.log("reciept", receipt);
    toast.success("Eth withdrawn request sent from arbitrum bridge wallet")
    refreshBalances();
  } catch (error) {
    console.log("error", error);
    alert("Error while withdrawing eth from arbitrum:"+ error.reason);
  }
}

async function refreshBalances(){
  await balances.update()
  toast.success("Balance refreshed successfully");
}

 return (
    <div>
        <ToastContainer/>
        <div
            className="site-page-header"
            title="Openlogin x Arbitrum"
            extra={[
                <button key="1" type="primary" onClick={handleLogout}>
                Logout
                </button>,
            ]}
        />
        <div className="container">
        <div>
          <div style={{margin:4}}>
            Wallet address: <i>{walletAddress}</i>
          </div>
          <div>
            Eth chain Balance: <i>{(utils.formatEther(balances.eth.balance)) || 0}</i>
          </div>
          <div>
            Arb chain Balance: <i>{(utils.formatEther(balances.eth.arbChainBalance)) || 0}</i>
          </div>
          <hr/>
        <span>Private key:</span>
          <div style={{maxWidth: 900, wordWrap: "break-word"}}>
              <span style={{margin: 20}}>{(privKey)}</span>
          </div>
          </div>
          <div>
            <button onClick={depositEthToArbitrum}>
                deposit eth to arbitrum chain
            </button>
            <button onClick={withdrawEthToArbitrum}>
                withdraw eth from arbitrum
            </button>
            <button onClick={refreshBalances}>
                refresh balances
            </button>
          </div>
        </div>

        withdrawals from l2(arbitrum) to l1(ethereum) takes 24 hours roughly on kovan4 testnet.
  </div>
 )
}

export default AccountInfo;