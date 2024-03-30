let button = document.getElementById('three');
let div = document.getElementsByTagName('div')[0];

button.addEventListener('click', display);

async function display(){
    // use await to wait for the response to come back before continuing on with our code
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2", {
        method: 'GET',
        headers: {"Application": "application/json"}
    });

    // now continue
    const userObject = await response.json();
    const LowerCase = userObject.name.toLowerCase();

    // finally, lets insert result into our div
    div.innerText = "Output : " + LowerCase;
}