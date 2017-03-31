function getDetails(){
    var req = new XMLHttpRequest();
    var url = "http://localhost/makil/sample.txt";
    req.open("GET", url);
    req.onreadystatechange = function() {
        var ul = document.getElementById("pendingreq");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText != null) {
                var par = JSON.parse(this.responseText);
               // saveToLocalStorage(par);
                showRequests(this.responseText);
            }
            else {
                ul.innerHTML = "no data found";
            }
        }    
    };
    req.send();
}

 function showRequests(x){
      var get = JSON.parse(x);
     var testing = 0;
     for(var i = 0; i <get.students.length; i++){
         var temp = get.students[i];
         if(document.getElementById("idNumber").value === temp.idnumber){
//             document.getElementById("display").innerHTML= temp.name + " " + temp.section + " " + temp.age + " " + temp.parentsContact ; //
             if(document.getElementById("late").checked == true){
                testing++;
                 document.getElementById("display").innerHTML = testing;
             }
                     
         
     }else{
        document.getElementById("display").innerHTML = "no user found";
     }
     
 }
 }



