
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
                                    form.error.showMessage('not hit item');
                                    return;
                                }
                                form.error.setVisible(false);
                                app.search.showTable(ret.message);
                                //for(var key in ret.message) {
                                //    alert(tetraring.debug.dumpObj(ret.message[key]));
                                //}
                            } catch (e) {
                                console.error(e.stack);
                            }
                        },null 
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            showTable : function(ret_msg) {
                try {
                    if (null === app.search.table) {
                        var tbl = new Table(['ID', 'Title', 'Contents', 'Description']);
                        tbl.addOption({
                            'position'     : 'relative',
                            'left'         : '30%'     ,
                            'margin-top'   : '10px'    ,
                            'margin-bottom': '10px'
                        });
                        tbl.init(app.menu.conts[1][0].getId());
                        for(var key in ret_msg) {
                            tbl.addRow([
                                new Text(ret_msg[key]['id']),
                                new Text(ret_msg[key]['title']),
                                new Text(ret_msg[key]['conts']),
                                new Text(ret_msg[key]['remark'])
                            ]);
                        }
                        tbl.setRowClickEvt(function(tbl,row_idx) {
                            window.open('./item?id='+tbl.conts.rows[row_idx-1][0].conts);
                        });
                        tbl.setVisible(true);
                        
                    } else {
                        //tbl.
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


