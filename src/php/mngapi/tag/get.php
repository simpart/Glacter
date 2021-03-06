<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $tag     = $dbc->select('tags',null);
    $ret_msg = null;
    if (null !== $tag) {
        $ret_msg = array();
        foreach ($tag as $elm) {
            $ret_msg[] = $elm['tag'];
        }
    }
    tetraring\rest\resp($ret_msg);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());;
}
