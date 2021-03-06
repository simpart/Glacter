<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $ret = $dbc->select(
               'tags',
               array('tag' => '"' . $_POST['tag'] . '"')
           );
    if (null !== $ret) {
        throw new Exception($_POST['tag'] . ' is already exists');
    }
    
    $tag = $dbc->insert(
               'tags',
               array('tag' => '"' . $_POST['tag'] . '"')
           );
    
    tetraring\rest\resp(null);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());;
}
/* end of file */
