MCOW.Model.Curp.cardNew = {

	run: function() {

		var courseId = MCOW.Session.Request.param["course"];
		var color = MCOW.Session.Request.param["color"];
		var card = MCOW.Session.Request.param["card"];
		var type = MCOW.Session.Request.param["type"];
		
		if (typeof card != 'undefined') {

			if (type == "scenario") {
				CURP.Lib.addWildcard(courseId, color, card);
			}
			else {
				CURP.Lib.addCard(courseId, color, card);
			}
				
			MCOW.Model.Curp.cardNew.callback();
		} 
		else {
			
			// which course?
			var course = CURP.Lib.getCourse(courseId);
			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["random"] = 0;

			// display cards
			if (color == "orange") {
				MCOW.Session.Response.param["cards"] = CURP.Data.teachingCards;
			}
			if (color == "blue") {
				MCOW.Session.Response.param["cards"] = CURP.Data.learningCards;
			}
			if (color == "green") {
				MCOW.Session.Response.param["cards"] = CURP.Data.outcomeCards;
			}
			if (color == "grey") {
				MCOW.Session.Response.param["cards"] = CURP.Data.taskCards;
			}
			if (color == "pink") {
				MCOW.Session.Response.param["cards"] = CURP.Data.wildCards;
				// random from 0 to length -1
				MCOW.Session.Response.param["random"] = Math.floor(Math.random() * MCOW.Session.Response.param["cards"].length); 
			}

			MCOW.Session.Response.param["color"] = color;
			MCOW.Session.Response.param["type"] = type;

			MCOW.Model.Curp.cardNew.callback();

		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
