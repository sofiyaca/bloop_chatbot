

$(document).ready(function() {

	$("#chat-history").append("<div class=\"bot-message\">" 
		+ "Hello, welcome to Bloop."+ "</div>");


    $("#send-message").click(function(){

    	//Get text from user when they click "Send Message" button
        var userMessage = $("textarea").val();

        //Get the date and add to message
        var now = new Date();
        var dateString = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();

        //Print message to chat window with time
        $("#chat-history").append("<div class=\"user-message\">" + userMessage + "<div class=\"time\">" 
        	+ dateString + "</div>" + "</div>");

        $("textarea").val("");

    }); 
});
