
try {
    ttrg.init.addLoadEvt(function(){
        alert('test');
    });
} catch (e) {
    console.error(e.stack);
}
