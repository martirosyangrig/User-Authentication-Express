const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", async (e)=> {
    e.preventDefault();

    let formData = {} //creating obj
    formData.email= email.value;
    formData.password = password.value; // giving it user types email and pass

    
    await fetch("http://localhost:3001/login", { // posting it to server
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
       
        body: JSON.stringify(formData) ,
        redirect: "follow"
      })
      .then(res => {
        if(res.status === 200){ // if 200 status redirecting to main
             window.location.href ="http://localhost:3001/";
        }
        else{ // else showing user that Incorect username or password!
            document.querySelector(".center span").textContent = "Incorect username or password!";
           email.value = "";
           password.value = "";
        }
       
      })

})
