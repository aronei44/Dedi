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
            return response()->json([
                'success' => false,
                'message' => 'Review could not be created',
            ],500);
        }
    }
    public function getReviews()
    {
        $reviews = Review::with('user')->get();
        return response()->json([
            'success' => true,
            'reviews' => $reviews,
        ],200);
    }
    public function getReview()
    {
        $review = Review::where('user_id', auth()->id())->first();
        return response()->json([
            'success' => true,
            'review' => $review,
        ],200);
    }
}
