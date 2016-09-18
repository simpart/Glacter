<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $tag = $dbc->delete(
                     'tags',
                     array('tag' => '"' . $_POST['tag'] . '"')
                 );
    
    tetraring\rest\resp(null);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());
}
/* end of file */
