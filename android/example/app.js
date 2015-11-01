
var callogModule = require('com.falkolab.callog');
// one week
var d = new Date();
    d.setDate(d.getDate()-7);

var callog = callogModule.query(
    [callogModule._ID, callogModule.NUMBER, callogModule.TYPE], 
    callogModule.DATE + ">?", [d.getTime()],
    callogModule.NUMBER + " asc"
);
Ti.API.info('Call Log:', JSON.stringify(callog));

Ti.API.info('Last outgoing call:', callogModule.getLastOutgoingCall());

// example #2
var utcTime = new Date();
var timeZone = utcTime.getTimezoneOffset();

var callog = callogModule.query([
	callogModule.NUMBER,
	callogModule.CACHED_NAME,
	callogModule.TYPE,
	callogModule.DATE
	], null, null, callogModule.DATE + " desc");

_.each(callog.splice(0,5), function(l) {
	l.dateFormated = moment(parseInt(l.date)).zone(timeZone);
	var contacts = callogModule.getContactsIDByNumber(l.number);
	if(contacts.length) {
		l.contact = Ti.Contacts.getPersonByID(contacts[0]);
	};
	Ti.API.info('>>>', JSON.stringify(l, null, 4));	
});