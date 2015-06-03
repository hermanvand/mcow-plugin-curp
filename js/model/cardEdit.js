MCOW.Model.Curp.cardEdit = {

	run: function() {

		// which course?	
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);

		var cardId = MCOW.Session.Request.param["card"];
		var type = MCOW.Session.Request.param["type"];

		var form = document.forms["cardEditForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {

			// which card?
			if (type == "scenario") {
				var card = course.wildcards[cardId];
			}
			else {
				var card = course["weeks"][course["currentWeek"]-1].cards[cardId];
			}
			var form_description = form.elements["description"].value;
			card["description"] = form_description;

			//card.save();
			if (type == "scenario") {
				CURP.Lib.setWildcard(courseId, cardId, card);
			}
			else {
				CURP.Lib.setCard(courseId, cardId, card);
			}

			// break
			//MCOW.Event.fire("/Curp/home");
			MCOW.Model.Curp.cardEdit.callback();
		} 
		else {
			// display form
			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["cardId"] = cardId;
			MCOW.Session.Response.param["type"] = type;

			MCOW.Model.Curp.cardEdit.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
