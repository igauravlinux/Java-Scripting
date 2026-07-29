// Used for cleaup or final step --- (finally always runs).


try{
    let a = 10; 
    console.log(a + b);
}
catch(e){
    console.log("Error caught: ",e.message);
}
finally{
    console.log("all steps executed succefully");
}
