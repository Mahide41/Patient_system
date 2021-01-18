<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('patients','API\PatientsController');
Route::apiResource('addPatient','API\PatientsController');

Route::get('countpatient','PatientController@countall');
Route::get('limit','PatientController@limit');
Route::get('todayspatients','PatientController@todayspatients');
Route::get('sevendaysdata','PatientController@sevendaysdata');