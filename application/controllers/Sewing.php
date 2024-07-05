<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sewing extends CI_Controller {
	public function index()
	{
		$this->load->view('sewing');
	}
}
