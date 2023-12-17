let id = new URLSearchParams(window.location.search).get("id")
let ikia = document.querySelector(".ikia")

const getAllType = function () {
    fetch(`http://localhost:3000/service/${id}`)
        .then(res => res.json())
        .then(data => {
            ikia.innerHTML = `<div class="ikia"> <img src="${data.img}" alt="">
           <h4>${data.name}</h4>
        <p>${data.info}</p>
        </div>
    `;
        })
        .catch(error=>console.log("error",error))
        
}
getAllType()