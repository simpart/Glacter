
class TagInput extends Input {
    getValue() {
        try {
            var tag_src = $('#' + this.getId() + ' .fl_input').val();
            var tag_lst = tag_src.split(',');
            if ('' == tag_lst) {
                return null;
            }
            var ret_val = new Array();
            var loop1,loop2;
            var chk_flg = false;
            for(loop1=0; loop1 < tag_lst.length ;loop1++) {
                chk_flg = false;
                for(loop2=0; loop2 < ret_val.length ;loop2++) {
                    if (tag_lst[loop1] == ret_val[loop2]) {
                        chk_flg = true;
                    }
                }
                if (false === chk_flg) {
                    ret_val.push(tag_lst[loop1]);
                }
            }
            return ret_val;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
