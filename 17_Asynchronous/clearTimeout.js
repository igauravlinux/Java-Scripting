

let timeout = setTimeout(()=>{
    console.log("This will not to shown");
},3000);

clearTimeout(timeout);