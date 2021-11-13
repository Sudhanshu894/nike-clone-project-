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
  document.getElementById("CArt").style.display = "none";
  document.getElementById("cart-icon").style.display = "none";
  
}
function cross(){
  search.classList.remove('expand');
  Cross.style.display = "none";
  topbar.style.height = "4vh";
  topbar.style.transition = "0.3s ease-in-out";
  document.getElementById("CArt").style.display = "inline-block";
  document.getElementById("cart-icon").style.display = "block";
}


var shoeproduct = [
    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png",
      name: "Nike Air Force 1 '07",
      price: "₹7,495",
      brand: "Nike Sportswear",
      size: "6.5",
      type: "Lifestyle",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3504f3d-8803-412d-aa61-0e0fae61cec4/dunk-high-1985-sp-shoes-Kwc210.png",
      name: "Nike Dunk High 1985 SP",
      price: "₹11,495",
      brand: "Nike By You",
      size: "5.5",
      type: "Running",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e6a764-6468-4862-947f-75a04a1f0d8a/air-force-1-07-lx-shoes-zk5Tch.png",
      name: "Nike Air Force 1 '07 LX",
      price: "₹8,295",
      brand: "Nike Sportswear",
      size: "5",
      type: "Training and Gym",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/14c94550-ca1f-4de6-90cf-e7a1e2e49df0/air-jordan-1-mid-se-shoes-hHltxp.png",
      name: "Air Jordan 1 Mid SE",
      price: "₹10,295",
      brand: "Jordan",
      size: "6",
      type: "Jordan",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c73b07cd-b46d-4d18-a809-712f665f96b7/air-zoom-type-shoes-wDkpJf.png",
      name: "Nike Air Zoom-Type Premium",
      price: "₹10,797",
      brand: "NikeLab",
      size: "7",
      type: "Training & Gym",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5b14d02a-fb19-4cf6-9110-4302b7e7020f/air-zoom-pegasus-38-road-running-shoes-fdlkXG.png",
      name: "Nike Air Zoom Pegasus 38",
      price: "₹9,995",
      brand: "NikeLab",
      size: "7.5",
      type: "Athletics",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/zioxfvivn5xsannxlvuk/revolution-5-road-running-shoes-szF7CS.png",
      name: "Nike Revolution 5",
      price: "₹3,695",
      brand: "ACG",
      size: "8",
      type: "Skateboarding",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/54830e24-e2d7-4c03-9071-a8b5de471c19/react-infinity-run-flyknit-2-road-running-shoes-Qfh63N.png",
      name: "Nike React Infinity Run Flyknit 2",
      price: "₹14,495",
      brand: "ACG",
      size: "8.5",
      type: "Golf",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/kzl8jgsw9xetmkkkrmwc/kepa-kai-flip-flop-jwXChS.png",
      name: "Nike Kepa Kai",
      price: "₹1,995",
      brand: "NikeLab",
      size: "9",
      type: "Tennis",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d58acf15-2506-40f9-80ed-beff5114392c/retro-gts-shoe-rHcd47.png",
      name: "Nike Retro GTS",
      price: "₹4,995",
      brand: "Nike Sportswear",
      size: "9.5",
      type: "Walking",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/54f0cae1-c075-4fec-8017-d960a6264e4d/jordan-why-not-zer04-pf-basketball-shoe-P3c3Rp.png",
      name: "Jordan 'Why Not?' Zer0.4 PF",
      price: "₹9,197",
      brand: "Jordan",
      size: "10",
      type: "Jordan",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/420ae91b-50e6-4421-83c9-8ed95bad8bb6/edcvghj-iuhbgfr-qwdcv.png",
      name: "Nike Blazer '77 Cozi By You",
      price: "₹11,495",
      brand: "Nike Sportswear",
      size: "10.5",
      type: "Lifestyle",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/37cd492e-d0c3-4592-bc59-418e9d15cbfd/air-jordan-xxxvi-first-light-pf-basketball-shoes-fjPfDg.png",
      name: "Air Jordan XXXVI 'First Light' PF",
      price: "₹16,595",
      brand: "Jordan",
      size: "11",
      type: "Jordan",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/3a95d122-8329-4b5d-8397-955220407865/custom-nike-air-zoom-pegasus-38-shield-by-you.png",
      name: "Nike Air Zoom Pegasus 38 Shield By You",
      price: "₹14,595",
      brand: "Nike By You",
      size: "11.5",
      type: "Football",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ab1fd708-f5a1-426a-b7b4-7f0ed590177f/kyrie-low-4-ep-basketball-shoe-gD2KLL.png",
      name: "Kyrie Low 4 EP",
      price: "₹9,295",
      brand: "NikeLab",
      size: "12",
      type: "Golf",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/00b457c8-e740-4150-b18c-8c163cc0d350/air-zoom-terra-kiger-7-trail-running-shoes-nm2pqh.png",
      name: "Nike Air Zoom Terra Kiger 7",
      price: "₹12,495",
      brand: "ACG",
      size: "13",
      type: "Running",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/a04da4ac-13b8-47dd-adda-d2fecdf82baf/air-presto-id-shoe.png",
      name: "Nike Air Presto By You",
      price: "₹13,495",
      brand: "Nike By You",
      size: "12.5",
      type: "Lifestyle",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d47ad86c-0468-4102-85bd-98cc4a5ba655/wildhorse-7-trail-running-shoes-XdK82N.png",
      name: "Nike Wildhorse 7",
      price: "₹10,295",
      brand: "Nike Sportswear",
      size: "14",
      type: "Football",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/1bfda984-f890-4b22-aa66-c93f14e93aec/custom-nike-zoom-freak-3-by-you.png",
      name: "Nike Zoom Freak 3 By You",
      price: "₹12,495",
      brand: "Nike Sportswear",
      size: "15",
      type: "Basketball",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/164d2097-fd8d-4cd0-8d34-61d19ac0deda/renew-retaliation-tr-2-training-shoe-ShTzgB.png",
      name: "Nike Renew Retaliation TR 2",
      price: "₹5,995",
      brand: "Nike By You",
      size: "4",
      type: "Football",
    },

    {
      category: "Shoes",
      image_url:
        "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/53cf1f1b-f8ce-4c12-92b6-818f63a2dd64/air-zoom-infinity-tour-nrg-golf-shoe-xTql6K.png",
      name: "Nike Air Zoom Infinity Tour NRG",
      price: "₹16,595",
      brand: "Nike Sportswear",
      size: "4.5",
      type: "Golf",
    },
]
var mainshoediv = document.querySelector("#shoes-slider");
localStorage.setItem("footwear", JSON.stringify(shoeproduct));
  var shoelist = JSON.parse(localStorage.getItem("footwear")) || [];
