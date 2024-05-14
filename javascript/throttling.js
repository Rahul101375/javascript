const inputHandler = document.querySelector('input');
const spanHandler = document.querySelector('span');

const scrollApi = (e)=>{
    console.log("throttling calling",e.target.value);
    spanHandler.innerText +=e.target.value;
}
// const throttling = (func,wait)=>{
//     let timeId=null;
//     return (...arg)=>{
//         if(timeId) return;
//         timeId =setTimeout(()=>{
//             func(...arg)
//         },wait)
//     }
// }
function throttle(func ,delay=1000){
    let firstCall = true  // this is call because of first time also delay call that why avoid this issue
    let timeId = null;
    let lastArgs = [];
    return (...args)=>{
        lastArgs =args;
        if(firstCall){
            func(...lastArgs);
            firstCall=false;
            return
        }
        if(timeId) return;
        timeId = setTimeout(()=>{
            timeId=null;
            func(...lastArgs)
        },delay)
    }
}
// this not working then arrow function change into normal function
const throttlingApiCall = throttling(scrollApi,1000);
window.addEventListener('mouseover',throttlingApiCall)