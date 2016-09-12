class SearchForm extends Form {
    chkValue() {
        try {
            if ((false == this.conts[0].chkValue(this.error)) &&
                (false == this.conts[1].chkValue(this.error))) {
                var input1 = this.conts[0].label;
                var input2 = this.conts[1].label;
                this.error.setMessage(input1 + ' or ' + input2 + ' is null');
                return false;
            }
            return true;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
