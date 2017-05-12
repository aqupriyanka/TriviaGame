var questions = [
{
	"quest" : "1. The sea witch in \"The Little Mermaid\" is half what? ",
	"img" : "assets/img/mermaid.jpg",
	"A" : "Octopus",
	"B" : "Eel",
	"C" : "Shark",
	"D" : "Dragon",
	"ans" : "Octopus"
},
{
	"quest" : "2. Which phrase does the Evil Queen in \"Snow White\" actually say? ?",
	"img" : "assets/img/snow-white.jpg",
	"A" : "Magic mirror, on the wall — who is the fairest one of all?",
	"B" : "Mirror, mirror, on the wall — who is the fairest of them all?",
	"C" : "Mirror, mirror, on the wall — who is the fairest one of all?",
	"D" : "Magic mirror, on the wall — who is the fairest of them all?",
	"ans" : "Magic mirror, on the wall — who is the fairest one of all?"

},
{
	"quest" :"3. In \"Pocahontas,\" what did Pocahontas see in her dream that made her believe that a change was coming?",
"img" : "assets/img/pocahontas.jpg",
"A" : "A spinning arrow",
"B" : "A strange cloud formation",
"C" : "A hawk circling her village",
"D" : "A burning blue fire",
"ans" : "A spinning arrow"
},{
	"quest" :"4. In \"Frozen,\" how many brothers does Hans have? ",
"img" : "assets/img/frozen.jpg",
"A" : "7",
"B" : "9",
"C" : "12",
"D" : "15",
"ans" : "12"
},{
	"quest" :"5. How many years does the Genie say he has been trapped in the lamp? ",
"img" : "assets/img/aladdin.jpg",
"A" : "100 Years",
"B" : "500 Years",
"C" : "1000 Years",
"D" : "10,000 Years",
"ans" : "10,000 Years"
},{
	"quest" :"6. Who was the first Disney princess? ",
"img" : "assets/img/princess.jpg",
"A" : "Cindrella",
"B" : "Snow White",
"C" : "Aurora",
"D" : "Pocahontas",
"ans" : "Snow White"
},{
	"quest" :"7. What does the enchanted cake in Brave turn \" Merida's\" mother into? ",
"img" : "assets/img/merida.jpg",
"A" : "A frog",
"B" : "A Cat",
"C" : "A Bear",
"D" : "A Dog",
"ans" : "A Bear"
},{
	"quest" :"8. In \"Alice in Wonderland,\" aside from a pocket watch, what else is the White Rabbit holding when Alice encounters him?",
"img" : "assets/img/alice.jpg",
"A" : "A cane",
"B" : "An umbrella",
"C" : "A top hat",
"D" : "All of the above",
"ans" : "An umbrella"
},
{
	"quest" : "9. What is the name of the man that carves \"Pinocchio\"? ",
	"img" : "assets/img/pinocchio.png",
	"A" : "Sully",
	"B" : "Monstro",
	"C" : "The Blue Fairy",
	"D" : "Geppetto",
	"ans" : "Geppetto"
},
{
"quest" :"10. What kind of animal does \"Princess Jasmine\" have for a pet? ",
"img" : "assets/img/jasmine.jpg",
"A" : "Lemur",
"B" : "Parrot",
"C" : "Monkey",
"D" : "Tiger",
"ans" : "Tiger"
}
];

