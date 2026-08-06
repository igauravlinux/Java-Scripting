const apiUrl = "https://jsonplaceholder.typicode.com/users/1";


async function deleteData() {

    const response = await fetch(apiUrl,{
        method: "DELETE",
        
    });


    console.log(response.status);
}

deleteData();