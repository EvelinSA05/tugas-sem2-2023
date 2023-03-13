<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            // 'idorder' => ['required', 'numeric'],
            // 'jumlah' => ['required', 'numeric'],
            'idpelanggan' => ['required', 'numeric'],
            'pelanggan' => ['required', 'min:3', 'max:20'],
            'alamat' => ['required', 'min:3', 'max:20'],
            'telp' => ['required', 'numeric'],
            'idproduct' => ['required', 'numeric'],
            'product' => ['required', 'min:3', 'max:20'],
            'price' => ['required', 'numeric'],
            'category' => ['required', 'min:3', 'max:20'],
        ];
    }
}
