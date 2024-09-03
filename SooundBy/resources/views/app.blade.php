<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    @vite('resources/js/app.js')
    @inertiaHead
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
  @inertia

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>