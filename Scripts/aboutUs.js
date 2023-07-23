window.onload = tokenCheck();
function tokenCheck() {
    let token = localStorage.getItem("userToken");
    if (token) {
        document.getElementById("login").remove()
        document.getElementById("signup").remove()
        let name = localStorage.getItem("userName");
        let li1 = document.createElement("li");
        let a1 = document.createElement("a");
        a1.innerText = name;
        a1.setAttribute("href", "./myAppointments.html");
        a1.classList.add("navbar-link");
        li1.setAttribute("id", "username");
        li1.append(a1);
        let li2 = document.createElement("li");
        let a2 = document.createElement("a");
        a2.innerText = "Log Out";
        a2.setAttribute("href", "#");
        a2.classList.add("navbar-link");
        li2.setAttribute("id", "logout");
        li2.append(a2);
        li2.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("userToken", "");
            localStorage.setItem("userName", "");
            location.reload();
        })
        document.querySelector(".navbar-list").append(li1, li2);
    }
}


let PHYSIOTHERAPY = document.getElementById("PHYSIOTHERAPY");
let OSTEOPATHY = document.getElementById("OSTEOPATHY");
let CHIROPRATIC = document.getElementById("CHIROPRATIC");
let MASSAGE = document.getElementById("MASSAGE");
let ENERGY = document.getElementById("ENERGY");
fetchdata(PHYSIOTHERAPY,"PHYSIOTHERAPY");
fetchdata(OSTEOPATHY,"OSTEOPATHY");
fetchdata(CHIROPRATIC, "CHIROPRATIC");
fetchdata(MASSAGE, "MASSAGE");
fetchdata(ENERGY,"ENERGY HEALING");


function fetchdata(div,value){
    fetch(`https://nice-ruby-goose-fez.cyclic.app/experts/${value}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(!data.isError){
            div.innerHTML = "";
           data.data.forEach((el)=>{
            let a = createCard(el.image);
            div.append(a);
           })
        }
        else{
            alert(data.error)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

function createCard(img){
    let card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML = ` <img src="${img}" alt="img">`
    return card
}

document.getElementById("el").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "./expertLogIn.html"
})