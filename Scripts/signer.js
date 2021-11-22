const Web3= require('web3')
const monAbi=require('./build/contracts/MonContract.json')
const address="0x5235DF5f4394CE345952BCA3e8A840b5c0Ec8182";
const key='9a6c4fd86324a0fa2e2057ff706ee92b7522a78894f911328e6de5732d181d94'
const compte='0xd120a1E3fE83E91518921A3390914B88fF433404'

const lireWeb3=async()=>{
    
    const web3= new Web3('HTTP://127.0.0.1:7545')
    const monContrat= new web3.eth.Contract(monAbi.abi,address);

    const tx= await monContrat.methods.enregistrer('Alice');
    const data= tx.encodeABI();
    const nonce= await web3.eth.getTransactionCount(compte)

    const signer= await web3.eth.accounts.signTransaction({
        nonce,
        data,
        gas:210000,
        to:address

     }, key );

   const r= await web3.eth.sendSignedTransaction(signer.rawTransaction);
   console.log('le hash de la transaction',r.transactionHash);

   console.log(await monContrat.methods.noms(2).call())

    
}
lireWeb3()