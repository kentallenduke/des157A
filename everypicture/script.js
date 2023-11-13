(function(){
    'use strict';
    console.log("reading js file");

      /* Javascript to open the pop ups */


    const photo1=document.querySelector(".photo1");
    const photo2=document.querySelector(".photo2");
    const photo3=document.querySelector(".photo3");
    const photo4=document.querySelector(".photo4");
    const photo5=document.querySelector(".photo5");
    const photo6=document.querySelector(".photo6");
    const closeButton1=document.getElementById("btnClose1");
    const closeButton2=document.getElementById("btnClose2");
    const closeButton3=document.getElementById("btnClose3");
    const closeButton4=document.getElementById("btnClose4");
    const closeButton5=document.getElementById("btnClose5");
    const closeButton6=document.getElementById("btnClose6");
    
    photo1.addEventListener("click", () =>
        {
            photo1popup.showModal();          
        });

     photo2.addEventListener("click", () =>
        {
            photo2popup.showModal();          
        });

     photo3.addEventListener("click", () =>
        {
            photo3popup.showModal();          
        });

     photo4.addEventListener("click", () =>
        {
            photo4popup.showModal();          
        });

     photo5.addEventListener("click", () =>
        {
            photo5popup.showModal();          
        });

     photo6.addEventListener("click", () =>
        {
            photo6popup.showModal();          
        });

    
    
    closeButton1.addEventListener("click", () => 
        {

            photo1popup.close();
        });

     closeButton2.addEventListener("click", () => 
        {

            photo2popup.close();
        });

    closeButton3.addEventListener("click", () => 
        {

            photo3popup.close();
        });
    closeButton4.addEventListener("click", () => 
        {

            photo4popup.close();
        });

    closeButton5.addEventListener("click", () => 
        {

            photo5popup.close();
        });

    closeButton6.addEventListener("click", () => 
        {

            photo6popup.close();
        });
  
    
  

})();
