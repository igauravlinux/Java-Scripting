


let fetchData = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let success = true;
        success ? resolve("Data Fetched") : reject("Error occured");
    },2000)
})

fetchData
.then((data) =>{
    console.log(data);
})

.catch((error) =>{
    console.log(error);
})