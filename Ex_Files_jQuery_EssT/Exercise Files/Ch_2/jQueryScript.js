// traversing_start.html
jQuery("document").ready(function(){
        //$("#example").children().css("border", "3px solid red");
    //jQuery("#example").children().css("border", "2px dotted green");

    //var elem = jQuery("#para1");
    //elem.prev().css("border","2px solid red");
    //elem.next().css("border","2px solid green");
    // **this draw border to all elements i.e body**
    //elem.parents().css("border","2px solid blue"); 
    //elem.parentsUntil(jQuery("body")).css("border","2px solid red");
    
    //jQuery("#example").find("#para4").css("border","2px solid green");
    
    var leftmargin = 0;
    var border = 2;
    jQuery("#example p").each(function(index, element){
    jQuery(element).css("border", border + "px solid red")
                   .css("margin-left",leftmargin)
                    .css("color","blue")
                    .css("font-family","monospace");
        border +=2;
        leftmargin +=10;
    });
});

//ChildVisCont_start.html
/*
jQuery("document").ready(function(){
    
        //$("p:contains('3')").css("border", "3px solid red");
        //$("p:parent").css("border", "3px solid red");
       // $("div:has(p[class=a])").css("border", "3px solid red");

        //jQuery("p:contains('4')").css("border","2px solid green");
        //jQuery("p:parent").css("border","2px solid yellow");
        //jQuery("#example p:parent").css("border","2px solid green");
        //jQuery("div:has(p[class=a])").css("border","2px solid green");
        //jQuery("body:has(p[class=a])").css("border","1px dashed blue");
    
        //$("div p:first-child").css("border", "3px solid red");
        //$("div p:last-of-type").css("border", "3px solid red");
        //$("div p:nth-child(3)").css("border", "3px solid red");
        //$("div p:nth-child(2n)").css("border", "3px solid red");
    
        //jQuery("div p:last-child").css("border","2px solid green");
        //jQuery("div p:nth-child(2)").css("border","2px dotted green");
        //jQuery("div p:nth-child(2n)").css("border","2px dotted green");
});
*/

//AttrFilters_start.html
/*
jQuery("document").ready(function(){
            //$("p[class]").css("border", "3px solid red");
            //$("p[id=para1]").css("border", "3px solid red");
            //$("p[id^=para]").css("border", "3px solid red");
            //$("p[id^=para][lang*=en-]").css("border", "3px solid red");
            
            //jQuery("p[class]").css("border","2px solid green");
            //jQuery("p[id]").css("border","2px solid green");
            //jQuery("p[id=para4]").css("border","2px solid green");
            //jQuery("p[id^=para]").css("border","2px solid green");
            //jQuery("p[id^=para][lang*=en-]").css("border","2px solid green");

});
*/

//HierCombo_start.html
/*
$("document").ready(function() {
    
        // The child selector "parent > child" selects "child" elements
        // that are immediate descendants of the "parent"
        //$("div > p.a").css("border", "3px solid red");
        
        // The descendant selector "ancestor descendant" selects "descendant" 
        // elements as long as they have an "ancestor" element somewhere
        // above them
        //$("div> p.b").css("border", "3px solid red");
        //$("#example2>p#para4").css("border", "3px solid red");
        
        // The next adjacent selector "prev + next" selects the "next" 
        // element if it is immediately preceded by a "prev" element
       // $("ul + div").css("border", "3px solid red");
        //$("div + h1").css("border","3px solid green");
        
    // Next sibling selector "prev ~ siblings" selects all "siblings" 
        // elements that come after a "prev" element
        $("#example2 ~ h1").css("border", "3px solid red");
});
*/

// **BasicFilters_start.html**
/*
        $("document").ready(function() {
            $("#example p:first").css("border", "3px solid red");
            $("#example p:last").css("border", "3px solid red");
            $("#example p:even").css("border", "3px solid red");
            $("#example p:odd").css("border", "3px solid red");
            $("#example .a:first").css("border", "3px solid red");
            $("#example .b:even").css("border", "3px solid red");
            $("#example p:gt(1)").css("border","3px solid red");
            $("#example p:not(p:eq(2))").css("border", "3px solid red");
            
            
            jQuery("li:first").css("border", "3px solid green")
            jQuery("#example p:not(p:eq(2))").css("border", "3px dotted yellow")
        });
*/

// **Basicselectors_start**
/*
        $("document").ready(function() {
            
           //$("p").css("border", "3px solid red");
            //$(".a").css("border", "3px solid red");
            $("#example").css("border", "3px solid red");
            //$("p.b").css("border", "3px solid red"); 
            jQuery("p").css("border","2px dotted green");
        });

*/