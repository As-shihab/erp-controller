<?php

return [

    'paths' => ['api/*' ,'odata/*', 'sanctum/csrf-cookie'], // Adjust if needed

    'allowed_methods' => ['*'], // Allow all HTTP methods

    'allowed_origins' => ['*'], // Frontend app URL

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Allow all headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Needed if you're using cookies / sessions

];
