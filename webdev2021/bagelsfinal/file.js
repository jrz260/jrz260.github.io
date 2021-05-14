function checkbread(){
	var question1=document.makeabagel.question1.value;
		if (question1=="Plain"){
			document.getElementById("plate").src = "plain.png";	
		}
		if (question1=="Everything"){
			document.getElementById("plate").src = "everything.png";	
		}
		if (question1=="CinnamonRasin"){
			document.getElementById("plate").src = "cinnamon.png";	
		}
}





function check1(){
	var question1=document.makeabagel.question1.value;
		if (question1=="Plain"){
			document.getElementById("plate").src = "plain.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "plainegg.png";
			}
			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "plainpb.png";
			}	
			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "plaincheese.png";
			}		
		}	
		
		
		if (question1=="Everything"){
			document.getElementById("plate").src = "everything.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "everythingegg.png";
			}
			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "everythingpb.png";
			}	
			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "everythingcheese.png";
			}		
		}	

		if (question1=="CinnamonRasin"){
			document.getElementById("plate").src = "cinnamon.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "cinnamonegg.png";
			}
			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "cinnamonpb.png";
			}	
			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "cinnamoncheese.png";
			}		
		}	

	}







function check2(){
	var question1=document.makeabagel.question1.value;
		if (question1=="Plain"){
			document.getElementById("plate").src = "plain.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "plainegg.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="plaineggbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="plaineggsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="plaineggjelly.png"
				}
			}

			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "plainpb.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="plainpbbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="plainpbsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="plainpbjelly.png"
				}

			}	

			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "plaincheese.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="plaincheesebc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="plaincheesesalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="plaincheesejelly.png"
				}
			}		
		}






		if (question1=="Everything"){
			document.getElementById("plate").src = "everything.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "everythingegg.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="everythingeggbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="everythingeggsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="everythingeggjelly.png"
				}
			}

			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "everythingpb.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="everythingpbbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="everythingpbsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="everythingpbjelly.png"
				}

			}	

			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "everythingcheese.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="everythingcheesebc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="everythingcheesesalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="everythingcheesejelly.png"
				}
			}		
		}






		if (question1=="CinnamonRasin"){
			document.getElementById("plate").src = "cinnamon.png";
			var question2=document.makeabagel.question2.value;
			if (question2=="Egg"){
				document.getElementById("plate").src = "cinnamonegg.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="cinnamoneggbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="cinnamoneggsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="cinnamoneggjelly.png"
				}
			}

			if (question2=="PeanutButter"){
				document.getElementById("plate").src = "cinnamonpb.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="cinnamonpbbc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="cinnamonpbsalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="cinnamonpbjelly.png"
				}

			}	

			if (question2=="CreamCheese"){
				document.getElementById("plate").src = "cinnamoncheese.png";
				var question3=document.makeabagel.question3.value;
				if (question3=="Bacon"){
					document.getElementById("plate").src="cinnamoncheesebc.png"
				}
				if (question3=="Salmon"){
					document.getElementById("plate").src="cinnamoncheesesalmon.png"
				}
				if (question3=="Jelly"){
					document.getElementById("plate").src="cinnamoncheesejelly.png"
				}
			}		
		}



	}
		