const ikia = document.querySelector('.ikia')
const getAllType = function () {
    fetch(`http://localhost:3000/service`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                ikia.innerHTML += ` <div> <img src="${element.img}" alt="">
                <h4>${element.name}</h4>
                <p>${element.info}</p>
                <button onclick="deleteCard(${element.id})">DELETE</button>
                <button>Update</button>
                <a href="detail1.html?id=${element.id}"<button>Details</button></a>
            </div>
                `
            });
        })
        .catch(error => console.log("error", error))
}
getAllType()

function deleteCard(id) {
    console.log("salam");
        axios.delete(`http://localhost:3000/service/${id}`)
        window.location.reload()
    }