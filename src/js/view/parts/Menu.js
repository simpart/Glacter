
class Menu extends Contents {
    constructor(hdr) {
        try {
            super(
                [(hdr || null),  // header
                 new Array()]    // contents
            );
            this.sel_idx = null;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setHeader(hdr) {
        try {
            hdr.setMenu(this);
            this.conts[0] = hdr;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addConts(cnt) {
        try {
            if (null === this.conts[0]) {
                throw new Error('menu header is null');
            }
            this.conts[1].push(cnt);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    notifySelect(idx) {
        try {
            //this.conts[this.sel_idx].setVisible(
            //    false,
            //    function(idx) {
            //        try {
            //            this.conts[idx].setVisible(true);
            //        } catch (e) {
            //            console.error(e.stack);
            //        }
            //    },
            //    idx
            //);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            if ((null == tgt) || ('' == tgt)) {
                throw new Error('invalid parameter');
            }
            
            $('#' + tgt).append('<div id=\''+ this.name + 'menu-wrap' +'\'></div>');
            if (null === this.header) {
                throw new Error('menu header is null');
            }
            this.header.init(this.name + 'menu-wrap');
            
            for (var idx in this.conts) {
                this.conts[idx].init(this.name + 'menu-wrap');
            }
            
            
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg) {
        try {
        //    this.header.setVisible(flg);
        //    for (var idx in this.conts) {
        //        this.conts[idx].init(flg);
        //    }
        //    
        //    if (true === flg) {
        //        $('#' + this.name + 'menu-wrap').fadeIn();
        //    } else if (false === flg) {
        ///        $('#' + this.name + 'menu-wrap').fadeOut();
         //   }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
