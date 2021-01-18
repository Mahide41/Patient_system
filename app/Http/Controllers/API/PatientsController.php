<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Patients;
use Illuminate\Http\Request;

class PatientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all patients data
        $patients = Patients::orderBy('id', 'desc')->get();

        return response()->json([
            'success'   => true,
            'message'   => "Patients List",
            'data'      => $patients
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name'          => 'required',
            'gender'        => 'required',
            'dateofbirth'   => 'required',
            'bloodgroup'    => 'required',
            'phone'         => 'required',
            'email'         => 'required',
            'address'       => 'required',
        ],[
            'name'          => 'Name is required',
            'gender'        => 'Gender is required',
            'dateofbirth'   => 'Date of Birth is required',
            'bloodgroup'    => 'Blood Group is required',
            'phone'         => 'Phone is required',
            'email'         => 'Email is required',
            'address'       => 'Address is required',
        ]);

        if($validator->fails()){
            return response()->json([
                'success'   => false,
                'message'   => $validator->getMessageBag()->first(),
            ]);
        }

        $patients =  new Patients();
        $patients->name         = $request->name;
        $patients->gender       = $request->gender;
        $patients->dateofbirth  = $request->dateofbirth;
        $patients->blood_group  = $request->bloodgroup;
        $patients->phone        = $request->phone;
        $patients->email        = $request->email;
        $patients->address      = $request->address;
        $patients->save();

        return response()->json([
            'success'   => true,
            'message'   => "Patient Added",
            'data'      => $patients
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //getall data
        $patients = Patients::find($id);
        return response()->json([
            'success'   => true,
            'message'   => "Patients List",
            'data'      => $patients
        ]);;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
