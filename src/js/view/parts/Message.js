
class Message extends Text {
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
            $('#' + this.getId() + ' div').attr('class', 'message');
            tetraring.loader.css('./css/parts/message.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    showMessage(msg) {
        try {
            this.conts = msg;
            $('#' + this.getId() + ' .message').html(msg);
            if ('none' == $('#' + this.getId()).css('display')) {
                this.setVisible(true);
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
