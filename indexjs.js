var a = 0;
function mobileHamburger() {
    var x = document.getElementById("mblhmbrgr");
    if (x.style.display === "none") {
      x.style.display = "block";
      setInterval(anim,8);
    } else {
      x.style.display = "none";
    }
    a=0;
  }
  function anim(){
    if(a==200){
      return;
    }else{
      a = a +5;
    var x = document.getElementById("mblhmbrgr");
    x.style.width = a + 'px';
    }
  }

  function webCardView(){

    document.getElementById("headin").style.display="none";
    var cards = document.getElementById("card-view");
    cards.style.display="flex";
    cards.classList.add("extra");
    console.log(cards);
    var target = document.querySelectorAll(".webcrd");
    target.forEach(myFunction);
    var target = document.querySelectorAll(".webcrdrmv");
    target.forEach(removeEl);
    var target = document.querySelectorAll(".slds-card");
    target.forEach(marginSet);
    var target = document.querySelectorAll(".webcrdin");
    target.forEach(webCrdIn);
  }
  function webCrdIn(item, index){
    item.classList.add("slds-large-size_12-of-12");
    item.classList.remove("web-display-none");
    item.style.display ="flex";
    item.style.justifyContent = "center";

  }
  function removeEl(item, index){
    item.style.display = "none";
  }
  function marginSet(item, index){
    if(index!=0){
      item.style.margin = "2rem";
    item.style.flexDirection= "row";
    item.style.flexWrap = "wrap";
    item.classList.add("slds-col");
    item.classList.add("slds-large-size_2-of-12");
    item.style.height = "30%";
    item.style.width = "30%";
    
}
  }
  function myFunction(item, index){
    item.classList.add("slds-large-size_12-of-12");
    item.classList.add("slds-grid_align-center");
    item.classList.add("slds-wrap");
    item.classList.remove("web-display-none");
    item.style.display ="flex";
    console.log(index);
    if((index%5) == 1 || (index%5) == 2){
      item.style.marginLeft = "8rem";
    }
    if((index%5) == 3){
      item.style.paddingBottom = "1rem";
    }
    if((index%5) == 4){
      item.style.borderTop = "1px solid rgb(0, 0, 0, 0.10)";
      item.style.paddingBottom = "0rem";
      item.style.paddingTop = "1rem";
    }
  }

  function bothFun(){
    var element = document.getElementById("both");
  element.classList.toggle("slds-is-open");
  }

  function allFun(){
    var element = document.getElementById("all");
    element.classList.toggle("slds-is-open");
  }

  function docFun(){
    var element = document.getElementById("doc");
    element.classList.toggle("slds-is-open");
  }
  function sumFun(){
    var element = document.getElementById("sum");
    element.classList.toggle("slds-is-open");
  }
  function invFun(){
    var element = document.getElementById("inv");
    element.classList.toggle("slds-is-open");
  }
  function traFun(){
    var element = document.getElementById("tra");
    element.classList.toggle("slds-is-open");
  }
  function delFun(){
    var element = document.getElementById("del");
    element.classList.toggle("slds-is-open");
  }

