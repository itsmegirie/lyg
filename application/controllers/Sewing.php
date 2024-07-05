<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sewing extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model('Sewing_model', 'sewing');
    }
	
	public function index()
	{
		$this->load->view('sewing');
	}

	public function get_summary()
    {
        $response = $this->sewing->get_summary()->result_array();

        echo json_encode([
            'status' => true,
            'data' => $response
        ]);
    }

	public function get_detail()
    {

        $response = $this->sewing->get_detail($this->input->post('StyleCode'))->result_array();

        echo json_encode([
            'status' => true,
            'data' => $response
        ]);
    }
}
