  // top bar js

var menu = document.getElementById("menu-items")
document.getElementById("menu-bar-icon").addEventListener("click",function(){
  menu.style.right = "0px";
})
document.getElementById("close-menu").addEventListener("click",function(){
  menu.style.right = "-400px";
})

var search = document.querySelector("#search-bar");
var Cross = document.querySelector("#cross-btn")
var topbar = document.querySelector("#top-bar-container");
function expand(){
    search.classList.add('expand');
    Cross.style.display = "block";
    topbar.style.height = "0vh";
    topbar.style.transition = "0.3s ease-in-out";
    
}
function cross(){
    search.classList.remove('expand');
    Cross.style.display = "none";
    topbar.style.height = "4vh";
    topbar.style.transition = "0.3s ease-in-out";
}
var name2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var d = new Date();
    var date=d.getDate();
    var day=days[d.getDay()];
    var day2=days[d.getDay()+1];
    var month=d.getMonth();
var h3=document.createElement('h3')
h3.textContent="Arrives "+(day)+","+date+" "+name2[month]+"-"+day2+","+(date+1)+" "+name2[month];
var div=document.getElementById('checkout-items')
div.append(h3)
function check()
{
    var input=document.getElementById('Fname').value;
    
    if(input.length<3)
    {
        input.style.border="1px solid red"
    }
    else{
        input.style.border="1px solid green"
    }
}
function check1()
{
 
    var lname=document.getElementById('Lname').value;
    if(lname.length<3)
    {
        document.getElementById('Lname').style.border="1px solid red"
    }
    else{
        document.getElementById('Lname').style.border="1px solid green"
    }
}
function check2()
{
    var input=document.querySelector('input').value;
    if(input.length<10)
    {
        document.querySelector('input').style.border="red solid 1px"
    }
    else{
        document.querySelector('input').style.border="green solid 1px"
    }
}
document.getElementById('con').addEventListener('click',function(){
var fname=document.getElementById('Fname').value;
var lname=document.getElementById('Lname').value;
var a=document.getElementById('A1').value;
var postal=document.getElementById('post').value;
var state=document.getElementById('state').value;
var email=document.getElementById('email').value;
var number=document.getElementById('number').value;
var pan=document.getElementById('pan').value;
console.log(fname,lname,a,postal,state,email,number,pan)
if(fname.length<4)
{
    alert("Enter Your First Name")
}
else if(lname.length<4)
{
    alert("Enter you Last Name")
}
else if(a.length<6)
{
    alert("Enter your Address")
}
else if(postal.length<6)
{
    alert("Enter Postal")
}
else if(state.length<2)
{
    alert("Enter State")
}
else if(email.length<8)
{
alert("Enter Email")
}
else if(number.length<10)
{
    alert("Enter Correct Number")
}
else if(pan.length<10)
{
    alert("Enter Correct PAN Number")
}
else{
    var con=document.getElementById('con');
    con.style.backgroundColor="green";
    window.location.href="payment.html";
}
})
var productList=JSON.parse(localStorage.getItem('ADDToCard'))
var total=productList.reduce(function(a,b){
    return a+Number(b.price)
},0)
document.getElementById('s1').textContent="₹"+total;
if(total>14000)
{
    document.getElementById('s2').textContent="Free"
}
else{
    document.getElementById('s2').textContent="₹"+750;
    total+=750
}
document.getElementById('tax').textContent = `₹${total*(2/100)}`;
    total -= total*(2/100);

localStorage.setItem("total",total);
document.getElementById('s3').textContent="₹"+total
localStorage.setItem('Total',total)
productList.map(function(item){
    var buyitem = document.createElement("div");
    buyitem.setAttribute("class","buyitem");
    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("class","imgdiv");
    var content = document.createElement("div");
    content.setAttribute("class","content");

    var img=document.createElement('img');
    img.setAttribute('src',item.image_url)
    imgdiv.append(img);
    var brand=document.createElement('p')
    brand.textContent=item.brand;
    var type=document.createElement('p')
    type.textContent=item.type;
    var name=document.createElement('p');
    name.textContent=item.name;
    var size=document.createElement('p');
    size.textContent=item.size;
    var price=document.createElement('p');
    price.textContent="₹"+item.price;
    content.append(name,brand,type,size,price);
    var div =document.getElementById('checkout-items');
    buyitem.append(imgdiv,content);
    div.append(buyitem)
})