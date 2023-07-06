// fetch("https://api.chucknorris.io/jokes/random")
// .then((responce) => {
//     console.log(responce.json());
// })
// // .then()
// // .then()
// // .then() //good
// .catch()//bad 

fetch("https://api.chucknorris.io/jokes/random")
.then((responce) => {
    responce.json();
})
 .then((data) =>{
    //console.log("DATA is:",data)
    var joke=data.value;
    console.log("JOKE is:",joke)
 })
// .then()
// .then() //good
.catch()//bad 
