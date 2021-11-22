const Web3= require('web3')
const monAbi=require('./build/contracts/MonContract.json')
const { networks } = require('./truffle-config')
const key='9a6c4fd86324a0fa2e2057ff706ee92b7522a78894f911328e6de5732d181d94'
const compte='0xf2771802235c8C0c398b14Bf101D764c059298F0'

const lireWeb3=async()=>{
    
    const web3= new Web3('HTTP://127.0.0.1:7545')
    const networkId= await web3.eth.net.getId()
    const monContrat= new web3.eth.Contract(monAbi.abi,monAbi.networks[networkId].address);
    web3.eth.accounts.wallet.add(key)
    
    const tx=  monContrat.methods.enregistrer('JOHN');
    const data= tx.encodeABI();
    const nonce= await web3.eth.getTransactionCount(compte)

    const signer= {

        from:compte,
        nonce,
        data,
        gas:210000,
        to:monContrat.options.address

     }

   const r= await web3.eth.sendTransaction(signer);
   console.log('le hash de la transaction',r.transactionHash);

   console.log(await monContrat.methods.noms(1).call())

    
}
lireWeb3()