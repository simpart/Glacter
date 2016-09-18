<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    
    $tag    = $_POST['tag']; 
    $tag_id = array();
    if (false === empty($tag)) {
        foreach ($tag as $tag_elm) {
            $tbl_tag = $dbc->select(
                           'tags',
                           array(
                               'tag' => '"' . $tag_elm  . '"'
                           )
                       );
            if (null === $tbl_tag) {
                throw new Exception('could not find tag : ' . $tag_elm);
            }
            $tag_id[$tag_elm] = $tbl_tag[0]['id'];
        }
    }
    
    $dbc->insert(
        'items',
        array(
            'title'  => '"' . $_POST['title'] . '"',
            'conts'  => '"' . $_POST['item']  . '"',
            'remark' => '"' . $_POST['desc']  . '"'
        )
    );
    
    $add_idx = $dbc->maxIndex(
                   'items',
                   'id'
               );
    
    if (false === empty($tag)) {
        foreach ($tag as $tag_elm) {
            $dbc->insert(
                'item_tag',
                array(
                    'item' => $add_idx,
                    'tag'  => $tag_id[$tag_elm]
                )
            );
        }
    }
    tetraring\rest\resp(null);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());;
}
#/* end of file */
