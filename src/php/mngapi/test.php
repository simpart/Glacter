<?php
    require_once(__DIR__ . '/../lib/tetraring4php/require.php');
    try {
        tetraring\rest\resp('api test');
    } catch (Exception $e) {
       tetraring\rest\errResp($e->getMessage());
    }
