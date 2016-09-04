
class Menuhdr extends Contents {
    constructor() {
        try {
            super('');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            tetraring.loader.html('./html/parts/menuhdr.html');
            //$('#' + this.getId() + ' div').attr('class', 'message');
            //tetraring.loader.css('./css/parts/message.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
