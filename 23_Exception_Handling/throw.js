



function chackAge(age) {

    if(age <= 18){
        throw new Error("you must be at least 18 years old");
    }

    return "Access Granted";
}



try{
    console.log(chackAge(19));
}
catch(e){
    console.log("Error caught: ",e.message);
}


