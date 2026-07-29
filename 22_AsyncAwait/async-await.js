let title = document.getElementById("title");


// How to use aync-await
async function fetchData(){

    try{

        // wait for response
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Convert response to JSON
        let data = await response.json();

        console.log(data);
        title.innerText = data.title;
    }

    catch(error){
        console.log("Error: ",error);
    }

}


fetchData();














// async function fetchData(){
//     try{
//         let result = await new Promise((resolve,reject) =>{
//             setTimeout(() =>resolve("Data fetched"),2000)
//         })
//         console.log(result);
//     }catch (error){
//         console.log(error);
//     }
// }

// fetchData();

