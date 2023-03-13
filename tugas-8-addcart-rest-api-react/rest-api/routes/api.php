<?php

use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\DummyController;
use App\Http\Controllers\Api\V1\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('skills', SkillController::class);
});

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('users', UserController::class);
});

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('dummies', DummyController::class);
});

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('orders', OrderController::class);
});
