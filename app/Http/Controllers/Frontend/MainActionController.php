<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainActionController extends Controller
{
    public function storeReview(Request $request)
    {
        $request->validate([
            'score' => 'required|integer|min:1|max:5',
            'message' => 'required|string|max:255',
        ]);
        try {
            //code...
            Review::create([
                'score' => $request->score,
                'message' => $request->message,
                'user_id' => auth()->id(),
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Review has been created successfully',
            ],201);
        } catch (\Throwable $th) {
            //throw $th;
            // return $th;
            return response()->json([
                'success' => false,
                'message' => 'Review could not be created',
            ],500);
        }
    }
}
