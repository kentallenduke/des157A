(function(){
    'use strict';
    /* javascript that implements the mad lib game */
    
    var wordElements = document.querySelectorAll(".word.fillable");
    
    document.addEventListener('blur', function(event) {
    // Check if event.target is an element and has a classList
    if (event.target instanceof Element && event.target.classList.contains('word')) {
        const text = event.target.value;
        const myData = event.target.getAttribute("data-word");
        const matchingElements = document.querySelectorAll(`.word[data-word='${myData}']`);

        matchingElements.forEach(matchingElement => {
            matchingElement.value = text;
        });
    }
}, true);
    
    document.addEventListener('keyup', checkTexts);


    function checkTexts(event)
    {
        for(var tboxes of wordElements)
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
        
    document.getElementById('flipBtn').onclick = function(e) {
        if(e.target.parentElement.classList.contains("disabledBtn") || e.target.classList.contains("disabledBtn"))
            return false;
        
        document.getElementById('cardarea').classList.toggle('do-flip');
        const icon = this.querySelector('.rotate-icon');
        icon.classList.toggle('rotate');
    };

  
    
})();