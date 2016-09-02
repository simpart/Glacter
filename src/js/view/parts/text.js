
class Text {
    constructor(nm) {
        try {
            if ((null == nm) || ('' == nm)) {
                throw new Error('invalid parameter');
            }
            this.conts = null;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setConts(cnt) {
        try {
            this.conts = cnt;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            if ((null == tgt) || ('' == tgt)) {
                throw new Error('invalid parameter');
            }
            $('#' + tgt).append('<div>');
            var tgt_div = $('#' + tgt).children(':last');
            tgt_div.html(this.conts);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
