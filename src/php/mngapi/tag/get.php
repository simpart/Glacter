<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $tag = $dbc->select('tags',null);
    tetraring\rest\resp($tag);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());;
}
