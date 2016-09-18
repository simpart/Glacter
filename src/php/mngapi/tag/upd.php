<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $sel = $dbc->select(
               'tags',
               array('tag' => '"' . $_POST['old_tag'] . '"')
           );
    if (null === $sel) {
        throw new Exception('could not find ' . $_POST['old_tag']);
    }
    
    $dbc->update(
              'tags',
              array('tag' => '"' . $_POST['new_tag'] . '"'),
              array('id' => $sel[0]['id'])
          );
    
    tetraring\rest\resp(null);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());;
}
/* end of file */
