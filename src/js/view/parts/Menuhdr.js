
class Menuhdr extends Contents {
    constructor() {
        try {
            super(new Array());
            this.menu = null;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addElem(elm) {
        try {
            var menuhdr = this;
            var menu = this.menu;
            elm.setClickEvt(function() {
                var id  = $(this).parent('div').attr('id');
                var idx = menuhdr.getMenuIdx(id);
                menu.notifySelect(idx);
            });
            this.conts.push(elm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getMenuIdx(id) {
        try {
            for (var idx in this.conts) {
                if(id === this.conts[idx].getId()){
                    return idx;
                }
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setMenu(m) {
        try {
            this.menu = m;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    init(tgt) {
        try {
            super.init(tgt);
            //for (var idx in this.conts) {
            //    this.conts[idx].init(this.getId());
            //}
//            //tetraring.loader.html('./html/parts/menuhdr.html');
//            //$('#' + this.getId() + ' div').attr('class', 'message');
//            //tetraring.loader.css('./css/parts/message.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
