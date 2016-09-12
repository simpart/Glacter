
$(function() {
    try {
        app.item = {
            is_loaded : null,
            newItem   : function(item) {
                try {
                    var new_cnt = item.member[1];
                    if (0 === new_cnt.member.length) {
                        var new_form = new Form();
                        
                        new_form.addForm(new Input('Title'));
                        new_form.addForm(new TagInput('Tag'));
                        
                        var txt = new TextArea('');
                        txt.addOption({
                            'width'     : '500px',
                            'height'    : '250px',
                            'font-size' : '25px'
                        });
                        new_form.addForm(txt);
                        
                        var add_btn = new Button('Add');
                        add_btn.setClickEvt(function(){
                            app.item.addItem(new_form);
                        });
                        new_form.addForm(add_btn);
                        
                        new_cnt.addConts(new_form);
                        new_cnt.init();
                        new_cnt.setVisible(true);
                        return;
                    }
                    //new_cnt.reset();
                    //new_cnt.setVisible(true);
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            },
            addItem  : function(new_form) {
                try {
                    var val   = new_form.getValue();
                    var title = val[0];
                    var tag   = val[1];
                    var item  = val[2];
                    
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
/* end of file */
