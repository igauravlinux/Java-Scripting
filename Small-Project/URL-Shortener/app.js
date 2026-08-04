const longUrl = document.getElementById("longUrl");
const shortenBtn = document.getElementById("shortenBtn");
const shortUrl = document.getElementById("shortUrl");
const copyBtn = document.getElementById("copyBtn");


shortenBtn.addEventListener("click",async () =>{

    const url = longUrl.value.trim();

    if(!validateUrl(url)){
        return;
    }

    const shortLink = await shortenUrl(url);
        
})

function validateUrl(url){
    
    

    if(url === ""){
        alert("Please enter a valid URL");
        return false;
    }
    return true;
}

async function shortenUrl(url){
    
    try{
        const response = await fetch("https://ulvis.net/api/write/post", { 
        method : 'POST',
        headers: {
            "Content-Type" : 'application/json',
        },
        body: JSON.stringify({
            url: url
        }),
    })

    if(!response.ok){
        throw new Error("Something went wrong")
    }

    const data = await response.json();
    console.log(data);
    }
    catch(e){
        console.log(e.message);
        
    }

}

  