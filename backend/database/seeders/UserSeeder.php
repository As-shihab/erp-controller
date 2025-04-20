<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         User::create([
            'name' => 'As Shihab',
            'email' => 'study.shihab@gmail.com',
            'password' => bcrypt('As@123456'),
        ]);
        
    }
}
