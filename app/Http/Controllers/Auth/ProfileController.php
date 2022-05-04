<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function changeProfile(Request $request)
    {
        $profile = auth()->user()->profile;
        $profile->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'status' => $request->status,
            'work' => $request->work
        ]);
        return back();
    }
}
