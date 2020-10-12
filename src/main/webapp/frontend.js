function formSubmit(event) {
    var url = "A1Servlet";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onload = function(e) {
        if(request.readyState == 4 && request.status == 200) {
            location.reload();
        }
    }
    request.onerror = function() {
        // request failed
    };
    formdata = new FormData(event.target);
    var data="";
    for (var p of formdata.entries()){
        data+=p[0]+"="+encodeURIComponent(p[1]);
        data+="&";
    }
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    data+="date="+year+"--"+month+"--"+day;
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(data); // create FormData from form that triggered event
    event.preventDefault();
    event.target.reset();
}

function dataClear(event) {
    var url = "A1Servlet";
    let request = new XMLHttpRequest();
    var txt;
    var r = confirm("Are you sure to clear the chat HISTORY?");
    if (r == true) {
        request.open('DELETE', url, true);

        request.onload = function(e) {
            window.location.replace("http://localhost:8080/assignment1_war/");
        }
        request.onerror = function() {
            // request failed
        };

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(null); // create FormData from form that triggered event
        event.preventDefault();
        event.target.reset();
    }

}


// and you can attach form submit event like this for example
function attachFormSubmitEvent(formId){
    //document.getElementById(formId).addEventListener("submit", formSubmit);
    document.getElementById(formId).addEventListener("reset", dataClear);
}
