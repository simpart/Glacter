class ItemForm extends Form {
    chkValue() {
        try {
            if(false == this.conts[0].chkValue(this.error)) {
                return false;
            }
            // check tag
            var tags    = this.conts[1].getValue();
            
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
