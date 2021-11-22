import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from 'react'
import Web3 from 'web3';
import { monAbi } from './Abi';
const monAddres='0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED'
function App() {

  useEffect(()=>{

      lireWeb3();

  },[])

  const [account,setAccount]=useState()
  const [bal,setBal]=useState()
  const [bal2,setBal2]=useState()
   const [contract,setContract]=useState()
 

    const lireWeb3= async()=>{
        if(!window.ethereum){

          alert('installer metamask')
          return
        }

        const web3= new Web3(window.ethereum)
        await window.ethereum.enable()
        const comptes= await web3.eth.getAccounts()
        const balance= await web3.eth.getBalance(comptes[0])
        setAccount(comptes)
        setBal( await web3.utils.fromWei(balance,'ether'))

        const monContract= new web3.eth.Contract(monAbi,monAddres);
        setContract(monContract)
        const balance2= await monContract.methods.balanceOf(comptes[0]).call()
        setBal2(balance2)



    }


    const wraper= async()=>{
      await window.ethereum.enable()
     const n= 1000000000000000000
      await contract.methods.deposit().send({from:account[0], value:n})

    }

    const unwraper= async()=>{
      await window.ethereum.enable()
     
      await contract.methods.withdraw('2').send({from:account[0]})

    }

    const delegation=async()=>{
      await window.ethereum.enable();
      await contract.methods.delegate('0xbf61db1cdb43d196309824473fa82e5b17581159', pourcentage('10')).send({from:account[0]})

    }

    function pourcentage(pourcent){
      return pourcent*100;
    }
    


  return (
    <div className="App">
      <header className="App-header">

        votre balance est de {bal} SGB <br/>
        votre balance WSGB est de {bal2} WSGB
        <img src={logo} className="App-logo" alt="logo" />
        <p>

              <button onClick={wraper}>Wraper</button> <br/>
              <button onClick={unwraper}>unWraper</button> <br/>
              <button onClick={delegation}>Deleguer</button> <br/>

            {account} <br/>
           
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
