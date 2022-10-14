let body = document.querySelector(".body");

const no = document.querySelector("#name")
let username = "";
let nameBtn = document.querySelector("#cont")
no.addEventListener("input", () => {
    if(no.value != "") {
       nameBtn.disabled = false;
    } else {
        nameBtn.disabled = true;
    }
})
const user = () => {
    if(no.value != "") {
    body.removeChild(intro)
    init()
    username= no.value;
    }
}
let intro = document.querySelector(".fore-container")
no.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        user()
    }
})
nameBtn.addEventListener("click",user);

function init() {

    let dot = ""
    setInterval(function nahi() {  
        dot += "."
        if(dot.length == 4) {
            dot = "";
        }
    }, 500);
    function inter(text,delay) {
        return new Promise((resolve, reject) => {
            let a = document.createElement("h1")
            body.appendChild(a)

           let inter1 = setInterval(() => {
               a.innerHTML = `${text} <span>${dot}</span>`
           }, 500);
           setTimeout(() => {
            resolve()
            clearInterval(inter1)
           }, delay);
        })
    }
    function first() {
        return inter(">>> Initializing Hacking", 3000)
    }
    first().then(() => { 
        return inter(">>> Connecting to server", 2000)
    }).then(() => { 
        return inter(`>>> Retriving username "${username}"`, 1000)
    }).then(() => { 
        return inter(`>>> Getting details of "${username}"`, 3000)
    }).then(() => { 
        return inter(`>>> Finding password match  among 3 trillion combinitions`, 3000)
    }).then(() => { 
        return inter(">>> Password matched!!", 1000)
    }).then(() => { 
        return inter(">>> Facebook hacked!!", 500)
    }).then(() => { 
        return inter(">>> Instagram hacked!!", 500)
    }).then(() => { 
        return inter(">>> Whatsapp hacked!!", 500)
    }).then(() => { 
        return inter(">>> Twitter hacked!!", 500)
    }).then(() => { 
        return inter(">>> LinkedIn hacked!!", 500)
    }).then(() => { 
        return inter(">>> SnapChat hacked!!", 500)
    })
    
}