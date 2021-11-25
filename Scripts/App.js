const Web3= require('web3')


const lireWeb3=async()=>{

    const web3= new Web3('HTTP://127.0.0.1:7545');
    const comptes= await web3.eth.getAccounts();

     console.log(comptes)

     const nbBlock= await web3.eth.getBlockNumber();
     console.log(nbBlock)

     const balance= await web3.eth.getBalance('0xADcbBe2C11C4fF516f06c8b3b45e754342E3457a')
     console.log('votre balance est', await web3.utils.fromWei(balance,'ether'))

    await web3.eth.sendTransaction({from:comptes[1], to:comptes[2],value:10000000000000000000})
    const balance1= await web3.eth.getBalance(comptes[1])
     console.log('votre balance est', await web3.utils.fromWei(balance1,'ether'))

     await web3.eth.getBlock(1).then(function(block){

         console.log({numero:block.number,txHash:block.hash})
     })

     await web3.eth.getBlockTransactionCount(2).then(console.log)


   console.log(await web3.utils.toHex(10))
   console.log(await web3.utils.toHex('Enock'))
   console.log(await web3.utils.randomHex(16))

 console.log(await web3.utils.sha3('Enock'))
 console.log(await web3.utils.sha3('12'))

// console.log(await web3.utils.keccak256('Mukolos'))

// console.log(await web3.utils.soliditySha3('Enock'))

 // console.log(web3.eth.accounts.create())

}

lireWeb3()
