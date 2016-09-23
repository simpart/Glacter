
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
            tetraring.loader.css(this.base_path + 'css/parts/message.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setMessage(msg) {
        try {
            this.conts = msg;
            $('#' + this.getId() + ' .message').html(msg);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    showMessage(msg) {
        try {
            this.setMessage(msg);
            if ('none' == $('#' + this.getId()).css('display')) {
                this.setVisible(true);
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
