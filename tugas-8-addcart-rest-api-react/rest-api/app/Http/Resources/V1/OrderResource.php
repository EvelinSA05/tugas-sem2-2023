<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idorderdetail' => $this->idorderdetail,
            // 'idorder' => $this->idorder,
            // 'jumlah' => $this->jumlah,
            'idpelanggan' => $this->idpelanggan,
            'pelanggan' => $this->pelanggan,
            'alamat' => $this->alamat,
            'telp' => $this->telp,
            'idproduct' => $this->idproduct,
            'product' => $this->product,
            'price' => $this->price,
            'category' => $this->category,
        ];
    }
}
