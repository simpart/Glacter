
class Contents {
    constructor(cnt) {
        try {
            if (null === cnt) {
                throw new Error('invalid parameter');
            }
            this.conts     = cnt;
            this.option    = new Array();
            this.inited    = false;
            this.id        = null;
            this.temp      = null;
            this.base_path = './';
            /* this.child  = chd; */
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addOption(opt) {
        try {
            for (var key in opt) {
                if ('base_path' == key) {
                    this.base_path = opt[key];
                } else { 
                    this.option.push([key, opt[key]]);
                }
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            if (true === this.inited) {
                return;
            }
            if ((null == tgt) || ('' == tgt)) {
                throw new Error('invalid parameter');
            }
            $('#' + tgt).append('<div id=\''+ this.getId() +'\'></div>');
            $('#' + this.getId()).css('display', 'none');
            
            this.inited = true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg, func, prm) {
        try {
            var pfunc = func || null;
            var pprm  = prm  || null;
            
            if (true === flg) {
                if (null === pfunc) {
                    $('#' + this.getId()).fadeIn();
                } else {
                    $('#' + this.getId()).fadeIn(
                        'normal',
                        pfunc   ,
                        pprm
                    );
                }
            } else if (false === flg) {
                if (null === pfunc) {
                    $('#' + this.getId()).fadeOut();
                } else {
                    $('#' + this.getId()).fadeOut(
                        'normal',
                        pfunc   ,
                        pprm
                    );
                }
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getId() {
        try {
            if (null === this.id) {
                var uuid = "", i, random;
                for (i = 0; i < 32; i++) {
                    random = Math.random() * 16 | 0;
                    if (i == 8 || i == 12 || i == 16 || i == 20) {
                        uuid += "-"
                    }
                    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
                }
                this.id = uuid;
            }
            return this.id;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
