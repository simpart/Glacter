
class Text extends Contents {
    constructor(txt) {
        try {
            super(txt);
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setLink(path) {
        try {
            $('#' + this.getId()).css('cursor', 'pointer');
            $('#' + this.getId()).click(function() {
                try {
                    var cpath = path;
                    $('body').fadeOut(
                        'normal',
                        function() {
                            window.location.href = cpath;
                        }
                    );
                } catch (e) {
                    throw new Error(e.stack + '\n');
                }
            });
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).html('<div>' + this.conts + '</div>');
            for (var key in this.option) {
                $('#' + this.getId() + ' div').css(key, this.option[key]);
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
