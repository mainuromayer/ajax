function postComment(){
  // retrieving the form data
  let myForm = document.getElementById('mainForm');
  // we could create our own object with {}, but we can speed up our life by using the form FormData interface
  var formData = new FormData(myForm);

  // *** step 1: setup the XMLHttpRequest object
  let request = new XMLHttpRequest();

  // *** step 2: instantiate the request object
  let method = "POST";
  let url = "./data/xmlhttp_info-1.txt";
  request.open(method, url);

  // *** step 3: defining event listener for readystagechange event
  request.onreadystatechange = function(){
      // check if the request was complete and was successful
      if(this.readyState == 4 && this.status == 200){
          // inserting the response from the server into an HTML element
          // You need to have an element with id="result" in your HTML to display the response
          document.getElementById("result").innerHTML = this.responseText;
      }
  }

  // *** step 4: send the request to the server
  request.send(formData);
}