<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
| Para acessar as rotas de api é necessario adicionar /api/<rota> na URL
|
*/


Route::post('/signup','Auth\RegisterController@signup');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
