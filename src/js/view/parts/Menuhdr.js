
class Menuhdr extends Contents {
    constructor() {
        try {
            super(new Array());
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addElem(elm) {
        try {
            this.conts.push(elm);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
//    init(tgt) {
//        try {
//            super.init(tgt);
//            //tetraring.loader.html('./html/parts/menuhdr.html');
//            //$('#' + this.getId() + ' div').attr('class', 'message');
//            //tetraring.loader.css('./css/parts/message.css');
//        } catch (e) {
//            throw new Error(e.stack + '\n');
//        }
//    }
}
/* end of file */
