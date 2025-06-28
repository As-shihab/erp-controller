<?php
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// 🧪 Test route
Route::get('/User', function (Request $request) {
    return response()->json([
        'status' => true,
        'data' => $request->headers->all()
    ], 200);
});

// ✅ Public routes
Route::post('/login', [UserController::class, 'Login']);
Route::post('/signup', [UserController::class, 'Signup']);

// ✅ Authenticated routes
Route::middleware('auth:sanctum')->group(function () {

    // 🔁 Resend email verification link
    Route::post('/email/resend', function (Request $request) {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email already verified.'], 400);
        }

        $request->user()->sendEmailVerificationNotification();
        return response()->json(['message' => 'Verification email sent.']);
    })->name('verification.send');

    // 🔒 Email protected route
    Route::get('/protected', function () {
        return response()->json(['message' => 'Only for verified users']);
    })->middleware('verified'); // 👈 requires verified email

    // 👋 Logout
    Route::post('/logout', [UserController::class, 'Logout']);
});

// 🔗 Verification link callback (from email)
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill(); // marks user as verified
    return response()->json(['message' => 'Email verified successfully.']);
})->middleware(['auth:sanctum', 'signed'])->name('verification.verify');
