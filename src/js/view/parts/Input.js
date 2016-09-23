
class Input extends Contents {
    constructor(lbl) {
        try {
            super(lbl + ' : ');
            this.label    = lbl;
            this.not_null = true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            tetraring.loader.css(this.base_path + 'src/js/lib/FlowupLabels.js/src/jquery.FlowupLabels.css');
            tetraring.loader.html(
                this.base_path + 'html/parts/input.html',
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
                if ('width' == this.option[key][0]) {
                    $('#' + this.getId() + ' .fl_wrap').css(this.option[key][0], this.option[key][1]);
                } else if ('not_null' == this.option[key][0]) {
                    this.not_null = this.option[key][1];
                } else {
                    $('#' + this.getId()).css(this.option[key][0], this.option[key][1]);
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
    
    chkValue(msg) {
        try {
            var val = this.getValue();
            if (true == this.not_null) {
                if ((null == val) || ('' == val)) {
                    msg.setMessage(this.label + ' is null');
                    return false;
                }
            }
            return true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
