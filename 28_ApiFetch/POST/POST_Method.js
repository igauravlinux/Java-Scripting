const apiUrl = "https://jsonplaceholder.typicode.com/users";


async function createPost(){

   const response = await fetch(apiUrl,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"  
        },

        body: JSON.stringify({
            name: "Gaurav",
            age: 23
        })
   })

   const data = await response.json();
   console.log(data);
   
}

createPost();