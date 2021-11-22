const provider=require('@truffle/hdwallet-provider')
const Web3= require('web3')
const monAbi=require('./build/contracts/MonContract.json')

const key='2788fb5ae8dc3028ea2ce0ea1cc93fd312bddf135df1fb975665cf1bb45608b0'
const compte='0x3159e5f4C30215179e09EE5B21dA05fF02b1755B'

const lireWeb3=async()=>{
    
    const p=new provider(key,'https://rpc-mumbai.maticvigil.com/v1/fde58b5bae76f86e8fca84d9c7e8ec8cf98865ab')
    const web3= new Web3(p)
    const networkId= await web3.eth.net.getId()
    const monContrat= new web3.eth.Contract(monAbi.abi,monAbi.networks[networkId].address);
    
    
    const tx=  await  monContrat.methods.enregistrer('SAMY').send({from:compte});
    console.log('le hash de la transaction',tx.transactionHash);

   console.log(await monContrat.methods.noms(1).call())

    
}
lireWeb3()