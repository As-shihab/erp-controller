<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: sans-serif; background: #f7f9fc; padding: 20px; }
        .container {
            background: white; padding: 30px; max-width: 500px; margin: auto;
            border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .otp {
            font-size: 32px; color: #1d4ed8; letter-spacing: 8px;
        }
        .footer {
            font-size: 12px; color: #888; margin-top: 20px; text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello,</h2>
        <p>Your One-Time Password (OTP) is:</p>
        <p class="otp">{{ $otp }}</p>
        <p>This code will expire in 5 minutes. Do not share it with anyone.</p>
        <div class="footer">© {{ date('Y') }} {{ config('app.name') }}</div>
    </div>
</body>
</html>
