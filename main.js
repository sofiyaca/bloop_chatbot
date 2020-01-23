
$(document).ready(function() {

	const botInitialScript = ["Hello, I'm Bloop!", "I'm lonely, want to chat?"];
	const botScript = ["Tell me about yourself.", "That's interesting!", "Tell me about your favourite hobbies?",
	"Really? I like browsing Reddit too!", "You're a really interesting human. But I'm getting tired. Bye now!"];

	for (let i = 0; i < botInitialScript.length; i++) {
		writeBotMessage(botInitialScript[i]);
	}


	let timeout = setTimeout(function(){ $("#chat-history").append("<div class=\"bot-message\">" 
		+ "Are you still there?" + "</div>"); }, 30000);

	$("#send-message").click(function(){

		if (!$.trim($("textarea").val())) {
			alert("Please send a nonempty message!");
		}

		else {
			let userMessage = $("textarea").val();
			writeUserMessage(userMessage);
			$("textarea").val("");
			clearTimeout(timeout);
		}
		


	}); 
});

function createTimeString () {
	let now = new Date();
	let timeString = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();
	return timeString
};

function writeBotMessage (botMessage) {
	timeString = createTimeString();
	$("#chat-history").append("<div class=\"bot-message\">" 
		+ botMessage + "<div class=\"bot-time\">" 
		+ timeString + "</div>" +"</div>");
};

function writeUserMessage (userMessage) {
	timeString = createTimeString();
	$("#chat-history").append("<div class=\"user-message\">" + userMessage + "<div class=\"user-time\">" 
		+ timeString + "</div>" + "</div>");
};














