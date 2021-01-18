<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patients;
use Carbon\Carbon;

class PatientController extends Controller
{
    //count patients 
    public function countall()
    {
      $patients = Patients::count();
      return response()->json([
        'success'   => true,
        'message'   => "Total Patients",
        'data'      => $patients
    ]);
    }


    //get all patients data
    public function limit()
    {
         $patients = Patients::limit(5)->orderBy('id', 'desc')->get();

         return response()->json([
             'success'   => true,
             'message'   => "Patients List",
             'data'      => $patients
         ]);
    }

    //get all patients data
    public function todayspatients()
    {
          $patients = Patients::whereDate('created_at', Carbon::today())->count();

          return response()->json([
              'success'   => true,
              'message'   => "Todays list",
              'data'      => $patients
          ]);
    }

    // Week data
    public function sevendaysdata()
    {
        $date = \Carbon\Carbon::today()->subDays(7);
        $patients = Patients::where('created_at','>=',$date)->count();

          return response()->json([
              'success'   => true,
              'message'   => "Todays list",
              'data'      => $patients
          ]);
    }
}
