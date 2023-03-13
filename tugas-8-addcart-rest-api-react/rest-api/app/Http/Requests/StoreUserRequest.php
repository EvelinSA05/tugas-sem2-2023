<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
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
            'pelanggan' => ['required', 'min:3', 'max:20'],
            'alamat' => ['required', 'min:3', 'max:255'],
            'telp' => ['required', 'numeric', Rule::unique('users')->ignore($this->user)]
        ];
    }
}
