function postComment(){
    // create a new request
    let xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function(){
        const container = document.getElementById('mainForm');
        container.innerHTML = this.responseText;
    };

    // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("POST", "./data/xmlhttp_info-3.txt");

    // add a request header
    // xhr.setRequestHeader("CITY", "Dhaka");

    // send request
    xhr.send();

    // abort | request cancle
    // xhr.abort();

}