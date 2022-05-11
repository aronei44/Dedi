<?php

namespace App\Http\Controllers\Auth;

use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\SendMailController;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
    public function handleGoogleCallback()
    {
        $data = Socialite::driver('google')->stateless()->user();
        if(auth()->user()){
            $user = User::find(auth()->user()->id);
            if($user->email == $data->email){
                $user->google_id = $data->id;
                $user->save();
                return redirect()->intended('/dashboard');
            }
            return redirect()->intended('/dashboard');
        }
        $user = User::where('google_id', $data->id)->first();
        if ($user) {
            Auth::login($user);
            return redirect()->intended('/');
        } else {
            $user = User::where('email', $data->email)->first();
            if ($user) {
                $user->google_id = $data->id;
                $user->save();
                Auth::login($user);
                return redirect()->intended('/');
            } else {
                $user = User::create([
                    'name' => explode('@', $data->email)[0],
                    'email' => $data->email,
                    'google_id' => $data->id,
                    'email_verified_at' => now(),
                ]);
                Role::create([
                    'user_id' => $user->id,
                ]);
                Profile::create([
                    'user_id' => $user->id,
                    'name' => $data->name,
                ]);
                SendMailController::welcomeMail($user->email, $user->name);

                Auth::login($user);
                return redirect()->intended('/');
            }
        }
    }
}
