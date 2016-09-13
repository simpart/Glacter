class ItemForm extends Form {
    chkValue() {
        try {
            if(false == this.conts[0].chkValue(this.error)) {
                return false;
            }
            // check tag
            var tags    = this.conts[1].getValue();
            tetraring.rest.post(
                './src/php/mngapi/test.php',
                {'tags' : tags} ,
                function(ret){
                    try {
                        alert(ret.message);
                    } catch (e) {
                        console.error(e.stack);
                    }
                }, null);
            
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
