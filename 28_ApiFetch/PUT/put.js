const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

async function changeData() {
    
    const response = await fetch(apiUrl,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name: "Gaurav Kumar",
            email: "hi.gaurv89@hotmal.com",
            phone: "8891223092121",
            website: "gaurav.in"
        })
    })

const data = await response.json();
console.log(data);
}

changeData()




