<?php
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return response()->json([
            'status' => true,
            'data' => $request->user()
        ], 200);
    });
    Route::post('/user/sent-otp', [UserController::class, 'SendOtp']);
    Route::post('/user/verify-otp', [UserController::class, 'VerifyOtp']);
    Route::post('/logout', [UserController::class, 'Logout']);
});

Route::post('/login', [UserController::class, 'Login']);
Route::post('/signup', [UserController::class, 'Signup']);

