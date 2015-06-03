MCOW.Model.Curp.courseEditName = {

	run: function() {

		// which course?	
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		var title = course["title"];

		var form = document.forms["courseEditNameForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {
			var form_name = form.elements["name"].value;
			course["title"] = form_name;

			//course.save();
			CURP.Lib.setCourse(course);

			// break
			MCOW.Model.Curp.courseEditName.callback();
		} 
		else {
			// display form
			currentPeriod = CURP.Lib.getPeriod();		
			MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

			MCOW.Session.Response.param["course"] = course;
			MCOW.Session.Response.param["title"] = title;

			MCOW.Model.Curp.courseEditName.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