displayitems(shoelist);
function displayitems(shoelist){
    shoelist.map(function (items){
        var shoediv = document.createElement("div");
        shoediv.setAttribute("class","shoe-div");
        var shoeimg = document.createElement("img");
        shoeimg.setAttribute("src",items.image_url);
    
        shoediv.append(shoeimg);
    
        var shoecontent = document.createElement("div");
        shoecontent.setAttribute("class","shoe-content");
        var shoename = document.createElement("div");
        shoename.setAttribute("class","shoe-name");
    
        var name = document.createElement("h3");
        name.textContent = items.name;
        var type = document.createElement("h3");
        type.textContent = items.type;
        shoename.append(name,type);
        shoecontent.append(shoename);
    
        var shoeprice = document.createElement("div");
        shoeprice.setAttribute("class","shoe-price");
        var priceh3 = document.createElement("h3");
        priceh3.textContent = items.price;
        shoeprice.append(priceh3);
        shoecontent.append(shoeprice);
        shoediv.append(shoecontent);
        mainshoediv.append(shoediv);
    })
}
var slider = document.getElementById("shoes-slider");
var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var left = 0;
leftarrow.addEventListener("click",function(){
  left += 500
  slider.style.right = `${left}px`;
})
rightarrow.addEventListener("click",function(){
  left -= 500
  slider.style.right = `${left}px`;
  if (left < 500){
    left = 500;
  }
})
var addtocart=JSON.parse(localStorage.getItem('ADDToCard'))
addtocart.map(function(item,i){
  document.getElementById('CArt').textContent=i+1;
})