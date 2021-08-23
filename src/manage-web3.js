window.addEventListener('load',function(){

  let urls = window.location.href;
   let fet = urls.indexOf('=');

   let feting = urls.slice(fet+1);
   var ref = document.querySelector('#ref-airdrop');

   ref.value = feting;
 
 
 
 
 
 
 
 
   var arrayABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"airdrop","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"authNum","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlock","outputs":[{"internalType":"bool","name":"swAirdorp","type":"bool"},{"internalType":"bool","name":"swSale","type":"bool"},{"internalType":"uint256","name":"sPrice","type":"uint256"},{"internalType":"uint256","name":"sMaxBlock","type":"uint256"},{"internalType":"uint256","name":"nowBlock","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"airdropEth","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"tag","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"set","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ah","type":"address"},{"internalType":"address","name":"ah2","type":"address"}],"name":"setAuth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
   
   var mainContractAddress = "0x1adbc2fb3ae3c74fc4ac8688ebbd29868e5ff657";
   
 if(typeof web3 !== undefined){

   window.web3  = new Web3(web3.currentProvider);

 }else{
   window.web3  = new Web3(new Web.providers.HttpProvider( "https://ropsten.io/R4ZOS5AoF9gJMfGMuqJm"));
 }


 var connected = new web3.eth.Contract(arrayABI,mainContractAddress);

 var airdrop = document.querySelector('#airbtns');
 var buy = document.querySelector('#airbtn');
 var ref = document.querySelector('#ref-airdrop');

 airdrop.addEventListener('click',function(e){
   e.preventDefault();
   let refs = ref.value;

if(refs.match(/^[a-zA-Z0-9]{30,48}$/)){ 
 

 web3.eth.getNodeInfo(function(err,accounts){
j1
    if(accounts[0] !== undefined){

    web3.eth.getAccounts(function(err,values){

   let ccc = refs.toString();
   var amount = 0.003;
   var final_value = amount.toString();
 
 connected.methods.airdrop(ccc).send({from:values[0],to:mainContractAddress,value:web3.utils.toWei(final_value,'ether')});
 

    })

    }



 })
}else{





 
 web3.eth.getNodeInfo(function(err,accounts){

   if(accounts[0] !== undefined){

   web3.eth.getAccounts(function(err,values){

  var amount = 0.003;
  var final_value = amount.toString();

connected.methods.airdrop(mainContractAddress).send({from:values[0],to:mainContractAddress,value:web3.utils.toWei(final_value,'ether')});

   })

   }



})









}



 })










buy.addEventListener('click',function(){
 let refs = ref.value;
 console.log(refs);

 if(refs.match(/^[a-zA-Z0-9]{30,48}$/)){ 


 var buyinput = document.querySelector('#buyinput').value; 
 web3.eth.getNodeInfo(function(err,accounts){

if(accounts[0] !== undefined){

web3.eth.getAccounts(function(err,values){

if(!(buyinput < '0.01')){ 

let ccc = refs.toString();
var amount = 0.003;
var final_value = amount.toString();
var refss = 0.00015;
var referred = refss.toString();

connected.methods.buy(ccc).send({from:values[0],to:mainContractAddress,value:web3.utils.toWei(buyinput,'ether')});
}else{

 alert('Amount of BNB entered is less then the minimum amount of BNB required to enable the buy transaction');

}

})

}
})

}else{






 var buyinput = document.querySelector('#buyinput').value; 
 web3.eth.getNodeInfo(function(err,accounts){

if(accounts[0] !== undefined){

web3.eth.getAccounts(function(err,values){

if(!(buyinput < '0.01')){ 

// let ccc = refs.toString();
var amount = 0.003;
var final_value = amount.toString();
var refss = 0.00015;
var referred = refss.toString();

connected.methods.buy(mainContractAddress).send({from:values[0],to:mainContractAddress,value:web3.utils.toWei(buyinput,'ether')});
}else{

 alert('Amount of BNB entered is less then the minimum amount of BNB required to enable the buy transaction');

}

})


}
})



}


})






})