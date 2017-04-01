function getDetails(){ 
        var req = new XMLHttpRequest();
        var url = "http://localhost/webtek-lab/sample.txt";
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
      var updated;
      var get = JSON.parse(x);
      var temp = -1;
      var log = [];
      if(localStorage.Processed) {
        log = JSON.parse(localStorage.Processed);
      }
      var name = "";
     
     for(var i = 0; i <get.length; i++){
        var container;
         
                //   var testing = temp.vioLate;
             if(document.getElementById("studId").value == get[i].idnumber){
           //     document.getElementById("display1").innerHTML = get[i].idnumber +" "+ get[i].name;
                container =get[i].idnumber +" "+ get[i].name;
                name = get[i].name;
                temp = i;  
                break;  
//            } else{
//        document.getElementById("display").innerHTML = "no user found";
//        document.getElementById("display1").innerHTML = "";
//        document.getElementById("display2").innerHTML = "";
//     }
     
    }
     }

    if(temp >= 0 ){

             if(document.getElementById("late").checked == true){
                var late= "late";
                alert(container + "is late");     
             }
             if(document.getElementById("absent").checked == true){
//                 document.getElementById("display3").innerHTML = (container + "is recorded as absent");
                 var absent = "absent";
             }
             if(document.getElementById("noId").checked == true){
//                 document.getElementById("display4").innerHTML = "No Id:";
                 var noID = "NoID";
             }
             
             if(document.getElementById("ImproperHairCut").checked == true){
//                 document.getElementById("display5").innerHTML = "Improper HairCut:";
                 var improperHair = "ImproperHairCut";
                 
             }
               if(document.getElementById("Truancy").checked == true){
//                 document.getElementById("display6").innerHTML = "Cut class :";
                   var truancy = "Truancy";
             }
              if(document.getElementById("ImproUniform").checked == true){
//                 document.getElementById("display7").innerHTML = "Improper Uniform:";
                var improperUniform = "Improper Uniform";
             }
        if(document.getElementById("ImproShoes").checked == true){
//                 document.getElementById("display7").innerHTML = "ImproperShoes:";
                var improperShoes = "Improper Shoes";
             }
        
            if(document.getElementById("bullying").checked == true){
                 var bullying = "bullying";
             }
             if(document.getElementById("verbalAbuse").checked == true){
                 var vAbuse = "Verbal Abuse";
             }
        
             if(document.getElementById("PDA").checked == true){
                 var PDA = "PDA";
             }
            if(document.getElementById("Dishonesty").checked == true){
                 var Dishonesty = "Dishonesty";
             }
            if(document.getElementById("cheating").checked == true){
                 var Cheating = "Cheating";
             }
            if(document.getElementById("smoking").checked == true){
                 var smoking = "smoking";
             }
            if(document.getElementById("Intoxication").checked == true){
                 var Intoxication = "Intoxication";
             }
            if(document.getElementById("InappMaterial").checked == true){
                 var inaapMat = "Inappropriate Material";
             }
            if(document.getElementById("Disrespect").checked == true){
                 var disrespect = "Disrespect";
             }
            if(document.getElementById("Vandalism").checked == true){
                 var vandal = "Vandalism";
             }
            if(document.getElementById("DmgSchl").checked == true){
                 var dmgSchl = "Damage to School Properties";
             }
            if(document.getElementById("Stealing").checked == true){
                 var stealing = "Stealing";
             }
            if(document.getElementById("Tampering").checked == true){
                 var tampering = "Tampering";
             }
            if(document.getElementById("Littering").checked == true){
                 var littering = "Littering";
             }
      }
     

    var logObj = {"date":document.getElementById("date").value, "idnum":document.getElementById("studId").value, "name":name, "late":late, "absent":absent
                 , "noID":noID, "ImproperHairCut":improperHair, "Truancy":truancy, "improperUniform":improperUniform,  "improperShoes":improperShoes,"bullying":bullying,  "Verbal Abuse":vAbuse, "PDA":PDA, "Dishonesty":Dishonesty, "Cheating":Cheating, "Smoking":smoking, "Intoxication":Intoxication, "Inappropriate Material":inaapMat, "Disrespect":disrespect, "Vandalism":vandal, "DamageToSchool":dmgSchl, "Stealing":stealing, "Tampering":tampering, "Littering":littering} ;
    log.push(logObj);

    localStorage.Processed = JSON.stringify(log);

//    document.getElementById("idNumber").value = "";
//    document.getElementById("date").value = "";
//    document.getElementById("late").checked = "";
     temp = -1;
   }
 


//function search() {
//     var log23 = [];
//     log23 = JSON.parse(localStorage.Processed);
//
//     for()
// }



