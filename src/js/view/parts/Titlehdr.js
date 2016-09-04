class TitleHeader extends Header {
    constructor(ttl) {
        try {
            super(null, null, null);
            this.title = null;
            this.setTitle(ttl);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setTitle(ttl) {
        try {
            this.title = new Text(ttl);
            this.title.setOption({
                'font-size'   : '35px'  ,
                'color'       : 'white' ,
                'font-weight' : 'bold'  ,
                'margin-left' : '20px'  ,
                'margin-top'  : '10px'  ,
            });
            //title.setLink('./');
            this.setLeft(this.title);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            this.setOption({
                'background' : '#257182'
            });
            super.init(tgt);
            this.title.setLink('./');
//            this.title.setClickEvt(function() {
//                try {
//                    $('body').fadeOut('normal', function() {
//                        try {
//                            window.location.href = './';
//                        } catch (e) {
//                            console.error(e.stack);
//                        }
//                    });
//                } catch (e) {
//                    console.error(e.stack);
//                }
//            });
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
