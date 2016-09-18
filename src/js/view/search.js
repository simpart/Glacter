
$(function() {
    try {
        app.search = {
            table      : null,
            showResult : function(form) {
                try {
                    if(false === form.chkValue()) {
                        return;
                    }
                    var val = form.getValue();
                    tetraring.rest.post(
                        './src/php/mngapi/item/search.php',
                        {
                            'keyword' : val[0],
                            'tag'     : val[1]
                        },
                        function(ret) {
                            try {
                                if (false === ret.result) {
                                    form.error.showMessage(ret.message);
                                    return;
                                }
                                if (null === ret.message) {
                                    return;
                                }
                                app.search.showTable(ret.message);
                                //for(var key in ret.message) {
                                //    alert(tetraring.debug.dumpObj(ret.message[key]));
                                //}
                            } catch (e) {
                                console.error(e.stack);
                            }
                        },null 
                    );
                    
                    //if (null === app.search.table) {
                    //    var id = app.menu.conts[1][0].getId();
                    //    var ret_ttl = new ContsTitle('Search Result');
                    //    ret_ttl.init(id);
                    //    ret_ttl.setVisible(true);
                    //    
                    //    var ret_tbl = new Table(['ID', 'Title', 'Tag', 'Description']);
                    //    ret_tbl.init(id);
                    //    ret_tbl.setVisible(true);
                    //    app.search.table = ret_tbl;
                    //    return;
                    //}
                    
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            showTable : function(ret) {
                try {
                    if (null === app.search.table) {
                        var tbl = new Table(['ID', 'Title', 'Description']);
                        
                        //tbl.init();
                        
                    } else {
                        
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


