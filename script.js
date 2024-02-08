
const imgs = [];


function ShowImgs(input)
{
    fetch("https://api.pexels.com/v1/search?query=" + input,{
        headers: {
          Authorization: "J4tA2p5EPDm55QUMNJdqsZy6Ye8DS9BOAw2DKLThIxpSqq3nCN9BvTGB"
        } })
      .then(resp => {
           return resp.json()
      })
      .then(data => {
          console.log(data)
          setImages(data)
      })
      .catch((err) => console.log("problem: ", err));
}

/*
function setDogs()
{
    fetch("https://api.pexels.com/v1/search?query=Brittany Spaniel",{
        headers: {
          Authorization: "J4tA2p5EPDm55QUMNJdqsZy6Ye8DS9BOAw2DKLThIxpSqq3nCN9BvTGB"
        } })
      .then(resp => {
           return resp.json()
      })
      .then(data => {
          console.log(data)
          setImages(data)
      })
      .catch((err) => console.log("problem: ", err));
}

function setCats()
{
    fetch("https://api.pexels.com/v1/search?query=cats",{
        headers: {
          Authorization: "J4tA2p5EPDm55QUMNJdqsZy6Ye8DS9BOAw2DKLThIxpSqq3nCN9BvTGB"
        } })
      .then(resp => {
           return resp.json()
      })
      .then(data => {
          console.log(data)
          setImages(data)
      })
      .catch((err) => console.log("problem: ", err));
}
*/
function setImages(data) {
 
    let arr = data.photos;

    let display = document.getElementById("images");
    display.innerHTML = '';
    for(let i = 1 ; i < arr.length; i++)
    {
        let src = arr[i].src.medium;
        /*
        let img = document.getElementById("img"+i);
        img.setAttribute("height", "600");
        img.setAttribute("src", src);
        */
       
        display.innerHTML += '<div class="card col-3" style="width: 18rem;"> <img id="img1" class="card-img-top" src="'+src+'" alt="Card image cap"> <div class="card-body">  <h5 class="card-title">Card title</h5>         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>  <a href="#" class="btn btn-primary">Go somewhere</a></div></div>'  
    }
   
}   
