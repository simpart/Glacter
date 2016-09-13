/**
 * @file 
 */

try {
    if (typeof app === "undefined") {
        var app  = {};
        app.tringCallback = function(func) {
            try {
                if (false === tetraring.mng.isloaded) {
                    setTimeout(function(){
                        try {
                            app.tringCallback(func);
                        } catch (e) {
                            console.error(e.stack);
                        }
                    },200);
                } else {
                    if (null !== func) {
                        func();
                    }
                }
            } catch (e) {
                throw new Error(e.stack);
            }
        };
    }
} catch (e) {
    console.error(e.stack);
}

$(function(){
    try {
        // load library
        $.getScript(
            './src/js/lib/tetraring4js/tetraring.js',
            function() {
                try {
                    // show top page
                    app.tringCallback(function(){
                        try {
                            tetraring.loader.js(
                                [
                                    './src/js/view/top.js'
                                ],
                                null, null
                            );
                        } catch (e) {
                            console.error(e.stack);
                        }
                    });
                } catch (e) {
                    console.error(e.stack);
                }
            }
        );
    } catch (e) {
        console.error(e.stack);
    }
});


