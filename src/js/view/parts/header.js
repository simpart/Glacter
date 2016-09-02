

class Header {
    constructor(nm) {
        try {
            if ((null == nm) || ('' == nm)) {
                throw new Error('invalid parameter');
            }
            this.name   = nm;
            this.left   = null;
            this.center = null;
            this.right  = null;
        } catch (e) {
            throw new Error(e.stack);
        }
    }
    
    setLeft(l) {
        try {
            this.left   = l;
        } catch (e) {
            throw new Error(e.stack);
        }
    }
    
    setCenter(c) {
        try {
            this.center = c;
        } catch (e) {
            throw new Error(e.stack);
        }
    }
    
    setRight(r) {
        try {
            this.right = r;
        } catch (e) {
            throw new Error(e.stack);
        }
    }
    
    init(tgt) {
        try {
            if ((null == nm) || ('' == nm)) {
                throw new Error('invalid parameter');
            }
            tetraring.loader.html('./html/parts/header.html', tgt, function(ret,hdr) {
                try {
                    //$('#' + tgt).attr('id', tgt + 'hdr');
                    $('#hdr').attr('id', hdr.name + 'hdr');
                    if (null !== hdr.left) {
                        hdr.left.init(hdr.name + 'hdr .conts-left');
                    }
                    if (null !== hdr.center) {
                        hdr.center.init(hdr.name + 'hdr .conts-center');
                    }
                    if (null !== hdr.right) {
                        hdr.right.init(hdr.name + 'hdr .conts-right');
                    }
                } catch (e) {
                    throw new Error(e.stack+'\n');
                }
            },this);
        } catch (e) {
            throw new Error(e.stack);
        }
    }
    
    setVisible(flg) {
        try {
            if (true === flg) {
                $('#' + this.name).fadeIn();
            } else {
                $('#' + this.name).fadeOut();
            }
        } catch (e) {
            throw new Error(e.stack);
        }
    }
}
/* end of file */
