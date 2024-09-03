<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    @vite('resources/js/app.js')
    @inertiaHead
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
  @inertia

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>