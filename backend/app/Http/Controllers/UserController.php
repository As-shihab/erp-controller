<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Mockery\Expectation;

class UserController extends Controller
{
    public function Signup(Request $request)
    {
        try {


            $validate = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required',
            ]);

            if ($validate->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validate->errors()

                ], 401);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            $user_token = $user->createToken;

            return response()->json([
                'message' => 'user created successfully',
                'token' => $user_token
            ]);
        } catch (Expectation $e) {
            return response()->json([
                'message' => 'somthing went wrong',

            ], 401);
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

            $user = User::where('email', $request->email)->firstOrFail();

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

            return response()->json([
                'access_token' => $token,
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
}
