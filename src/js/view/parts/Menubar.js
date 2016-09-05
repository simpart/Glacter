
class Menubar extends Menuhdr {
    constructor() {
        try {
            super();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addElem(elm) {
        try {
            super.addElem(new Button(elm));
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            tetraring.loader.html(
                './html/parts/menuhdr.html',
                this.getId()
            );
            tetraring.loader.css(
                './css/parts/menubar.css'
            );
            $('#' + this.getId()).css('margin-left', '15px');
            $('#' + this.getId()).css('margin-top', '15px');
            var own_id = this.getId();
            $('#' + this.getId() + ' .menu-bar').click(function(){
                try {
                    // show menu header
                    $('#' + own_id + ' .menu-hdr').fadeIn();
                    $('#' + own_id + ' .menu-hdr').velocity({ left : 0 } , 300 );
                } catch (e) {
                    console.error(e.stack);
                }
            });
            
            $('#' + this.getId() + ' .menu-hdr').css('width', '250px');
            $('#' + this.getId() + ' .menu-hdr').css('height', $(window).height() + 'px');
            $('#' + this.getId() + ' .menu-hdr').css('position', 'fixed');
            $('#' + this.getId() + ' .menu-hdr').css('left', '-250px');
            $('#' + this.getId() + ' .menu-hdr').css('border', 'solid 1px white');
            
            for (var key in this.option) {
                if ('height' == key) {
                    $('#' + this.getId() + ' .menu-hdr').css(
                        'top',
                        $(window).height() - this.option[key] + 'px'
                    );
                    $('#' + this.getId() + ' .menu-hdr').css(key, this.option[key] + 'px');
                } else {
                    $('#' + this.getId() + ' .menu-hdr').css(key, this.option[key]);
                }
            }
            
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
