<?php

namespace App\Providers;

use Flat3\Lodata\Facades\Lodata;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // \Lodata::discover(\App\Models\User::class);

    }

}
