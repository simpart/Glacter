

class Header extends Contents {
    constructor(l,c,r) {
        try {
            super({
                left   : l,
                center : c,
                right  : r
            });
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setLeft(l) {
        try {
            this.conts.left   = l;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setCenter(c) {
        try {
            this.conts.center = c;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setRight(r) {
        try {
            this.conts.right = r;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            tetraring.loader.html(
                this.base_path + '/html/parts/header.html' ,
                this.getId()
            );
            
            $('#' + this.getId() + ' .header').css('float' , 'left');
            $('#' + this.getId() + ' .header').css('width' , '100%');
            $('#' + this.getId() + ' .header').css('height', '70px');
            $('#' + this.getId() + ' .conts-left').css('float', 'left');
            $('#' + this.getId() + ' .conts-center').css('float', 'left');
            $('#' + this.getId() + ' .conts-right').css('float', 'left');
            
            for (var key in this.option) {
                $('#' + this.getId() + ' .header').css(this.option[key][0], this.option[key][1]);
            }
            
            if (null !== this.conts.left) {
                this.conts.left.init(this.getId() + ' .conts-left');
            }
            if (null !== this.conts.center) {
                this.conts.center.init(this.getId() + ' .conts-center');
            }
            if (null !== this.conts.right) {
                this.conts.right.init(this.getId() + ' .conts-right');
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg) {
        try {
            if (null !== this.conts.left) {
                this.conts.left.setVisible(flg);
            }
            if (null !== this.conts.center) {
                this.conts.center.setVisible(flg);
            }
            if (null !== this.conts.right) {
                this.conts.right.setVisible(flg);
            }
            super.setVisible(flg);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
