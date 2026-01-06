<?php

namespace App\Http\Controllers;

use App\Content\StaticContent; // Import the class
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $content = StaticContent::home();
        return view('home', ['content' => $content]);
    }
}