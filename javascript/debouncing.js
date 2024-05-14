const inputHandler = document.querySelector('input');


const searchApiCall= (e)=>{
    console.log("search Api calling",e.target.value)
}
const debounce = (func , waitTime)=>{
    let timeId;
    return (...arg)=>{
        clearInterval(timeId);
        <!-- console.log("timeId",timeId) -->
        timeId = setTimeout(()=>{
            func(...arg)
        },waitTime)
        <!-- time function is always return al number -->
    }

}
const debouncedCallApi = debounce(searchApiCall,1000);
<!-- console.log("debounce",debouncedCallApi) -->
inputHandler.addEventListener('input',debouncedCallApi);