<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function donaturs()
    {
        return $this->hasMany(Donatur::class);
    }

    public function withdraw()
    {
        return $this->hasMany(Withdraw::class);
    }
}