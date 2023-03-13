<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $primaryKey = 'idorderdetail';
    protected $fillable = ['idpelanggan', 'pelanggan', 'alamat', 'telp', 'idproduct', 'product', 'price', 'category'];
}
