
class Form extends Contents {
    constructor() {
        try {
            super(new Array());
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addForm(elm) {
        try {
            if (null === elm) {
                throw new Error('invalid parameter');
            }
            this.conts.push(elm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            
            for(var key in this.option) {
                $('#' + this.getId()).css(key, this.option[key]);
            }
            
            var padleft = ($(window).width() -500) / 2;
            /* set error message */
            this.error = new Message();
            this.error.setOption({
                'margin-left'  : (padleft) + 'px' ,
                'background'   : '#ffc8d5',
                'border-color' : 'red'    ,
                'border-width' : '1px'
            });
            this.error.init(this.getId());
            
            
            /* set form */
            for(var idx in this.conts) {
                if (idx == (this.conts.length-1)) {
                    this.conts[idx].setOption({
                        'margin-top'  : '50px'        ,
                        'margin-left' : padleft + 'px',
                        'position'    : 'relative'    ,
                        'left'        : '350px'
                    });
                } else {
                    this.conts[idx].setOption({
                        'margin-top'  : '20px'         ,
                        'margin-left' : padleft + 'px' ,
                    });
                }
                this.conts[idx].init(this.getId());
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg,func,prm) {
        try {
            for(var idx in this.conts) {
                this.conts[idx].setVisible(flg);
            }
            super.setVisible(flg, func, prm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    chkValue() {
        try {
            if( ('' == this.conts[0].getValue()) &&
                ('' == this.conts[1].getValue()) ) {
                this.error.showMessage('empty value');
                return false;
            }
            return true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getValue(idx) {
        try {
            if ((0 > idx) || ((this.conts.length-1) <= idx)) {
                throw new Error('invalid parameter');
            }
            return this.conts[idx].getValue();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
