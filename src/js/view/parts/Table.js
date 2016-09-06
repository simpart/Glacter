
class Table extends Contents {
    constructor(hdr) {
        try {
            super({
                head : hdr,
                rows   : null
            });
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).append('<table></table>');
            $('#' + this.getId() + ' table').append('<thead></thead>');
            $('#' + this.getId() + ' thead').append('<tr></tr>');
            for(var key in this.conts.head) {
                $('#' + this.getId() + ' thead tr').append('<th><div>'+ this.conts.head[key] +'</div></th>');
            }
            $('#' + this.getId() + ' table').append('<tbody></tbody>');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
