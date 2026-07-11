
// Basic CallBack Example

function fetchData(callback){

    setTimeout(() =>{
        console.log("Data Fetched");
        callback();
    },4000)
}

fetchData(() =>{
    console.log("callback executed");
});