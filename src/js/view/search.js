
$(function() {
    try {
        app.search = {};
        app.search.showList = function(keywd) {
            try {
                alert(keywd);
                
            } catch (e) {
                throw new Error(e.stack + '\n');
            }
        }
    } catch (e) {
        console.error(e.stack);
    }
});


