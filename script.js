var nameerror=document.getElementById("error-name");
var mobileerror=document.getElementById("error-tel");
var emailerror=document.getElementById("error-email");
var messageerror=document.getElementById("mess");
var submiterror=document.getElementById("error");
function validatename(){
   var name=document.getElementById("name").value;
   if(name.length==0){
    nameerror.innerHTML="Name is requried"
    return false;
   }
   if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
     nameerror.innerHTML="write full Name"
     return false;
   }
   nameerror.innerHTML='<i class="fas fa-check-circle"></i>';
   return true;

}
function phonekey(){
    var tel= document.getElementById("mobile").value;
    if(tel==0){
        mobileerror.innerHTML="10 digits required"
        return false;
    }
    if(tel.length!==10){
        mobileerror.innerHTML="phone number should be 10 digits"
        return false;

    }
    mobileerror.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;


}
function emailkey(){
     var email=document.getElementById("email").value;
     if(email.length==0){
        emailerror.innerHTML="email required";
        return false;
     }
     if(!email.match(/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/)){
        emailerror.innerHTML="email invaild"
        return false;
     }
     emailerror.innerHTML='<i class="fas fa-check-circle"></i>'
     return true;
}
function message(){
    var message=document.getElementById("text").value;
    var required=20;
    var len=required-message.length;
    if(len>0){
        messageerror.innerHTML=len+"more character required"
        return false;
    }
    
     messageerror.innerHTML='<i class="fas fa-check-circle"></i>'
     return true;

}
function submitclick(){
    if(!validatename() || !phonekey() || !emailkey() || !message()){
        submiterror.innerHTML="please enter above details"
        submiterror.style.display='block';
        setTimeout(function(){submiterror.style.display='none';},3000);
        return false;

    }
    return true;

}

