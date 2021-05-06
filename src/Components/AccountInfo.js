import React, { useEffect, useState } from "react";
// import { PageHeader, Button } from "antd";
import { useArbTokenBridge } from "token-bridge-sdk";
import { ethers, utils } from "ethers";
import { toast, ToastContainer  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const MemeButton = styled.button`
  cursor: pointer;
  margin: 1rem 0.1rem 1rem 0.1rem;
  border: 0;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  font-family: 'courier';
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  :hover {
    background-color: orange;
    color: white;
  }
`;

function AccountInfo({handleLogout, privKey, bridgeDetails, arbProvider, arbSigner, metadataCID}) {
  const [mintStatus, setMintStatus] = useState('not started')

  const bridge = useArbTokenBridge(
        bridgeDetails, false
  )

const {
  walletAddress,
  balances,
} = bridge;
 console.log("bridge", bridge)

 const abi = [
    "function totalSupply() view returns (uint)",
    "function tokenByIndex(uint) view returns (uint)",
    "function tokenURI(uint) view returns (string)",
    "function mint(address, string) returns (uint)"
  ];

 const contractArbitrum = new ethers.Contract("0xe41eE07A9F41CD1Ab4e7F25A93321ba1Dc0Ec5b0", abi, arbSigner);

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

const mint = async (metadataCID) => {
  setMintStatus('started')
  const tx = await contractArbitrum.mint(walletAddress, metadataCID);
  console.log(tx)
  setMintStatus('minted! head to the gallery to view')
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
          <div style={{margin:4}}>
            <div><strong>manage torus account</strong></div>
            <br />
            <div>
              address: <i>{walletAddress}</i>
            </div>
            <div>
              l1 eth balance: <i>{(utils.formatEther(balances.eth.balance)) || 0}</i>
            </div>
            <div>
              arb eth balance: <i>{(utils.formatEther(balances.eth.arbChainBalance)) || 0}</i>
            </div>
            {/* <span>Private key:</span>
            <div style={{maxWidth: 900, wordWrap: "break-word"}}>
                <span style={{margin: 20}}>{(privKey)}</span>
            </div> */}
            <MemeButton onClick={depositEthToArbitrum}>
                deposit eth to arb
            </MemeButton>
            &nbsp;
            <MemeButton onClick={withdrawEthToArbitrum}>
                withdraw eth from arb
            </MemeButton>
            &nbsp;
            <MemeButton onClick={refreshBalances}>
                refresh
            </MemeButton>
          </div>
          <hr />
          <div>
            <MemeButton onClick={() => { mint(metadataCID) }}>
                mint to arbitrum
            </MemeButton>
            <div>mint status: {mintStatus}</div>
          </div>
        </div>
        <hr />
        withdrawals from arbitrum to l1 take approximately 24 hours
  </div>
 )
}

export default AccountInfo;