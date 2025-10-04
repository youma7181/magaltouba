<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHorairesTable extends Migration
{
    public function up()
    {
        Schema::create('horaires', function (Blueprint $table) {
            $table->id();
            $table->string('evenement');
            $table->string('heure');
            $table->string('lieu');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('horaires');
    }
}