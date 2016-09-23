/**
 * @file  item.js
 * @brief initialize item
 */

try {
    if (typeof app === "undefined") {
        app = {};
    }
} catch (e) {
    console.error(e.stack);
}

$(function(){
    try {
        // load library
        $.getScript(
            '../src/js/lib/tetraring4js/tetraring.js',
            function() {
                app.jsloader = new tetraring.loader.JsLoader('../src/js/');
                app.jsloader.addPath('view/item.js');
                app.jsloader.load();
            }
        );
    } catch (e) {
        console.error(e.stack);
    }
});
/* end of file */
