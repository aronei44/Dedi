<?php

namespace App\Http\Controllers\Auth;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function authView()
    {
        return Inertia::render('Auth/Index');
    }
    public function loginWeb(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email:dns',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        } else {
            return redirect()->back()->withInput()->with('error', 'Invalid credentials.');
        }
    }
    public function registerWeb(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email:dns|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);
        Role::create([
            'user_id' => $user->id,
        ]);
        Profile::create([
            'user_id' => $user->id,
        ]);

        Auth::login($user);

        return redirect()->intended('/');
    }
    public function logoutWeb(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
    public function changePassword(Request $request)
    {
        $credentials = $request->validate([
            'password' => 'required|min:8',
            'newPassword' => 'required|min:8',
        ]);

        $user = Auth::user();

        if (! Hash::check($credentials['password'], $user->password)) {
            return redirect()->back()->withInput()->with('error', 'Invalid current password.');
        }

        $user->password = Hash::make($credentials['newPassword']);
        $user->save();

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/auth');
    }
    public function changeEmail(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email:dns',
        ]);

        $user = Auth::user();

        $user->email = $credentials['email'];
        $user->save();

        return back();
    }
    public function deleteAccount(Request $request)
    {
        $credentials = $request->validate([
            'password' => 'required|min:8',
        ]);
        $user = Auth::user();

        if(Hash::check($credentials['password'], $user->password)) {
            $user->delete();

            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            return redirect('/');
        } else {
            return redirect()->back()->withInput()->with('error', 'Invalid current password.');
        }
    }




    // auth for api
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
        Role::create([
            'user_id' => $user->id,
        ]);
        Profile::create([
            'user_id' => $user->id,
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
        ],200);
    }
}
