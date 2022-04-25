<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function authView()
    {
        return Inertia::render('Auth/Index');
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
            ], 404);
        }
        if (!\Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Password does not match',
            ], 401);
        } else {
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $user,
            ],200);
        }
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
        ]);
        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => $user,
        ],201);
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out',
        ],401);
    }
}
