
let title = document.getElementById("title");

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";


// GET Request
async function getData(){

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data);
    
}

getData();