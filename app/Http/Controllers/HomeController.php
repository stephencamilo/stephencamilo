<?php

namespace App\Http\Controllers;

use App\Content\StaticContent; // Import the class
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // 1. Get all static content from the dedicated class
        $content = StaticContent::home();

        // 2. Inject dynamic values that must be calculated at runtime
        $content['meta']['og']['url'] = url()->current();
        
        // Prepend the full asset path for images in meta tags
        $content['meta']['og']['image'] = asset($content['meta']['og']['image']);
        $content['meta']['twitter']['image'] = asset($content['meta']['twitter']['image']);

        // 3. Prepend the full asset path to image paths in the content
        $content['footer']['logo'] = asset($content['footer']['logo']);
        $content['footer']['background'] = asset($content['footer']['background']);
        $content['footer']['copyrightText'] = '© ' . date('Y') . '. All Rights Reserved.';

        // 4. Pass the final, compiled content to the view
        return view('home', ['content' => $content]);
    }
}