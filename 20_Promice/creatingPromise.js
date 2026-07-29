

const promise = new Promise((resolve,reject) =>{

    let status = true;

    if(status){
        resolve("data fetched");
    }else{
        reject("error occured");
    }

})


console.log(promise);


promise
.then((data) =>{
    console.log(data);
})

.catch((error) =>{
    console.log(error);
})