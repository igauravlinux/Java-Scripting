const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function postData(){

    const response = await fetch(apiUrl,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name : "Gaurav kumar",
            age : 23,
            city: "Patna"
        })
    }
);

const data = await response.json();
console.log(data);
}

postData();
