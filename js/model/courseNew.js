MCOW.Model.Curp.courseNew = {

	run: function() {

		var form = document.forms["courseNewForm"];
		if (form && MCOW.Util.getParentElementById(form, "page") != null) {
			var form_name = form.elements["name"].value;

			// store values
			// - c is new course
			// - add c to curriculum
			// - create course object & store
			for (var c = ''; c.length < 16;) { c += Math.random().toString(36).substr(2, 1); }

			var period = CURP.Lib.getPeriod();
			var curriculum = CURP.Lib.getCurriculum(period);
			curriculum.push(c);
			CURP.Lib.setCurriculum(period, curriculum);
					
			var course = new CURP.Course("1.0", c, form_name, period);
			//course.save();
			CURP.Lib.setCourse(course);
			
			// break
			//MCOW.Event.fire("/Curp/home");
			MCOW.Model.Curp.courseNew.callback();
		} 
		else {
			// display form
			// - calculate periods
			currentPeriod = CURP.Lib.getPeriod();		
			MCOW.Session.Response.param["currentPeriod"] = currentPeriod;

			MCOW.Model.Curp.courseNew.callback();
		}	

	},
	
	callback: function() {
		MCOW.Event.Control.modelCallback();
	}
	
}
