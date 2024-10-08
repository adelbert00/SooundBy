<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('about'); 

Route::get('/samples', function () {
    return Inertia::render('Samples');
})->name('samples');

Route::get('/reels', function () {
    return Inertia::render('DesignReels');
})->name('reels');

Route::get('/musicreels', function () {
    return Inertia::render('MusicReels');
})->name('musicreels');

Route::get('/audio', function () {
    return Inertia::render('Audio');
})->name('audio');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');


Route::post('/contact', [HomeController::class, 'submitContact'])->name('contact.submit');
