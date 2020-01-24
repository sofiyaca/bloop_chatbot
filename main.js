
function createTimeString() {
	let now = new Date();
	let timeString = now.getHours() + ":" + (now.getMinutes()<10?'0':'') + now.getMinutes();
	return timeString
};

function writeBotMessage(botMessage) {
	let timeString = createTimeString();
	$("#chat-history").append("<div class=\"message\" id=\"bot-message\">" 
		+ botMessage + "<div class=\"bot-time\">" 
		+ timeString + "</div>" +"</div>");
};

function writeUserMessage(userMessage) {
	let timeString = createTimeString();
	$("#chat-history").append("<div class=\"message\" id=\"user-message\">" + userMessage + "<div class=\"user-time\">" 
		+ timeString + "</div>" + "</div>");
};

$(document).ready(function() {

	const botInitialScript = ["Hello, I'm Bloop!", "I'm lonely, want to chat?"];
	const botScript = ["Tell me about yourself.", "That's interesting!", "What are your favourite hobbies?",
	"Really? I like browsing Reddit too!", "You're a really interesting human. But I'm getting tired. Bye now!", 
	"I said I'm tired!", "Quit it.", "Okay, fine I'll tell you a story. Do you like fairies?", "No? Okay, bye!"];

	for (let i = 0; i < botInitialScript.length; i++) {
		writeBotMessage(botInitialScript[i]);
	}

	let timeout = setTimeout(function(){writeBotMessage("Are you still there?")}, 30000);
	let botCounter = 0;

	$("#send-message").click(function(){
		clearTimeout(timeout);

		if (!$.trim($("textarea").val())) {
			alert("Please send a nonempty message!");
		}
		else {
		    let userMessage = $("textarea").val();
			writeUserMessage(userMessage);
			$("textarea").val("");
			if (botCounter < 9) {
				writeBotMessage(botScript[botCounter]);
				$("#chat-history").animate({scrollTop: $("#chat-history").prop("scrollHeight")}, 'slow');
				botCounter++;
			}
			else {
				writeBotMessage("Bloop has left the chat.");
				$("#chat-history").animate({scrollTop: $("#chat-history").prop("scrollHeight")}, 'slow');
			}	
		}
	}); 
});








