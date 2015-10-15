
var callogModule = require('com.falkolab.callog');
// one week
var d = new Date();
    d.setDate(d.getDate()-7);

var callog = callogModule.query(
    ['_id', callog.NUMBER, callog.TYPE], 
    callog.DATE + ">?", [d.getTime()],
    callog.NUMBER + " asc"
);
Ti.API.info('Call Log:', JSON.stringify(callog));

Ti.API.info('Last outgoing call:', callogModule.getLastOutgoingCall());