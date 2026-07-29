


let fetchData = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let success = true;
        
        if(success){
            resolve("Data fetched")
        }else{
            reject("Error occured")
        }


    },2000)
})

fetchData
.then((data) =>{
    console.log(data);
})

.catch((error) =>{
    console.log(error);
})