var i=0;
var score = 0;
var number = 20;
var timeoutInterval =0;
function loadQuestion(){
	timeoutInterval=30000;
	run();
	$("#score").text(score);
	$("#question").text(questions[i].quest);
	$("#A").text(questions[i].A);
	$("#B").text(questions[i].B);
	$("#C").text(questions[i].C);
	$("#D").text(questions[i].D);

	if(questions[i].img != ""){
		var img = $("<img/>");
		img.attr("src",questions[i].img);
		img.addClass("image");
		$("#image").html(img);
	}
}
var correctAnswerShown=false;
function showCorrectAnswer(question){
	if($("#A").text() === question.ans){
		correctAnswerShown=true;
		//give the blinking style for this
		$("#A").css("background","hsla(150,100%,50%,0.9)");
		$("#A").css("color","white");
	}
	if($("#B").text() === question.ans){
		correctAnswerShown=true;
		//give the blinking style for this
		$("#B").css("background","hsla(150,100%,50%,0.9)");
		$("#B").css("color","white");
	}
	if($("#C").text() === question.ans){
		correctAnswerShown=true;
		//give the blinking style for this
		$("#C").css("background","hsla(150,100%,50%,0.9)");
		$("#C").css("color","white");
	}
	if($("#D").text() === question.ans){
		correctAnswerShown=true;
		//give the blinking style for this
		$("#D").css("background","hsla(150,100%,50%,0.9)");
		$("#D").css("color","white");
	}
	
}

 function run() {
      intervalId = setInterval(decrement, 1000);
      // $(".mask,.filler,.spinner").css("animation-play-state","running");
      	
      $("#spinner").addClass("spinnerA");
      $("#mask").addClass("maskA");
      $("#filler").addClass("fillerA");
      $("#mask").addClass("mask");
      	$("#filler").css("opacity","0");
      // setTimeout(function(){
      // 	$("#spinner").removeClass("spinnerA");
      // 	$("#filler").removeClass("fillerA");
      // 	$("#mask").removeClass("maskA");

      // },timeoutInterval);

     
    }

 function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").text(number);


      //  Once number hits zero...
      if (number === 0) {
        showCorrectAnswer(questions[i]);
        stop();
        $("#dialog").dialog('open');
        //  Alert the user that time is up.
        
      }
    }

    
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#spinner").removeClass("spinnerA");
      	$("#filler").removeClass("fillerA");
      	$("#mask").removeClass("maskA");
      	$("#mask").removeClass("mask");
      	$("#filler").css("opacity","1");
      if(next || number ===0){
    	  i++;
  	}
      number=20;

    }


$(document).ready(function(){
	$("#play").on("click",function(){
		$("#mainDiv").show();
		$("#introPage").hide();
		loadQuestion();
	});
	

	$("#A,#B,#C,#D").on("click",function(){
		if($(this).text() === questions[i].ans){
			// alert("right choice");
			$(this).css("background-color","hsla(150,100%,50%,0.9)");
			$(this).css("color","white");
			$("#myModal").modal('hide');
			if(!correctAnswerShown){
				score++;
				$("#score").text(score);
			}
		} else{
			// alert("wrong choice");
			$(this).css("background-color","hsla(360,100%,50%,0.8)");
			$(this).css("color","white");
			// $(this).attr("data-target","#myModal");
			// $(this).attr("data-toggle","modal");
			$("#myModal").modal('show');
			console.log($("#myModal"));
			showCorrectAnswer(questions[i]);
		}
		stop();
	});

	 $("#dialog").dialog( { 'autoOpen': false } );
	
    //  Execute the run function.

    $("#next").on("click", function(){
    	correctAnswerShown=false;
    	next=true;
    	// i++;
    	stop();
    	if(i === 10){
    		i=0;
    		// stop();
    		$("#mainDiv").hide();
    		$("#lastScore").text(score);
    		$("#endGame").show();
    		console.log($("#endGame"));
    		return;
    	}
        $("timesUp").modal('hide');
    	reset();
    	loadQuestion();
    	


    });
   
   $("#playAgain").on("click",function(){
   	location.reload();
   });
});
var next=false;
function reset(){
	$("#spinner").removeClass("spinnerA");
	$("#filler").removeClass("fillerA");
	$("#mask").removeClass("maskA");
	$("#mask").removeClass("mask");
    $("#filler").css("opacity","1");

	$("#A").css("background-color","#fff");
	$("#A").css("color","black");
	$("#B").css("background-color","#fff");
	$("#B").css("color","black");
	$("#C").css("background-color","#fff");
	$("#C").css("color","black");
	$("#D").css("background-color","#fff");
	$("#D").css("color","black");

	
	next=false;
}