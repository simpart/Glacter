

$(function(){
    try {
        app.item   = {};
        app.item.showConts = function() {
            try {
                /* show header */
                var ttl_hdr = new TitleHeader('G L A C T E R');
                ttl_hdr.addOption({
                    'background' : '#257182'
                });
                ttl_hdr.init('main');
                ttl_hdr.setVisible(true);
                
                var new_form = new ItemForm();
                new_form.addForm(new Input('Title'));
                new_form.addForm(new TagInput('Tag'));
                
                var txt = new TextArea('contents:','item contents');
                txt.addOption({
                    'width'     : '500px',
                    'height'    : '250px',
                    'font-size' : '25px'
                });
                new_form.addForm(txt);
                var dsc = new TextArea('description:','item desc');
                dsc.addOption({
                    'width'     : '500px',
                    'height'    : '250px',
                    'font-size' : '25px'
                });
                new_form.addForm(dsc);
                
                var add_btn = new Button('Add');
                add_btn.setClickEvt(function(){
                    app.item.addItem(new_form);
                });
                new_form.addForm(add_btn);
                
                new_form.init('main');
                new_form.setVisible(true);
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.item.addItem = function(new_form) {
            try {
                if (false === new_form.chkValue()) {
                    new_form.visibleError(true);
                    return;
                }
                var val   = new_form.getValue();
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
                                new_form.error.showMessage(ret.message);
                                return;
                            }
                            alert("add item");
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
//        app.top.getItem = function() {
//            try {
//                var ret_val = new ContsGroup();
//                var new_btn = new Button('New Item');
//                new_btn.setClickEvt(function(){
//                    tetraring.loader.js(
//                        ['./src/js/view/items.js'],
//                        function(item) {
////                            app.item.newItem(item);
//                        },item
//                    );
//                });
//                ret_val.addConts(new_btn);
////                item.addConts(new ContsGroup());  // item creater
//                item.addConts(new ContsGroup());  // item viewer
//                return item;
//            } catch (e) {
//                throw new Error(e.stack + '\n');
//            }
//        }
        
        tetraring.loader.js(
            ['./src/js/view/parts/Contents.js'],
            function() {
                try {
                    tetraring.loader.js(
                        ['./src/js/view/parts/Header.js'         ,
                         './src/js/view/parts/Text.js'           ,
                         './src/js/lib/FlowupLabels.js/src/jquery.FlowupLabels.js',
                         './src/js/view/parts/Input.js'          ,
                         './src/js/view/parts/Message.js'        ,
                         './src/js/view/parts/Button.js'         ,
                         './src/js/view/parts/Form.js'           ,
                         './src/js/view/parts/Table.js'          ,
                         './src/js/view/parts/ContsTitle.js'     ,
                         './src/js/view/parts/ContsGroup.js'     ,
                         './src/js/view/parts/TextArea.js' ],
                        function() {
                            try {
                                tetraring.loader.js(
                                    ['./src/js/view/parts/Titlehdr.js'  ,
                                     './src/js/view/parts/SearchForm.js',
                                     './src/js/view/parts/ItemForm.js'  ,
                                     './src/js/view/parts/TagInput.js'],
                                    function() {
                                        try {
                                            app.item.showConts();
                                            //setTimeout(function(){app.top.showConts();},500);
                                        } catch (e) {
                                            console.error(e.stack);
                                        }
                                    },null
                                );
                            } catch (e) {
                                throw new Error(e.stack + '\n');
                            }
                        },null
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            }, null
         );   
    } catch (e) {
        console.error(e.stack);
    }
});
/* end of file */
