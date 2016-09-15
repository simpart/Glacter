$(function() {
    try {
        app.tags = {
            loadTag : function(tbl) {
                try {
                    tetraring.rest.get (
                        './src/php/mngapi/tag/get.php',
                        null,
                        function(ret, tbl) {
                            if(null !== ret.message) {
                                for (var key in ret.message) {
                                    var edit = new Button('Edit');
                                    edit.addOption({'min-width' : '60px'});
                                    edit.setClickEvt(function(){
                                        app.tags.editTag(tbl,key);
                                    });
                                    var del  = new Button('Delete');
                                    del.setClickEvt(function(){
                                        app.tags.delTag(tbl,key);
                                    });
                                    del.addOption({'min-width' : '60px'});
                                    tbl.addRow([
                                        new Text(ret.message[key]),
                                        edit,
                                        del
                                    ]);
                                    //alert(ret.message[key]);
                                }
                            }
                        },
                        tbl
                    );
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
                        },
                        null
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            editTag : function(tbl, key) {
                try {
                    var ret = window.prompt ('type new tag name',tbl.conts.rows[key][0].conts);
                    if ((null === ret) || ('' === ret)) {
                        return;
                    }
                    alert(ret);
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            delTag : function (tbl, key) {
                try {
                    window.confirm ('are you sure ?');
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            }
        }
    } catch (e) {
        console.error(e.stack);
    }
});
