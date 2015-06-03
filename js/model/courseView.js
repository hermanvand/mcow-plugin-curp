MCOW.Model.Curp.courseView = {

	run: function() {

		// which course?
		var courseId = MCOW.Session.Request.param["course"];		
		var course = CURP.Lib.getCourse(courseId);
		MCOW.Session.Response.param["course"] = course;

		// display period
		var currentPeriod = CURP.Lib.getPeriod();		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

		MCOW.Model.Curp.courseView.callback();

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
