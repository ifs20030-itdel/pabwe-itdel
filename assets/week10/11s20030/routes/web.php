<?php

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
    return view('welcome');
});

//Rute Baru
Route::get('sapa-publik ', function() {
    echo "<h1 style=text-align:center;>Selamat Datang di Laravel, Vistar Tiop Raja Gukguk</h1>";
});