
class ContsTitle extends Text {
    constructor(txt) {
        try {
            super(txt);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).html('');
            $('#' + this.getId()).append('<div class=\'conts-ttlwrap\'></div>');
            
            $('#' + this.getId() + ' .conts-ttlwrap').css('border-left'  , 'solid 10px black');
            $('#' + this.getId() + ' .conts-ttlwrap').css('border-bottom', 'solid 1px black');
            
            $('#' + this.getId() + ' .conts-ttlwrap').append('<div class=\'conts-ttl\'>'+ this.conts +'</div>')
            $('#' + this.getId() + ' .conts-ttl').css('margin-left', '15px');
            $('#' + this.getId() + ' .conts-ttl').css('font-size'  , '30px');
            $('#' + this.getId() + ' .conts-ttl').css('font-weight', '100');
            
            $('#' + this.getId()).css('width'   , '60%');
            $('#' + this.getId()).css('position', 'relative');
            $('#' + this.getId()).css('left'    , '20%');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
