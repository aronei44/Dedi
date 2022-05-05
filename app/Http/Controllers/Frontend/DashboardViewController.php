<?php

namespace App\Http\Controllers\Frontend;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardViewController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Index');
    }
    public function account()
    {
        return Inertia::render('Dashboard/Account/Index');
    }
    public function profile()
    {
        return Inertia::render('Dashboard/Profile/Index');
    }
}
