/**
 * @file top/ctrl.js
 * @brief 
 * @author simpart
 */

require('mofron-tmpl-centerconts');
require('mofron-comp-fontawesome');

try {
    ttrg.init.addLoadEvt(function(){
        var conts = new mofron.tmpl.CenterConts('G L A C T O R');
        
        conts.addConts(
            new mofron.comp.FontAwesome('fa-bars', {
                path : './font/font-awesome-4.7.0/css/font-awesome.min.css'
            })
        );
        
        conts.visible(true);
    });
} catch (e) {
    console.error(e.stack);
}
