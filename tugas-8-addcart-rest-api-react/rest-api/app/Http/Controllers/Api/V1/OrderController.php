<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\V1\OrderCollection;
use App\Http\Resources\V1\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    public function index()
    {
        return OrderResource::collection(Order::all());
    }

    public function show(Order $order)
    {
        return new OrderResource($order);
    }

    public function store(StoreOrderRequest $request)
    {
        Order::create($request->validated());
        return response()->json("Order Created");
    }

    public function update(StoreOrderRequest $request, Order $order)
    {
        $order->update($request->validated());
        return response()->json("Order Updated");
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json("Order Deleted");
    }
}
