let button = document.getElementById('one');
let div = document.getElementsByTagName('div')[0];

button.addEventListener('click', () =>{
    // Step 1: create our ajax object
    let xhr = new XMLHttpRequest();

    // Step 2: configure our request 
    xhr.open("get", "https://jsonplaceholder.typicode.com/users/2");

    xhr.setRequestHeader('Accept', "application/json");


    // Step 3: 
    xhr.onreadystatechange = function(){
        // xhr request is completed
        if(xhr.readyState === 4 && xhr.status === 200){
            let jsonData = JSON.parse(xhr.responseText);
            div.innerText = "Output : " + jsonData.name;
        }else{
            xhr.innerText = "Error:" + xhr.status;
        }
    }

    // Step 4: send
    xhr.send();
});