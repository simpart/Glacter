
class Dialog extends ContsGroup {
    constructor() {
        try {
            super('');
            this.member = new Array();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setVisible(flg, func, prm) {
        try {
            //for (var key in this.member) {
            //    this.member[key].setVisible(flg);
            //}
            //super.setVisible(flg, func, prm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
