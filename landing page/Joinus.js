
var Alldata=JSON.parse(localStorage.getItem('UserInfo'))||[];
document.getElementById('joinus').addEventListener('click',function(){
    var email=document.getElementById('email').value;
var pass=document.getElementById('pass').value;
var Fname=document.getElementById('Fname').value;
var Lname=document.getElementById('Lname').value;
var date=document.getElementById('date').value;
var country=document.getElementById('country').value;
var check1=document.querySelector('input[type="radio"]').value;
if(email.length<5)
{
alert("Enter Email")
}
else if(pass.length<8)
{

    alert("Please Enter Strong Password")
}
else if(Fname.length<3)
{
alert("Enter First Name")
}
else if(Lname.length<3)
{
alert("Enter Last Name")
}
else if(date.length==0)
{
alert("Enter Date")
}
else{
var data={
Email:email,
Pass:pass,
Fname:Fname,
Lname:Lname,
Date:date,
Country:country,
Check1:check1,
}
Alldata.push(data);
localStorage.setItem('UserInfo',JSON.stringify(Alldata))
alert("Account Successfuly Created Please SignIn")
window.location.href="Signin.html";
}
})