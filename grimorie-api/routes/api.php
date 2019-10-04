<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

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

Route::post('/cadastro',function (Request $request){

    $data = $request->all();
    $validator = Validator::make($data, [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    if($validator->fails()){
        return $validator->errors();
    }

    $user = User::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'password' => bcrypt($request['password']),
    ]);
    $user->token = $user->createToken($user->email)->accessToken;

    return $user;
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
