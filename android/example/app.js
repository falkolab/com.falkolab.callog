// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

var callog = require('com.falkolab.callog');
	// week log
	var d = new Date();
 		d.setDate(d.getDate()-7);
 		
	var log = callog.query(['_id', 'number', 'type'], callog.DATE + ">?", [d.getTime()], callog.NUMBER + " asc");
	Ti.API.info('>>> callLog:', JSON.stringify(log));
	Ti.API.info('>>> last outgoing call:', callog.getLastOutgoingCall());