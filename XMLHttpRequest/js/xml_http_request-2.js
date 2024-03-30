function postComment() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("mainForm").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("POST", "./data/xmlhttp_info-2.txt", true);
    xhttp.send();
  }