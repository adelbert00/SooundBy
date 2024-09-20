<!DOCTYPE html>
<html>
  <head>
    <title>Nowa wiadomość kontaktowa</title>
  </head>
  <body>
    <p>
      <strong>Imię:</strong>
      {{ $name }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ $email }}
    </p>
    <p>
      <strong>Temat:</strong>
      {{ $subject }}
    </p>
    <p><strong>Wiadomość:</strong></p>
    <p>{{ $message }}</p>
  </body>
</html>
