function getDetails(){
    if(localStorage.Processed) {
        showRequests(localStorage.Processed);
    }
     else{   
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
}



 function showRequests(x){
      var updated;
      var get = JSON.parse(x);
     // var violations = {
     //     "absent": [],
     //     "late": [],
     //     "NoID": [],
     //     "ImproUniform": [],
     //     "ImproShoes": [],
     //     "ImproHairCut": [],
     //     "CutClass": [],
     //     "vandalism": [],
     //     "stealing": [],
     //     "HeavyViotion": []
         
     // }
     var temp = -1;
    
    for(var i = 0; i <get.length; i++){
        
               //   var testing = temp.vioLate;
            if(document.getElementById("idNumber").value == get[i].idnumber){
                   
               temp = i;  
               break;  
           }
    
       }

         if(temp >= 0 ){
            document.getElementById("display").innerHTML= temp.name + " " + temp.section + " " + temp.age + " " + temp.parentsContact ; //
            if(document.getElementById("late").checked == true){
               get[temp].vioLate++;
                document.getElementById("display1").innerHTML = "Late:" + get[temp].vioLate;
               
            }
            if(document.getElementById("absent").checked == true){
                get[temp].vioAbsent++;
                document.getElementById("display2").innerHTML = "Cut class :" + get[temp].vioAbsent;
            }
            if(document.getElementById("noId").checked == true){
                get[temp].vioNoId++;
                document.getElementById("display3").innerHTML = "No Id:" + get[temp].vioNoId;
                if(get[temp].vioNoId == 5 || get[temp].vioNoId == 8 || get[temp].vioNoId == 10 || get[temp].vioNoId == 12 || get[temp].vioNoId >=13){
                   alert('studend is subject for suspenstion kasi pangit ka');
                }
            }
            
            if(document.getElementById("ImproperHairCut").checked == true){
                get[temp].vioImproperHairCut++;
                document.getElementById("display4").innerHTML = "ImproperHairCut:" + get[temp].vioImproperHairCut;
            }
              if(document.getElementById("CutClass").checked == true){
                get[temp].vioCutClass++;
                document.getElementById("display5").innerHTML = "Cut class :" + get[temp].vioCutClass;
            }
             if(document.getElementById("ImproUniform").checked == true){
                get[temp].vioImproUniform++;
                document.getElementById("display6").innerHTML = "ImproperHairCut:" + get[temp].vioImproUniform;
            }
         
     }
     else{
       document.getElementById("display").innerHTML = "no user found";
       document.getElementById("display1").innerHTML = "";
       document.getElementById("display2").innerHTML = "";
    }
    localStorage.Processed = JSON.stringify(get);
 }





