const Web3= require('web3')
const monAbi=require('./build/contracts/MonContract.json')
const address="0x5235DF5f4394CE345952BCA3e8A840b5c0Ec8182";


const lireWeb3=async()=>{
    
    const web3= new Web3(new Web3.providers.WebsocketProvider('HTTP://127.0.0.1:7545'))
    const comptes= await web3.eth.getAccounts();
    
    const monContrat= new web3.eth.Contract(monAbi.abi,address);

    //const record= await monContrat.methods.enregistrer('Enock').send({from:comptes[0]});

    //console.log(record)

    console.log(await monContrat.methods.noms(0).call())

    // const event= await monContrat.getPastEvents('MonEvenement', {fromBlock:0, toBlock:'latest'});
    // const e= event.map((i)=>i.returnValues);
    // console.log(e)

    await monContrat.events.MonEvenement({fromBlock:0,toBlock:'latest'})
    .on('data',event=>console.log(event))
    .on('error',console.error)

    
}
lireWeb3()