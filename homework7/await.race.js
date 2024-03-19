let minMS = 1000;
let maxMS = 5000;

function secRandom (min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

 function prom1 (){
     return  new Promise( (result, reject) => {
         setTimeout(result, secRandom(minMS, maxMS),1)
     })
 }
 function prom2 (){
     return  new Promise( (result, reject) => {
         setTimeout(result, secRandom(minMS, maxMS),2)
     })
 }
 function prom3 (){
     return  new Promise( (result, reject) => {
         setTimeout(result, secRandom(minMS, maxMS),3)
     })
 }

 async function race() {
    return console.log(await Promise.race([prom1(),prom2(), prom3()]))
 }

 race();