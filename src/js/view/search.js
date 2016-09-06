
$(function() {
    try {
        app.search = {
            table    : null,
            showList : function(keywd) {
                try {
                    if (null === app.search.table) {
                        var id = app.menu.conts[1][0].getId();
                        var ret_ttl = new ContsTitle('Search Result');
                        ret_ttl.init(id);
                        ret_ttl.setVisible(true);
                        
                        var ret_tbl = new Table(['ID', 'Title', 'Tag']);
                        ret_tbl.init(id);
                        ret_tbl.setVisible(true);
                        app.search.table = ret_tbl;
                        return;
                    }
                    
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            }
        }
        
        // ContsTitle

    } catch (e) {
        console.error(e.stack);
    }
});


