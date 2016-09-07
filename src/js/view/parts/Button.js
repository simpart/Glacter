
class Button extends Contents {
    constructor(cnt) {
        try {
            super(cnt);
            this.clickEvt  = null;
            this.def_color = '#257182';
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setClickEvt(func) {
        try {
            if (true === this.inited) {
                $('#' + this.getId()).click(func);
            } else {
                this.clickEvt = func;
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setColor(clr) {
        try {
            $('#' + this.getId() + ' button::before').css('background', clr);
            $('#' + this.getId() + ' button::before').css('color', 'black');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).append('<button class=\'c-btn-ujarak\'>'+ this.conts +'</button>');
            tetraring.loader.css('./css/parts/button.css');
            for (var key in this.option) {
                if ('sel-color' == key) {
                    
                } else {
                    $('#' + this.getId() + ' button').css(this.option[key][0], this.option[key][1]);
                }
            }
            if (null !== this.clickEvt) {
                $('#' + this.getId() + ' button').click(this.clickEvt);
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}    
/* end of file */
