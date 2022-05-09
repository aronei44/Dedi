<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\VerifyAccountMail;


class SendMailController extends Controller
{
    public static function verifyEmail($mail, $username)
    {
        Mail::to($mail)->send(new VerifyAccountMail($mail, $username));
    }
}
