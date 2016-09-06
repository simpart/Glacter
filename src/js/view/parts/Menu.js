
class Menu extends Contents {
    constructor(hdr) {
        try {
            super(
                [(hdr || null),  // header
                 new Array()]    // contents
            );
            hdr.setMenu(this);
            this.sel_idx = 0;
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
    
    addConts(name, cnt) {
        try {
            if (null === this.conts[0]) {
                throw new Error('menu header is null');
            }
            this.conts[1].push(cnt);
            this.conts[0].addElem(name);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    notifySelect(idx) {
        try {
            if (this.sel_idx == idx) {
                return;
            }
            var menu = this;
            this.conts[1][this.sel_idx].setVisible(
                false,
                function() {
                    try {
                        menu.conts[1][idx].setVisible(true);
                    } catch (e) {
                        console.error(e.stack);
                    }
                }//,
            //    idx
            );
            this.sel_idx = idx;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            /* init menu header */
            this.conts[0].init(this.getId());
            
            /* init menu contents */
            for (var idx in this.conts[1]) {
                this.conts[1][idx].init(this.getId());
            }
            
            //$('#' + this.getId()).append('<div id=\''+ this.name + 'menu-wrap' +'\'></div>');
            
            //if (null === this.header) {
            //    throw new Error('menu header is null');
            //}
            //this.header.init(this.name + 'menu-wrap');
            //
            //for (var idx in this.conts) {
            //    this.conts[idx].init(this.name + 'menu-wrap');
            //}
            
            
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg) {
        try {
            /* set header visible */
            this.conts[0].setVisible(flg);
            
            /* set contents visible */
            this.conts[1][this.sel_idx].setVisible(flg);
            
            super.setVisible(flg);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getHeader() {
        try {
            return this.conts[0];
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
