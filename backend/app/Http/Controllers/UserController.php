<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Mockery\Expectation;

class UserController extends Controller
{

    public function Signup(Request $request)
    {
        try {
            // Validate incoming request
            $validate = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6',
            ]);

            if ($validate->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validate->errors()
                ], 422);
            }

            // Create user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'platform' => $request->platform ? $request->platform : 'AptiGen',
                'password' => Hash::make($request->password),
            ]);

            // Generate API token
            $user_token = $user->createToken('User-Token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'User created successfully',
                'token' => $user_token,
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function Login(Request $request)
    {
        try {
            $validate = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);

            if ($validate->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validate->errors()

                ], 401);
            }

            $user = User::where('email', $request->email)->first();
            if (!$user) {
                return response()->json([
                    'message' => 'User not found'
                ], 401);
            }

            if (!Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message' => 'Password does not match'
                ], 401);
            }

            $token = $user->createToken('auth_token')->plainTextToken;
            $user->login_token = $token;
            $user->login_token_expiry = now()->addDays(7);
            $user->save();
            return response()->json([
                'User_token' => $token,
                'user' => $user
            ]);
        } catch (Expectation $e) {
            return response()->json([
                'message' => 'somthing went wrong',
            ]);
        }
    }

    public function Logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'logout successfully'
        ], 200);
    }

    // ================ OTP Verification Methods ================

    public function SendOtp(Request $request)
    {
        $otp = rand(100000, 999999); // Generate a random 6-digit OTP
        $user = $request->user();
        $user->user_otp = $otp;
        $user->otp_verification_token = now()->addMinutes(10);
        $user->save();

        Mail::to($user->email)->send(new \App\Mail\OtpMail($otp));
        return response()->json(['message' => 'OTP sent successfully']);
    }
}
