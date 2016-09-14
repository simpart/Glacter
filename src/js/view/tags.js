$(function() {
    try {
        app.tags = {
            setTag : function(tbl) {
                try {
                    tetraring.rest.get (
                        './src/php/mngapi/tag/get.php',
                        null,
                        function(ret, prm) {
                            if(null !== ret.message) {
                                
                            }
                        },
                        tbl
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            }
        }
    } catch (e) {
        console.error(e.stack);
    }
});
