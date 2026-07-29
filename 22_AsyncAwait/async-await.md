 
1. async kya hai ?

--> Jab kisi function ke aage (async) likhte hai ,

async function fetchData(){

}

--> "to fir ye function asynchronous kaam krgega aur hamesha Promise return krega".



2. await kya hai ?

--> await ka matlab hai "is line ko result aane tak wait kro".

<!-- Note:- Lekin ye sirf async function ke andar use hota hai -->

Example:- 

<script>
    // requesting server
    let response = await fetch(url);
</script>

Server ko request bhejo

↓

Jab tak response na aaye
ye line yahin rukegi

↓

Response milte hi
next line chalegi