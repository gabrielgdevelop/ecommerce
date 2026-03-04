<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductosController;

// ENDPOINT: Usuarios
Route::get('/user', function (Request $request) {
    return response()->json(['data' => 'chao']);
});

// ENDPOINT: Productos
Route::apiResource('/productos', ProductosController::class);
