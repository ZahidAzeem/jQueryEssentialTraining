

//data_start.html
/*
jQuery("document").ready(function(){
        $("#show").click(function (evt) {
            // if there is any data, display it.
            alert(JSON.stringify($("#example").data(), null, "  "));
            });
        $("#store").click(function (evt) {
            // store some arbitrary data on DIV
            $("#example").data("key1", 1234);
            $("#example").data("key2", "Joe Marini");
        });
        $("#remove").click(function (evt) {  
            // clear the data from the DIV
            $("#example").removeData("key1");
        });
    
});
*/
//CSS_start.htm
/*
jQuery("document").ready(function(){
        $(function() {
            showValues();
            //DataShow();
            
         $("#example").mouseover(changeValues);
         $("#example").mouseleave(resetValues);
        });
        
        function resetValues(){
            jQuery("#example").height(150);
            jQuery("#example").width(600);
            DataShow();
        }

        function changeValues() 
            {
            $("#example").height(100);
            $("#example").width(200);
            
            showValues();
                
            }
        
        function showValues() 
            {
            $("#height").html($("#example").height());
            $("#width").html($("#example").width());
            $("#innerH").html($("#example").innerHeight());
            $("#innerW").html($("#example").innerWidth());
            $("#outerH").html($("#example").outerHeight());
            $("#outerW").html($("#example").outerWidth());
            $("#offset").html($("#example").offset().top + ", " + 
                            $("#example").offset().left);
            $("#position").html($("#example").position().top + ", " + 
                                $("#example").position().left);
            }
    
        function DataShow(){
            jQuery("#height").html(jQuery("#example").height());
            jQuery("#width").html(jQuery("#example").width());
            jQuery("#innerH").html(jQuery("#example").innerHeight());
            jQuery("#innerW").html(jQuery("#example").innerWidth());
            jQuery("#outerH").html(jQuery("#example").outerHeight());
            jQuery("#outerW").html(jQuery("#example").outerWidth());
            jQuery("#offset").html(jQuery("#example").offset().top + ", " +
                jQuery("#example").offset().left);
            jQuery("#position").html(jQuery("#example").position().top + ", " + 
                                    jQuery("#example").position().left);
    }
});
*/
// Props_start.htm
/*
jQuery("document").ready(function(){

            $("#setProp").click(function(evt) {
            $("#example p").css("text-decoration", "overline")
                        .css("font-size", "+=1pt");
            });
   

            //jQuery("#setProp").click(function(evt){
            //    jQuery("#example p").css("text-decoration", "overline")
            //    .css("font-size","+=1pt");
            //});
    
            $("#setProps").click(function(evt) {
                $("#example p").css({
                    "font-weight" : "bold",
                    "color" : "red",
                    "text-decoration" : "underline"
                });
            });

            $("#addCl").click(function(evt) {
                $("#example p").addClass("pClass");
            });

            $("#rmCl").click(function(evt) {
                $("#example p").removeClass("pClass");
            });

            //$("#toggleCl").click(function(evt) {
            //    $("#example p").toggleClass("pClass");
            //});
    
            jQuery("#toggleCl").click(function(evt){
                jQuery("#example p").toggleClass("pClass");
            });

});
*/
//attribute_start.htm
/*
jQuery("document").ready(function(){
    
    //jQuery("a").attr("title","Photo by somone");
    //jQuery("a").attr("target","_blank");
    //jQuery("a").removeAttr("href");
    
    // Modify multiple attributes at once
    //$("img").attr({ src: "images/Spring.jpg", title: "Spring all the things!" });
    //jQuery("img").attr({ src: "images/Spring.jpg", title: "Spring all the tings" });    
});
*/
//altering_start.htm
/*
jQuery("document").ready(function(){
        //$("#example p:first").wrap("<div style='color:red'/>").css("border","2px dotted green");
        //jQuery("body #example>p:last").css("border","2px solid blue");
          //$("#example p").wrapAll("<div style='border:3px solid red'/>");
        //$("#example").empty();
        //jQuery("<div>Replaced</div>").replaceAll("#example p");
        
        jQuery("#example p").replaceWith(replacementWith);
    
        function replacementWith(evt){
            if($(this).text().indexOf("1") != -1){
                return "<p>This is paragraph uno";
        }
    }  
});

*/
// Inserting_document.htm
/*
jQuery("document").ready(function(){
    
            // Insertion functions for inserting inside of content
            //$("#example p").append("  with some content appended");
            //$("#example p").prepend("Helloz! ");
            // $("#example p:last").appendTo("#example p:first");
            //$("#example p:last").prependTo("#example p:first");
            
            // Insertion functions for inserting outside of content
            //$("#example p").after("**");
            //$("#example p").before("**");
            //$("<p>New Para</p>").insertAfter("#example p:first");
            //$("<p>New Para</p>").insertBefore("#example p:last");
            
            jQuery("<p>this is new paragraph</p>").insertBefore("#example p:last");
            //jQuery("<p>this is new paragraph</p>").replaceAll("#example p:first");

});
*/
// creating_start.htm
/*
jQuery("document").ready(function(){
    
    //alert(jQuery("#example2").html());
    
            document.getElementById("create").addEventListener("click", function (evt) {
                createContent();
            });
            document.getElementById("change").addEventListener("click", function (evt) {
                changeContent();
            });
            document.getElementById("changeAll").addEventListener("click", function (evt) {
                changeAllTheContent();
            }); 
    
            function createContent() {
            // use the html() function to change the content of the div
            //$("#example2").html("<p>Hi there!</p>");
            
            // create a new <p> and set the content of para1 to it
            var newItem = $("<p>This is a new paragraph p1</p>");
            $("#para1").html(newItem);
            }
    
            function changeContent() {
            // set the text content of the last paragraph
            $("p:last").text("I've changed the last paragraph");
            }
    
            function changeAllTheContent() {
            $("#example p").text("I've changed all the paragraphs!");
            }
            
});

*/