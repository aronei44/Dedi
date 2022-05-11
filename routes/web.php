<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('email', [SendMailController::class, 'verifyEmail']);
Route::get('/auth', [Auth\AuthController::class, 'authView'])->name('login')->middleware('guest');
Route::post('/auth/login', [Auth\AuthController::class, 'loginWeb']);
Route::post('/auth/register', [Auth\AuthController::class, 'registerWeb']);
Route::post('/auth/logout', [Auth\AuthController::class, 'logoutWeb']);
Route::get('/auth/google', [Auth\GoogleController::class, 'redirectToGoogle']);
Route::get('/auth/redirect', [Auth\GoogleController::class, 'handleGoogleCallback']);

Route::group(['middleware' => 'auth'], function () {
    Route::put('/change-password', [Auth\AuthController::class, 'changePassword']);
    Route::put('/change-email', [Auth\AuthController::class, 'changeEmail']);
    Route::post('/delete-account', [Auth\AuthController::class, 'deleteAccount']);
    Route::put('/profile', [Auth\ProfileController::class, 'changeProfile']);
    Route::post('/verify-email', [SendMailController::class, 'verifyMail']);
    Route::post('/verify-otp', [Auth\AuthController::class, 'verifyAccount']);

    Route::post('/review', [Frontend\MainActionController::class, 'storeReview']);
    Route::get('/reviews', [Frontend\MainActionController::class, 'getReviews']);
    Route::get('/review', [Frontend\MainActionController::class, 'getReview']);

    Route::group(['prefix' => 'dashboard'], function () {
        Route::get('/', [Frontend\DashboardViewController::class, 'index']);
        Route::get('/account', [Frontend\DashboardViewController::class, 'account']);
        Route::get('/profile', [Frontend\DashboardViewController::class, 'profile']);
    });

});

