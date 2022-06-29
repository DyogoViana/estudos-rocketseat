const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(
                response.data
            )
        }) // quando dá certo.
        .catch(error => console.log(error)); // quando dá erro.
}

getUsers();