(function(){
    'use strict';
    /* javascript that implements the mad lib game */
    
    var wordElements = document.querySelectorAll(".word.fillable");

    wordElements.forEach(function(element) 
    {
        element.addEventListener('blur', function() 
        {
            var text = this.value;
            var myData = this.getAttribute("data-word");
            var matchingElements = document.querySelectorAll(".word[data-word='" + myData + "']");
            
            matchingElements.forEach(function(matchingElement) {
                matchingElement.value = text;
            });
        });
        element.addEventListener('keyup', checkTexts);
    });

    function checkTexts(event)
    {
        for(let tboxes of wordElements)
        {
            if(tboxes.value.length == 0 || tboxes.value.length == NaN)
            {
                document.getElementById('flipBtn').classList.add("disabledBtn");
                return;
            }
        }
        document.getElementById('flipBtn').classList.remove("disabledBtn");
    }

    
    /* Javascript to open the guide */
    
    const guide=document.getElementById("guide");
    const closeButton=document.getElementById("btnClose");
    
    helpsectionBtn.addEventListener("click", () =>
        {
            guide.showModal();          
        });
    
    closeButton.addEventListener("click", () => 
        {

            guide.close();


        });

    /*Javascript to flip the card*/
        
    document.getElementById('flipBtn').style.visibility = 'visible';
    document.getElementById('flipBtn').onclick = function(e) {
        if(e.target.parentElement.classList.contains("disabledBtn") || e.target.classList.contains("disabledBtn"))
            return false;
        document.getElementById('cardarea').classList.toggle('do-flip');
        const icon = this.querySelector('.rotate-icon');
        icon.classList.toggle('rotate');
    };

  
    
})();

// $(".word").on('blur', function(){
//     var text = $(this).val();
//     var myData = $(this).data("word");
//     $(".word[data-word="+myData+"]").val( text );
// });

//$("#flip").click(function(){
    //$("#cardarea").toggleClass("flipped");
//});


