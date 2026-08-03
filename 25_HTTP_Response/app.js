
// Example: Handling Response Status

fetch('https://api.example.com/data')
.then(response =>{
    if(!response.ok){
        throw new Error(`${response.status}`);
    }
    return response.json();
})

.then(data =>{
    console.log(data);
})

.catch(error =>{
    console.error('Error: ',error);
})