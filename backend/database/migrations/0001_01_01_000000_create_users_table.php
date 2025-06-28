<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('email')->unique();
            $table->string('custom_id')->unique()->nullable();
            $table->string('password', 255);
            $table->string('user_otp')->unique()->nullable();
            $table->string('verification_token')->unique()->nullable();
            $table->dateTime('verification_token_expiry')->nullable();
            $table->string('reset_password_token')->unique()->nullable();
            $table->dateTime('reset_password_token_expiry')->nullable();
            $table->boolean('email_verified')->default(false);
            $table->string('email_verification_token')->unique()->nullable();
            $table->dateTime('email_verification_token_expiry')->nullable();
            $table->string('phone_number')->unique()->nullable();
            $table->boolean('phone_number_verified')->default(false);
            $table->string('phone_verification_token')->unique()->nullable();
            $table->dateTime('phone_verification_token_expiry')->nullable();
            $table->string('login_token')->unique()->nullable();
            $table->dateTime('login_token_expiry')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index('email', 'idx_user_email');
        });
    }

    public function down(): void {
        Schema::dropIfExists('users');
    }
};
