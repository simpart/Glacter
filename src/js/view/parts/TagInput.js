
class TagInput extends Input {
    getValue() {
        try {
            var tag_src = $('#' + this.getId() + ' .fl_input').val();
            return tag_src.split(',');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
