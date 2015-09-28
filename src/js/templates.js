(function() {
window["JST"] = window["JST"] || {};

window["JST"]["tooltipCSSTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( tooltipClass )) == null ? '' : __t) +
' {\n    position: relative;\n}\n\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':before {\n    left: 50%;\n    top: 100%;\n    position: absolute;\n    z-index: 1;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    visibility: hidden;\n    -webkit-transform: translateX( -50% );\n    -moz-transform: translateX( -50% );\n    -ms-transform: translateX( -50% );\n    -o-transform: translateX( -50% );\n    transform: translateX( -50% );\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n    -ms-box-sizing: initial;\n    box-sizing: initial;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':after {\n    white-space: nowrap;\n    content: attr(data-title);\n    padding: 3px 8px;\n    margin-top: ' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n    color: ' +
((__t = ( tooltipTextColor )) == null ? '' : __t) +
';\n    border-radius: ' +
((__t = ( tooltipBorderRadius )) == null ? '' : __t) +
'px;\n    background-color: ' +
((__t = ( tooltipBgColor )) == null ? '' : __t) +
';\n    height: ' +
((__t = ( tooltipHeight )) == null ? '' : __t) +
'px;\n    line-height: ' +
((__t = ( tooltipHeight )) == null ? '' : __t) +
'px;\n    width: ' +
((__t = ( tooltipWidth )) == null ? '' : __t) +
'px;\n    font-size: ' +
((__t = ( tooltipFontSize )) == null ? '' : __t) +
'px;\n    font-family: ' +
((__t = ( fontFamily )) == null ? '' : __t) +
';\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':before {\n    content: \'\';\n    border: ' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px solid transparent;\n    border-bottom-color: ' +
((__t = ( tooltipBgColor )) == null ? '' : __t) +
';\n    margin-top: -' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':hover:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
':hover:before {\n    visibility: visible;\n    opacity: 1;\n    filter: alpha(opacity=100);\n    transition: opacity 1s linear;\n}\n\n\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--sticky:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--sticky:before {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--t:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--t:before {\n    left: 50%;\n    top: 0;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--t:before {\n    border-bottom-color: transparent;\n    border-top-color: ' +
((__t = ( tooltipBgColor )) == null ? '' : __t) +
';\n    margin-top: -' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--t:after {\n    -webkit-transform: translate(-50%, -100%);\n    -moz-transform: translate(-50%, -100%);\n    -ms-transform: translate(-50%, -100%);\n    -o-transform: translate(-50%, -100%);\n    transform: translate(-50%, -100%);\n    margin-top: -' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--l:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--l:before {\n    left: 0;\n    top: 50%;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--l:before {\n    border-bottom-color: transparent;\n    border-left-color: ' +
((__t = ( tooltipBgColor )) == null ? '' : __t) +
';\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--l:after {\n    margin-top: 0px;\n    margin-left: -' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n    -webkit-transform: translate(-100%, -50%);\n    -moz-transform: translate(-100%, -50%);\n    -ms-transform: translate(-100%, -50%);\n    -o-transform: translate(-100%, -50%);\n    transform: translate(-100%, -50%);\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--r:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--r:before {\n    left: 100%;\n    top: 50%;\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--r:before {\n    border-bottom-color: transparent;\n    border-right-color: ' +
((__t = ( tooltipBgColor )) == null ? '' : __t) +
';\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'--r:after {\n    margin-top: 0px;\n    margin-left: ' +
((__t = ( pointerWidth )) == null ? '' : __t) +
'px;\n    -webkit-transform: translate(0%, -50%);\n    -moz-transform: translate(0%, -50%);\n    -ms-transform: translate(0%, -50%);\n    -o-transform: translate(0%, -50%);\n    transform: translate(0%, -50%);\n}\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'[data-title=""]:after,\n' +
((__t = ( tooltipClass )) == null ? '' : __t) +
'[data-title=""]:before {\n    opacity: 0;\n    filter: alpha(opacity=0);\n}';

}
return __p
}})();