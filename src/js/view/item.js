

$(function(){
    try {
        app.item   = {};
        app.item.showConts = function() {
            try {
                var get_prm = tetraring.url.getParam();
                
                /* show header */
                var ttl_hdr = new TitleHeader('G L A C T E R');
                ttl_hdr.addOption({
                    'background' : '#257182',
                    'base_path'  : '../'
                });
                ttl_hdr.init('main');
                ttl_hdr.setVisible(true);
                
                var edit = new Button('Edit');
                edit.addOption({
                    'base_path'  : '../'      ,
                    'position'   : 'relative' ,
                    'left'       : '32%'      ,
                    'margin-top' : '20px'
                });
                edit.init('main');
                edit.setVisible(true);
                
                var itm_form = new ItemForm();
                itm_form.addOption({
                    'base_path' : '../'
                });
                var ttl_inp  = new Input('Title');
                ttl_inp.addOption({
                    'base_path' : '../'
                });
                itm_form.addForm(ttl_inp);
                var tag_inp  = new TagInput('Tag');
                tag_inp.addOption({
                    'base_path' : '../'
                });
                itm_form.addForm(tag_inp);
                
                var txt = new TextArea('contents:','item contents');
                txt.addOption({
                    'width'     : '500px',
                    'height'    : '250px',
                    'font-size' : '25px'
                });
                itm_form.addForm(txt);
                var dsc = new TextArea('description:','item desc');
                dsc.addOption({
                    'width'     : '500px',
                    'height'    : '250px',
                    'font-size' : '25px'
                });
                itm_form.addForm(dsc);
                
                var add_btn = new Button('Update');
                add_btn.addOption({
                    'base_path' : '../'
                });
                add_btn.setClickEvt(function(){
                    app.item.addItem(new_form);
                });
                itm_form.addForm(add_btn);
                
                itm_form.init('main');
                itm_form.setVisible(true);
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.item.addItem = function(form) {
            try {
                if (false === form.chkValue()) {
                    form.visibleError(true);
                    return;
                }
                var val   = form.getValue();
                var title = val[0];
                var tag   = val[1];
                var item  = val[2];
                tetraring.rest.post(
                    './src/php/mngapi/item/add.php',
                    {
                        'title' : val[0] ,
                        'tag'   : val[1] ,
                        'item'  : val[2] ,
                        'desc'  : val[3]
                    },
                    function(ret) {
                        try {
                            if (false === ret.result) {
                                form.error.showMessage(ret.message);
                                return;
                            }
                            window.open('about:blank','_self').close();
                        } catch (e) {
                            console.error(e.stack);
                        }
                    },null
                );
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        tetraring.loader.jsSerial(
            ['../src/js/view/parts/Contents.js'   ,
             '../src/js/view/parts/Header.js'     ,
             '../src/js/view/parts/Text.js'       ,
             '../src/js/lib/FlowupLabels.js/src/jquery.FlowupLabels.js',
             '../src/js/view/parts/Input.js'      ,
             '../src/js/view/parts/Message.js'    ,
             '../src/js/view/parts/Button.js'     ,
             '../src/js/view/parts/Form.js'       ,
             '../src/js/view/parts/Table.js'      ,
             '../src/js/view/parts/ContsTitle.js' ,
             '../src/js/view/parts/ContsGroup.js' ,
             '../src/js/view/parts/TextArea.js'   ,
             '../src/js/view/parts/Titlehdr.js'   ,
             '../src/js/view/parts/SearchForm.js' ,
             '../src/js/view/parts/ItemForm.js'   ,
             '../src/js/view/parts/TagInput.js']
        );
        app.item.showConts();
    } catch (e) {
        console.error(e.stack);
    }
});
/* end of file */
