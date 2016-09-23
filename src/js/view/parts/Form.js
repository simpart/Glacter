
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
                $('#' + this.getId()).css(this.option[key][0], this.option[key][1]);
            }
            
            var padleft = ($(window).width() -500) / 2;
            /* set error message */
            this.error = new Message();
            this.error.addOption({
                'margin-left'  : (padleft) + 'px' ,
                'background'   : '#ffc8d5',
                'border-color' : 'red'    ,
                'border-width' : '1px'    ,
                'base_path'    : this.base_path
            });
            this.error.init(this.getId());
            
            
            /* set form */
            for(var idx in this.conts) {
                if (idx == (this.conts.length-1)) {
                    this.conts[idx].addOption({
                        'margin-top'  : '50px'        ,
                        'margin-left' : padleft + 'px',
                        'position'    : 'relative'    ,
                        'left'        : '350px'
                    });
                } else {
                    this.conts[idx].addOption({
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
            var loop = 0;
            for(loop=0; loop < this.conts.length-1 ;loop++) {
                if (false === this.conts[loop].chkValue(this.error)) {
                    return false;
                }
            }
            return true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getValue(idx) {
        try {
            var pidx = idx || null;
            if ((0 > pidx) || ((this.conts.length-1) <= pidx)) {
                throw new Error('invalid parameter');
            }
            if (null === pidx) {
                var ret_val = new Array();
                var loop    = 0;
                for(loop=0; loop < this.conts.length-1 ;loop++) {
                    ret_val.push(this.conts[loop].getValue());
                }
                return ret_val;
            }
            return this.conts[pidx].getValue();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    visibleError(flg) {
        try {
            this.error.setVisible(flg);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
