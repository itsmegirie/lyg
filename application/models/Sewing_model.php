<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Sewing_model extends CI_Model
{
    public function get_summary()
    {
        $db = $this->load->database('default', TRUE);

        $sql = "SELECT TrnDate, StyleCode, COUNT(DISTINCT SizeName) AS count_size_name, SUM(QtyOutput) AS sum_qty_output
                FROM lygSewingOutput
                GROUP BY TrnDate, StyleCode";

        $result = $db->query($sql);
        $db->close();

        return $result;
    }

    public function get_detail($styleCode)
    {
        $db = $this->load->database('default', TRUE);

        $sql = "SELECT OperatorName, SizeName, SUM(QtyOutput) AS count_size_name, DestinationCode
                FROM lygSewingOutput  WHERE StyleCode = $styleCode
                GROUP BY OperatorName, SizeName, DestinationCode";

        $result = $db->query($sql);
        $db->close();

        return $result;
    }
}
