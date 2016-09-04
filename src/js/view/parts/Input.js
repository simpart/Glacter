
class Input extends Contents {
    constructor(label) {
        try {
            super(label);
            tetraring.loader.css('./src/js/lib/FlowupLabels.js/src/jquery.FlowupLabels.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            
            tetraring.loader.html(
                './html/parts/input.html',
                this.getId()
            );
            
            $('#' + this.getId() + ' .fl_label').html(this.conts);
            $('#' + this.getId() + ' .FlowupLabels').FlowupLabels({
                feature_onInitLoad : true       ,
                class_focused      : 'focused'  ,
                class_populated    : 'populated'
            });
            $('#' + this.getId() + ' .fl_wrap').css('width' , '500px');
            $('#' + this.getId() + ' .fl_wrap').css('height', '46px');
            for (var key in this.option) {
                if ('width' == key) {
                    $('#' + this.getId() + ' .fl_wrap').css(key, this.option[key]);
                } else {
                    $('#' + this.getId()).css(key, this.option[key]);
                }
            }
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    getValue() {
        try {
            return $('#' + this.getId() + ' .fl_input').val();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
