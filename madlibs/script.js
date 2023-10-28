(function(){

    /* javascript that implements the mad lib game */
    
    var wordElements = document.querySelectorAll(".word");

    wordElements.forEach(function(element) {
        element.addEventListener('blur', function() {
            var text = this.value;
            var myData = this.getAttribute("data-word");
            var matchingElements = document.querySelectorAll(".word[data-word='" + myData + "']");
            
            matchingElements.forEach(function(matchingElement) {
                matchingElement.value = text;
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


})();


// $(".word").on('blur', function(){
//     var text = $(this).val();
//     var myData = $(this).data("word");
//     $(".word[data-word="+myData+"]").val( text );
// });

$("#flip").click(function(){
    $("#cardarea").toggleClass("flipped");
});

