<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Productos::orderBy('id', 'desc')->get();

        return response()->json(['data' => $productos], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $datos_productos = $request->all();
        
        Productos::create($datos_productos);
        return response()->json(['message' => 'Producto creado correctamente'], 201);

    }   

    /**
     * Display the specified resource.
     */
    public function show(Productos $productos)
    {

        $producto = Productos::find($productos->id);

        return response()->json(['data' => $producto], 200);
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Productos $productos)
    {
        
        $datos_productos = $request->except(['_token', '_method']);

        $productos->update($datos_productos);
        $productos->save();

        return response()->json(['message' => 'Producto actualizado correctamente'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Productos $productos)
    {
        $productos->delete();

        return response()->json(['message' => 'Producto eliminado correctamente'], 200);
    }
}
