const url = "http://localhost:5500/api";

const newUser = {
    name: "Manu Ginobili",
    avatar: "https://picsum.photos/200/300",
    city: "Bahía Blanca, Argentina"
}

// GET
function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(
                response.data
            )
        }) // quando dá certo.
        .catch(error => console.error(error)); // quando dá erro.
}

// POST
function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.error(error))
};

getUsers();
addNewUser(newUser);