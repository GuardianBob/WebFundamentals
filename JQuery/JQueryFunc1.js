$(document).ready(function(){  
    // .addClass  
    $('#class').click(function(){
        $('#classP').addClass("red");
    });
    // .slideToggle
    $('#slidetoggle').click(function(){
        $('#slidetoggle1').slideToggle("slow");
    });
    // .append
    $('#append').click(function(){
        $('#append1').append("<br>Here's more text!");
    });
    // .hide
    $('#hide').click(function(){
        $('#hide1').hide("slow");
    });
    // .click
    // .show
    $('#show').click(function(){
        $('#hide1').show("slow");
    });
    // .toggle
    $('#toggle').click(function(){
        $('#toggle1').toggle();
    });
    // .slideDown
    $('#slideDown').click(function(){
        $('#slideDown1').slideDown();
    });
    // .slideUp   
    $('#slideUp').click(function(){
        $('#slideDown1').slideUp();
    });     
    // .fadeIn
    $('#fadeIn').click(function(){
        $('#fade1').fadeIn();
    }); 
    // .fadeOut 
    $('#fadeOut').click(function(){
        $('#fade1').fadeOut();
    });        
    // .before
    $('#before').click(function(){
        $('#before1').before("<p>This is the BEFORE</p>");
    });
    // .after 
    $('#after').click(function(){
        $('#before1').after("<p>This is the AFTER</p>");
    });      
    // .html
    $('#html').click(function(){
        $('#html1').html("<p>You just replaced the paragraph!</p>");
    });
    // .attr
    var attr2 = "<p>id =" + $('#attr1').attr("id") + "</p>";
    $('#attr').click(function(){
        $('#attr1').after( attr2 )
    });            
    // .val
    $('#val').click(function(){
        var value = parseInt( $( '#val1' ).val());
        console.log(value);
        $('#val1').val( value + 1);
    });
    // .text
    $('#text').click(function(){
        $('#text1').text("You replaced the text!");
    });
}); 