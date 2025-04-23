<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/User', function (Request $request) {
    return response()->json([
        'status' => true,
        'data' => $request->headers->all()
    ], 200);
});
// $request->user();
// ->middleware('auth:sanctum');
Route::post('/login' , [UserController::class , 'Login']);
Route::post('/signup', [UserController::class , 'Signup']);