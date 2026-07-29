fetch()

<script>
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
</script>

<h1>Step 1</h1>
<p>Browser request bhejta hai</p>

Browser
   │
   │ Request
   ▼
Server

<h1>Step 2</h1>
<p>Server response bhejta hai</p>

Server
   │
   │ JSON Data
   ▼
Browser

<!-- Note:- fetch() turant data nahi deta , ye promise return krta hai -->

<h2> Without await </h2>
<script>
    let response = fetch(url);
    console.log(response);
</script>

Output :- Promise { <pending> }
<b>Kyuki data abhi tak aaya hi nahi.</b>

<h1> Isliye await likha jata hai</h1>
<script> await fetch(url) </script>

-----------------------------------------------------

<!-- Ab javaScript Bolega -->
Wait...

↓

Response aa gaya?

↓

Haan

↓

Ab response variable me store karo

<!-- Ab -->

response ke andar kuch aisa hota hai

<script>

    // ye actual JSON nahi hai

    Response {
        status:200,
        ok:true,
        headers:...
    }
</script>

-----------------------------------------------

<h1> Fir </h1>

<script>
    let data = await response.json();
</script>

<p>Ye bhi asynchronous hai.</p> 




<!-- response.json() -->
<p>server se aaye text ko JavaScript object me convert karta hai.</p>

<script>
    <h1>JSON<h1>
{
    "userId":1,
    "id":1,
    "title":"delectus aut autem",
    "completed":false
}
</script>
<!-- Lekin ye abhi raw response hai. -->


<p> isliye await response.json() likhte hai </p>

ab:- 

data =
{
   userId:1,
   id:1,
   title:"delectus aut autem",
   completed:false
}

<h1>Console</h1>
<script>
    console.log(data);
</script>

<h1>Output</h1>
<script>
{
    userId:1,
    id:1,
    title:"delectus aut autem",
    completed:false
}
</script>