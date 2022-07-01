const url = "http://localhost:5500/api";

// Novo usuário.
const newUser = {
    name: "Manu Ginobili",
    avatar: "https://picsum.photos/200/300",
    city: "Bahía Blanca, Argentina"
}

// Editar usuário.
const userUpdated = {
    name: "Caravaggio",
    avatar: "https://picsum.photos/200/300",
    city: "Porto Ercole, Itália"
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
    
// Pega um usuário.
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userID.textContent = response.data.id
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))
};

// Editar usuário.
function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

// Deletar usuário.
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
};

getUsers();
getUser();
addNewUser(newUser);
updateUser(4, userUpdated); // Indicar qual ID a ser editado.
deleteUser(3); // indica qual ID a ser deletado.