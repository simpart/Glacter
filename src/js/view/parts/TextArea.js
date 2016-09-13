
class TextArea extends Contents {
    constructor(txt,lbl) {
        try {
            super(txt);
            this.label    = lbl;
            this.not_null = true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).html('<textarea>' + this.conts + '</textarea>');
            for (var key in this.option) {
                if ('not_null' == this.option[key][0]) {
                    this.not_null = this.option[key][1];
                } else {
                    $('#' + this.getId() + ' textarea').css(this.option[key][0], this.option[key][1]);
                }
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getValue() {
        try {
            return $('#' + this.getId() + ' textarea').val();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    chkValue(msg) {
       try {
            if ((null == this.getValue()) ||
                (''   == this.getValue())) {
                msg.setMessage(this.label + ' is null');
                return false;
            }
            return true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
