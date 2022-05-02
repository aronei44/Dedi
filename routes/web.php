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
Route::get('/auth', [Auth\AuthController::class, 'authView'])->name('login');
Route::post('/auth/login', [Auth\AuthController::class, 'loginWeb']);
Route::post('/auth/register', [Auth\AuthController::class, 'registerWeb']);
Route::post('/auth/logout', [Auth\AuthController::class, 'logoutWeb']);

Route::group(['middleware' => 'auth','prefix'=>'dashboard'], function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    });
});
