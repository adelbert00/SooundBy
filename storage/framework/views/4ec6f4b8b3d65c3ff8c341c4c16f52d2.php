<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
    <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js']); ?>
</head>
<body>
  <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>

    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
</body>
</html><?php /**PATH C:\Users\tazor\Documents\GitHub\SooundBy\SooundBy\resources\views/app.blade.php ENDPATH**/ ?>