<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Welcome'));

Route::get('/about', fn () => Inertia::render('About'));

Route::get('/services', fn () => Inertia::render('Services'));
Route::get('/services/{slug}', fn () => Inertia::render('Services'));

Route::get('/partners', fn () => Inertia::render('Partners'));
Route::get('/partners/{slug}', fn () => Inertia::render('Partners'));

Route::get('/activities', fn () => Inertia::render('Activities'));

Route::get('/information', fn () => Inertia::render('Information'));

Route::get('/contact', fn () => Inertia::render('Contact'));

Route::get('/design-system', fn () => Inertia::render('DesignSystem'));
Route::get('/ui-kit', fn () => Inertia::render('DesignSystem'));

Route::get('/login', fn () => Inertia::render('Login'))->name('login');
