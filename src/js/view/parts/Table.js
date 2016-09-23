
class Table extends Contents {
    constructor(hdr) {
        try {
            super({
                head : hdr,
                rows : new Array()
            });
            this.func = null;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    addRow(row) {
        try {
            this.conts.rows.push(row);
            $('#' + this.getId() + ' table tbody').append('<tr></tr>');
            var td_len = 0;
            for(var key in row) {
                var tr_idx = $('#' + this.getId() + ' table tbody tr').length-1;
                $('#' + this.getId() + ' table tbody tr').eq(tr_idx).append('<td></td>');
                row[key].init(this.getId() + ' table tbody tr:eq('+ tr_idx +') td:eq('+ td_len +')');
                $('#' + this.getId() + ' table tbody tr:eq('+ tr_idx +') td:eq('+ td_len +')').css('padding', '10px');
                row[key].setVisible(true);
                td_len++;
            }
            var own_tbl = this;
            $('#' + this.getId() + ' table tbody tr').click(function() {
                var idx = $("tr").index(this);
                if (null !== own_tbl.func) {
                    own_tbl.func(own_tbl, idx);
                }
            });
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    setRowClickEvt(func) {
        try {
            this.func = func;
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    delRow(idx) {
        try {
            $('#' + this.getId() + ' table tbody tr').eq(idx).remove();
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
    
    init(tgt) {
        try {
            super.init(tgt);
            $('#' + this.getId()).append('<table rules="rows"></table>');
            $('#' + this.getId() + ' table').append('<thead></thead>');
            $('#' + this.getId() + ' thead').append('<tr></tr>');
            for(var key in this.conts.head) {
                $('#' + this.getId() + ' thead tr').append('<th><div>'+ this.conts.head[key] +'</div></th>');
            }
            $('#' + this.getId() + ' thead tr th').css('font-size', '20px');
            $('#' + this.getId() + ' thead tr th').css('padding'  , '10px');
            $('#' + this.getId() + ' table').append('<tbody></tbody>');
            
            for (var key in this.option) {
                $('#' + this.getId()).css(this.option[key][0], this.option[key][1]);
            }
            $('#' + this.getId() + ' table').css('border-bottom', 'solid 1px');
            tetraring.loader.css('./css/parts/table.css');
        } catch (e) {
            throw new Error(e.stack + '\n');
        }
    }
}
/* end of file */
