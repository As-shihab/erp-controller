<?php


namespace App\Traits;

use Illuminate\Support\Str;

trait GeneratesCustomId
{
    public static function bootGeneratesCustomId()
    {
        static::creating(function ($model) {
            if (empty($model->custom_id)) {
                $model->custom_id = $model->generateCustomId();
            }
        });
    }

    public function generateCustomId(): string
    {
        // Use custom prefix if defined, fallback to 3 letters from class name
        $prefix = defined('static::CUSTOM_ID_PREFIX')
            ? static::CUSTOM_ID_PREFIX
            : strtoupper(substr(class_basename($this), 0, 3));

        return $prefix . '-' . strtoupper(Str::random(6)); // e.g., USR-8GKHJ2
    }
}
