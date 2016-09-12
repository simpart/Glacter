

$(function(){
    try {
        app.top    = {};
        app.search = null;
        app.item   = null;
        app.menu   = null;
        app.top.showConts = function() {
            try {
                /* show header */
                var ttl_hdr = new TitleHeader('G L A C T E R');
                ttl_hdr.addOption({
                    'background' : '#257182'
                });
                ttl_hdr.init('main');
                ttl_hdr.setVisible(true);
                
                /* show menu */
                var menu = new SlideMenu();
                menu.getHeader().addOption({
                    'background' : '#257182',
                    'height'     : $(window).height() - 70
                });
                menu.addConts('S e a r c h', app.top.getForm());
                menu.addConts('I t e m', app.top.getItem());
                menu.init('main');
                menu.setVisible(true);
                app.menu = menu;
                //app.top.showForm();
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.getForm = function () {
            try {
                var form = new SearchForm('srch');
                
                form.addForm(new Input('Keyword'));
                form.addForm(new Input('Tag'));
                var srch_btn = new Button('Search');
                srch_btn.setClickEvt(function(){
                    try {
                        /* switch to search result */
                        app.top.showSrchRet(form);
                    } catch (e) {
                        console.error(e.stack);
                    }
                });
                form.addForm(srch_btn);
                return form;
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.getItem = function() {
            try {
                var item    = new ContsGroup();
                var new_btn = new Button('New Item');
                new_btn.setClickEvt(function(){
                    tetraring.loader.js(
                        ['./src/js/view/parts/TextArea.js',
                         './src/js/view/items.js'],
                        function(item) {
                            app.item.newItem(item);
                        },item
                    );
                });
                item.addConts(new_btn);
                item.addConts(new ContsGroup());  // item creater
                item.addConts(new ContsGroup());  // item viewer
                return item;
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.showSrchRet = function(form) {
            try {
                if(false === form.chkValue()) {
                    form.visibleError(true);
                    return;
                }
                if (null === app.search) {
                    tetraring.loader.js(
                        ['./src/js/view/parts/ContsTitle.js',
                         './src/js/view/parts/Table.js'     ,
                         './src/js/view/search.js'],
                        function() {
                            try {
                                app.search.showList(form.getValue(0));
                            } catch (e) {
                                console.error(e.stack);
                            }
                        },null
                    );
                } else {
                    app.search.showList(form.getValue(0));
                }
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
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
                         './src/js/view/parts/Menu.js'           ,
                         './src/js/view/parts/Menuhdr.js'        ,
                         './src/js/lib/velocity/velocity.min.js' ,
                         './src/js/view/parts/ContsGroup.js' ],
                        function() {
                            try {
                                tetraring.loader.js(
                                    ['./src/js/view/parts/Titlehdr.js'  ,
                                     './src/js/view/parts/Menubar.js'   ,
                                     './src/js/view/parts/SlideMenu.js' ,
                                     './src/js/view/parts/SearchForm.js',
                                     './src/js/view/parts/TagInput.js'],
                                    function() {
                                        try {
                                            app.top.showConts();
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
