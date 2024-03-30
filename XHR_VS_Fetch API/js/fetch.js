let button = document.getElementById("two");
let div = document.getElementsByTagName("div")[0];

button.addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/users/2", {
        method: 'GET',
        header: {"Application": "application/json"}
    })
    .then((response) => {
        // console.log(response);
        return response.json();
    })
    .then((userObject) => {
        return userObject.name.toLowerCase();
    })
    .then(name => {
        div.innerText = "Output : " + name;
    })

    .catch(e => {
        console.log("Error : ", e);
    })
});