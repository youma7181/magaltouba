<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PelerinController;
use App\Http\Controllers\Api\HoraireController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\PointInteretController;

// Routes API pour chaque entité
Route::apiResource('pelerins', PelerinController::class);
Route::apiResource('horaires', HoraireController::class);
Route::apiResource('notifications', NotificationController::class);
Route::apiResource('pointinterets', PointInteretController::class);