MCOW.Model.Curp.home = {

	run: function() {
		// the curriculum is selected on the homepage
		var periods = CURP.Lib.getPeriods();
		
		// make sure the period is set!
		var currentPeriod = CURP.Lib.initPeriod(periods[0]);
		
		MCOW.Session.Response.param["currentPeriod"] = currentPeriod;
		MCOW.Session.Response.param["periods"] = periods;

		// courses from the selected curriculum are shown
		var courses = CURP.Lib.getCourses();
		MCOW.Session.Response.param["courses"] = courses;

		MCOW.Model.Curp.home.callback();
	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
