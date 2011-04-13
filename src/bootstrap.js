/*
    qBoot : The bootstrap object for dynamically injecting QUnit into existing pages
    Copyright (C) 2011  Dmitry Erman

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
	version: 0.1
 */

var qboot = function(){

        //private set of options definitions. Override with the init public method
        var options = {
            tests : "none",
            host : "",
            basepath : ""
        }

        //internal instance of extend used to map parameters to the private options object
        function extend(a, b) {
            for ( var prop in b ) {
                if ( b[prop] === undefined ) {
                    delete a[prop];
                } else {
                    a[prop] = b[prop];
                }
            }

            return a;
        }

        //initialize page Bootstrap - actually add all the functionality to the page here.
        function initPage(){
            loadCSS(options.host + options.basepath + "qunit.css", "qunit_css");

            var markup = '<h1 id="qunit-header">QUnit Test Suite</h1><h2 id="qunit-banner"></h2>' +
                    '<div id="qunit-testrunner-toolbar"></div><h2 id="qunit-userAgent"></h2>' +
                    '<ol id="qunit-tests"></ol><div id="qunit-fixture">test markup, will be hidden</div>' +
                    '<script language="javascript">qRun();</script>';
            var wrapper = document.createElement("div");
            wrapper.innerHTML = markup;
            document.getElementsByTagName("body")[0].appendChild(wrapper);

            loadJS(options.host + options.basepath + "qunit.js", "qunit_js", function(){
                qRun();
                //load tests
                loadJS(options.host + options.tests, getRandom());

            });
        }

        //dynamically add CSS to the document head element
        function loadCSS(filename, id) {

            if (!id || (id && !document.getElementById(id))) {
                var lnk = document.createElement('link');
                lnk.setAttribute("rel", "stylesheet");
                lnk.setAttribute("type", "text/css");
                lnk.setAttribute("href", filename + "?" + getRandom());
                if(id) lnk.setAttribute("id", id);

                document.getElementsByTagName('head')[0].appendChild(lnk);

           }

        }

        //dynamically add Javascript to the document head element and support callback functionality
        function loadJS(filename, id, cb) {

            if (!id || (id && !document.getElementById(id))) {

                var script = document.createElement( 'script' );
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", filename +'?'+ getRandom());
                if(cb) script.onload = script.onreadystatechange = function(){
                    var rs = this.readyState;
                    if(rs && rs != 'complete' && rs!='loaded') return;
                    cb.apply(document);
                };
                if(id) script.id = id;
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        }

        //random number generator
        function getRandom(){
            return Math.floor(Math.random()*10000000);
        }

         /* public methods */
        return {

            //public init function.
            init: function(param){
                extend(options, param);
                if(options.tests.length > 0) initPage();
            }
        }

}();

//Check for existing options to use otherwise call default options
if(window.qbootOptions){
    qboot.init(window.qbootOptions);
}else {
    qboot.init();
}
