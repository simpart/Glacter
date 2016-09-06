
class SlideMenu extends Menu {
    constructor() {
        try {
            super(new Menubar());
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    notifySelect(idx) {
       try {
           super.notifySelect(idx);
           this.conts[0].menuVisible(false);
       } catch (e) {
           throw new Error(e.stack + '\n');
       }
    }
    //init(tgt) {
    //    try {
    //    } catch (e) {
    //        throw new Error(e.stack + '\n');
    //    }
    //}
}
/* end of file */
