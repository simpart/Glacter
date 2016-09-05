
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
                    //$('#' + this.getId() + ' button:hover').css('border-color', this.option[key]);
                    //$('#' + this.getId() + ' button:hover').css('border-width', '3px');
                } else {
                    $('#' + this.getId() + ' button').css(key, this.option[key]);
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
