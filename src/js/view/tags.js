$(function() {
    try {
        app.tags = {
            table   : null,
            loadTag : function(tbl) {
                try {
                    tetraring.rest.get (
                        './src/php/mngapi/tag/get.php',
                        null,
                        function(ret, tbl) {
                            if(null !== ret.message) {
                                for (var key in ret.message) {
                                    app.tags.addTagRow(tbl, ret.message[key]);
                                }
                                app.tags.table = tbl;
                            }
                        },
                        tbl
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            addTagRow : function(tbl, tag) {
                try {
                    var edit = new Button('Edit');
                    edit.addOption({'min-width' : '60px'});
                    edit.setClickEvt(function() {
                        app.tags.editTag(tbl,tag);
                    });
                    var del  = new Button('Delete');
                    del.temp = tag;
                    del.setClickEvt(function(btn) {
                        app.tags.delTag(tbl,btn.temp);
                    });
                    del.addOption({'min-width' : '60px'});
                    tbl.addRow([
                        new Text(tag),
                        edit,
                        del
                    ]);
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            addTag : function (new_form) {
                try {
                    if(false === new_form.chkValue()) {
                        new_form.error.showMessage();
                        return;
                    }
                    var add_tag = new_form.conts[0].getValue();
                    tetraring.rest.post(
                        './src/php/mngapi/tag/add.php',
                        {tag : add_tag},
                        function(ret) {
                            if (false === ret.result) {
                                new_form.error.showMessage(ret.message);
                                return;
                            }
                            new_form.error.setVisible(false);
                            app.tags.addTagRow(
                                app.tags.table,
                                add_tag
                            );
                            //app.tags.table
                        },
                        null
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            editTag : function(tbl, tag) {
                try {
                    var new_tag = window.prompt (
                                      'type new tag name',
                                      tag
                                  );
                    if ((null === new_tag) ||
                        (''   === new_tag) ||
                        (tag  === new_tag)) {
                        return;
                    }
                    tetraring.rest.post(
                        './src/php/mngapi/tag/upd.php',
                        {
                            old_tag : tag,
                            new_tag : new_tag
                        },
                        function(ret) {
                            try {
                                if(false === ret.result) {
                                    throw new Error(ret.message);
                                    return;
                                }
                                // update display
                                for(var key in tbl.conts.rows) {
                                   if(tag === tbl.conts.rows[key][0].conts) {
                                       tbl.conts.rows[key][0].update(new_tag);
                                   }
                                }
                            } catch (e) {
                                throw new Error(e.stack + '\n');
                            }
                        },
                        null
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            delTag : function (tbl, key) {
                try {
                    var ret = window.confirm ('are you sure ?');
                    if (false === ret) {
                        return;
                    }
                    tetraring.rest.post(
                        './src/php/mngapi/tag/del.php',
                        {tag : tbl.conts.rows[key][0].conts},
                        function (ret) {
                            try {
                                if (false === ret.result) {
                                    throw new Error(ret.message);
                                }
                                tbl.delRow(key);
                            } catch (e) {
                                console.error(e.stack);
                            }
                        },
                        null
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
