

$(function(){
    try {
        app.top = {};
        app.top.showConts = function() {
            try {
                var hdr = new Header('top');
                hdr.init('main');
            } catch (e) {
                throw new Error(e.stack);
            }
        }
        
        
        
        
        tetraring.loader.js(
            ['./src/js/view/parts/header.js'
            ],
            function() {
                try {
                    app.top.showConts();
                } catch (e) {
                    console.error(e.stack);
                }
            }, null
        );
    } catch (e) {
        console.error(e.stack);
    }
});
/* end of file */
