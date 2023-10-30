(function(){
    'use strict';
    /* javascript that implements the mad lib game */
    
    var wordElements = document.querySelectorAll(".word");

    wordElements.forEach(function(element) {
        element.addEventListener('blur', function() {
            var text = this.value;
            var myData = this.getAttribute("data-word"); 
        });
         
    element.addEventListener('keyUp', function() {
        if(this.value.length == 0)
        document.getElementById('flipBtn').disabled = true;
});

            
});

        });
    

    /* Javascript to open the guide */
    
    const guide=document.getElementById("guide");
    const closeButton=document.getElementById("btnClose");
    
    guideBtn.addEventListener("click", () =>
        {
            guide.showModal();          
        });
    
    closeButton.addEventListener("click", () => 
        {

            guide.close();


        });

    /*Javascript to flip the card*/
        
    document.getElementById('flipBtn').style.visibility = 'visible';
    document.getElementById('flipBtn').onclick = function() {
        
        document.getElementById('cardarea').classList.toggle('do-flip');
    };

    /* Javascript to rotate the flip icon */

     document.getElementById('flipBtn').addEventListener('click', function() {
      const icon = this.querySelector('.rotate-icon');
      icon.classList.toggle('rotate');
    });


// $(".word").on('blur', function(){
//     var text = $(this).val();
//     var myData = $(this).data("word");
//     $(".word[data-word="+myData+"]").val( text );
// });

$("#flip").click(function(){
    $("#cardarea").toggleClass("flipped");
});


