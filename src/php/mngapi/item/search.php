<?php
try {
    require_once(__DIR__ . '/../../tetraring/require.php');
    
    $ret_val = null;
    if ((false === empty($_POST['keyword'])) &&
        (false === empty($_POST['tag']))) {
        /* search keyword and tag */
        $ret_val = Fsrh_keyTag($_POST['keyword'], $_POST['tag']);
    } else if ((false === empty($_POST['keyword'])) &&
               (true  === empty($_POST['tag']))) {
        /* search keyword */
        $ret_val = Fsrh_key($_POST['keyword']);
    } else if ( (true  === empty($_POST['keyword'])) &&
                (false === empty($_POST['tag'])) ) {
        /* search tag */
        $ret_val = Fsrh_tag($_POST['tag']);
    } else {
        $ret_val = null;
    }
    
    tetraring\rest\resp($ret_val);
    return;
    
    $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
    $key     = $_POST['keyword'];
    $tag     = $_POST['tag']; 
    $key_ret = null;
    $tag_id  = null;

    if (false === empty($key)) {
        $sql    = 'select * from items where ' .
                  'title  like ' . '"%'. $key .'%" OR ' .
                  'conts  like ' . '"%'. $key .'%" OR ' .
                  'remark like ' . '"%'. $key .'%"';
        $keyret = $dbc->manual($sql);
    }
    

    if (false === empty($tag)) {
        /* get tag id */
        $tag_id = array();
        foreach ($tag as $tag_elm) {
            $tbl_tag = $dbc->select(
                           'tags',
                           array(
                               'tag' => '"' . $tag_elm  . '"'
                           )
                       );
            if (null === $tbl_tag) {
                continue;
            }
            $tag_id[$tag_elm] = $tbl_tag[0]['id'];
        }
    }
    
    $ret_val = array();
    if ((null !== $key_ret) && (null !== $tag_id)) {
        /* search keyword and tag */
        $chk_flg = false;
        foreach ($key_ret as $key_ret_elm) {
            $chk_flg = false;
            foreach ($tag_id as $tag_id_elm) {
                $chk_ret = $dbc->select(
                               'item_tag',
                               array(
                                   'item' => $key_ret_elm['id'],
                                   'tag'  => $tag_id_elm,
                               )
                           );
                if (null === $chk_ret) {
                    $chk_flg = true;
                    break;
                }
            }
            if (false === $chk_flg) {
                $ret_val[] = $key_ret_elm;
            }
        }
        if (0 === count($ret_val)) {
            $ret_val = null;
        }
    } else if ((null !== $key_ret) && (null === $tag_id)) {
        /* search keyword */
        $ret_val = $key_ret;
    } else if ((null === $key_ret) && (null !== $tag_id)) {
        /* search tag */
        $buff = array();
        foreach ($tag_id as $tag_id_elm) {
            $buff[] = $dbc->select(
                          'item_tag',
                          array(
                              'tag'  => $tag_id_elm,
                          )
                      );
        }
        $ret_buff = null;
        foreach ($buff as $buff_elm) {
            if (null === $buff_elm) {
                $ret_val = null;
                break;
            }
            if(null === $ret_buff) {
                $ret_buff = $buff_elm;
                continue;
            }
            $new_ret_buff = array();
            foreach ($buff_elm as $buff_elm_elm) {
                //for
                foreach ($ret_buff as $ret_buff_elm) {
                    if (0 === strcmp($buff_elm_elm['item'], $ret_buff_elm['item'])) {
                        $new_ret_buff[] = $ret_buff_elm;
                        break;
                    }
                }
            }
            if (0 === count($new_ret_buff)) {
                $ret_val = null;
                break;
            }
            $ret_buff = $new_ret_buff;
        }
        $ret_val = $ret_buff; 
    } else {
        $ret_val = null;
    }
    
    tetraring\rest\resp($ret_val);
} catch (Exception $e) {
    tetraring\rest\errResp($e->getMessage());
}

function Fsrh_keyTag($key, $tag) {
    try {
        return null;
    } catch (Exception $e) {
        throw new Exception(
            PHP_EOL   .
            'File:'   . __FILE__   . ',' .
            'Line:'   . __line__   . ',' .
            'Func:' . __FUNCTION__ . ',' .
            $e->getMessage()
        );
    }
}

function Fsrh_key($key) {
    try {
        $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
        $sql    = 'select * from items where ' .
                  'title  like ' . '"%'. $key .'%" OR ' .
                  'conts  like ' . '"%'. $key .'%" OR ' .
                  'remark like ' . '"%'. $key .'%"';
        return $dbc->manual($sql);
    } catch (Exception $e) {
        throw new Exception(
            PHP_EOL   .
            'File:'   . __FILE__   . ',' .
            'Line:'   . __line__   . ',' .
            'Func:' . __FUNCTION__ . ',' .
            $e->getMessage()
        );
    }
}

function Fsrh_tag($tag) {
    try {
        $dbc = new tetraring\database\pdo\Connector(
                   'localhost',
                   'glacter'  ,
                   'glacter'  ,
                   'glacter'
               );
        /* get tag id */
        $tag_id = array();
        foreach ($tag as $tag_elm) {
            $tbl_tag = $dbc->select(
                           'tags',
                           array(
                               'tag' => '"' . $tag_elm  . '"'
                           )
                       );
            if (null === $tbl_tag) {
                return null;
            }
            $tag_id[$tag_elm] = $tbl_tag[0]['id'];
        }
        /* search tag */
        $chk_tag = null;
        foreach ($tag_id as $tag_id_elm) {
            if(null === $chk_tag) {
                $chk_tag = $dbc->select(
                               'item_tag',
                               array(
                                   'tag'  => $tag_id_elm,
                               )
                           );
            } else {
                $buff        = null;
                $new_chk_tag = array();
                foreach ($chk_tag as $chk_tag_elm) {
                    $buff = $dbc->select(
                                'item_tag',
                                array(
                                    'tag'  => $tag_id_elm,
                                    'item' => $chk_tag_elm['item']
                                )
                            );
                    if (null !== $buff) {
                        $new_chk_tag[] = $buff[0];
                    }
                }
                if (0 === count($new_chk_tag)) {
                    return null;
                }
                $chk_tag = $new_chk_tag;
            }
        }
        $ret_val = array();
        foreach ($chk_tag as $chk_tag_elm) {
            $temp = $dbc->select(
                        'items',
                        array(
                            'id'  => $chk_tag_elm['item'],
                        )
                    );
            if (null === $temp) {
                throw new Exception('internal error');
            }
            $ret_val[] = $temp[0];
        }
        return $ret_val;
    } catch (Exception $e) {
        throw new Exception(
            PHP_EOL   .
            'File:'   . __FILE__   . ',' .
            'Line:'   . __line__   . ',' .
            'Func:' . __FUNCTION__ . ',' .
            $e->getMessage()
        );
    }
}
/* end of file */
