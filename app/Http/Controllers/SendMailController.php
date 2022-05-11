<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\WelcomeMail;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Mail\VerifyAccountMail;
use Illuminate\Support\Facades\Mail;


class SendMailController extends Controller
{
    public static function welcomeMail($mail, $username)
    {
        Mail::to($mail)->send(new WelcomeMail($mail, $username));
    }
    public function verifyMail(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $arr = [0,1,2,3,4,5,6,7,8,9];
        $arr = implode('',Arr::random($arr, 6));
        $user->otp = $arr;
        $user->save();
        try {
            //code...
            Mail::to($user->email)->send(new VerifyAccountMail($user->email, $user->name, $arr));
            return response()->json(['success' => true, 'message' => 'Verification mail sent successfully.']);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['success' => false, 'message' => 'Verification mail not sent.']);
        }
    }
}
