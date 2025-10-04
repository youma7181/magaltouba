<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pelerin;

class PelerinController extends Controller
{
    // Lister tous les pèlerins
    public function index()
    {
        return response()->json(Pelerin::all());
    }

    // Créer un nouveau pèlerin
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email|unique:pelerins,email',
            'telephone' => 'required|string|max:20',
        ]);

        $pelerin = Pelerin::create($request->all());
        return response()->json($pelerin, 201);
    }

    // Afficher un pèlerin par son id
    public function show($id)
    {
        $pelerin = Pelerin::find($id);
        if (!$pelerin) {
            return response()->json(['message' => 'Pèlerin non trouvé'], 404);
        }
        return response()->json($pelerin);
    }

    // Modifier un pèlerin
    public function update(Request $request, $id)
    {
        $pelerin = Pelerin::find($id);
        if (!$pelerin) {
            return response()->json(['message' => 'Pèlerin non trouvé'], 404);
        }

        $pelerin->update($request->all());
        return response()->json($pelerin);
    }

    // Supprimer un pèlerin
    public function destroy($id)
    {
        $pelerin = Pelerin::find($id);
        if (!$pelerin) {
            return response()->json(['message' => 'Pèlerin non trouvé'], 404);
        }

        $pelerin->delete();
        return response()->json(['message' => 'Pèlerin supprimé']);
    }
}