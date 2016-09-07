
class TextArea extends Contents {
    constructor(txt) {
        try {
            super(txt);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).html('<textarea>' + this.conts + '</textarea>');
            for (var key in this.option) {
                $('#' + this.getId() + ' textarea').css(this.option[key][0], this.option[key][1]);
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
//    setVisible(flg) {
 //       try {
//            if (true === flg) {
//                $('#' + this.name + 'text').fadeIn();
//            } else if (false === flg) {
//                $('#' + this.name + 'text').fadeOut();
//            }
 //       } catch (e) {
 //           throw new Error(e.stack + '\n');
 //       }
 //   }
}
/* end of file */
