

$(function(){
    try {
        app.top    = {};
        app.search = null;
        app.item   = null;
        app.top.showConts = function() {
            try {
                /* show header */
                var ttl_hdr = new TitleHeader('G L A C T E R');
                ttl_hdr.init('main');
                ttl_hdr.setVisible(true);
                app.top.showMenu(); 
                app.top.showForm();
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.showMenu = function() {
            try {
                // var menu = new SlideMenu();
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.showForm = function () {
            try {
                var form = new Form('srch');
                
                form.addForm(new Input('Keyword : '));
                form.addForm(new Input('Tag : '));
                var srch_btn = new Button('Search');
                srch_btn.setClickEvt(function(){
                    try {
                        /* switch to search result */
                        app.top.swhToSrch(form);
                    } catch (e) {
                        console.error(e.stack);
                    }
                });
                form.addForm(srch_btn);
                
                form.setOption({
                    'position' : 'relative',
                    'top'      : (($(window).height()-350) / 2) + 'px'
                });
                
                form.init('main');
                form.setVisible(true);
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        app.top.swhToSrch = function(form) {
            try {
                if(false === form.chkValue()) {
                    return;
                }
                form.setVisible(false, function() {
                    if (null === app.search) {
                        tetraring.loader.js(
                            ['./src/js/view/search.js'],
                            function(){
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
                });
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
        
        tetraring.loader.js(
            ['./src/js/view/parts/Contents.js'],
            function() {
                try {
                    tetraring.loader.js(
                        ['./src/js/view/parts/Header.js' ,
                         './src/js/view/parts/Text.js'   ,
                         './src/js/lib/FlowupLabels.js/src/jquery.FlowupLabels.js',
                         './src/js/view/parts/Input.js'  ,
                         './src/js/view/parts/Message.js',
                         './src/js/view/parts/Button.js' ,
                         './src/js/view/parts/Form.js'],
                        function() {
                            try {
                                tetraring.loader.js(
                                    ['./src/js/view/parts/Titlehdr.js',
                                     ],
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
