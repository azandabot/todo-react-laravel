<?php

namespace App\Http\Controllers;

use App\Models\Todos;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
    public function index(Request $request)
    {
        $todos = Todos::select('id', 'title', 'created_at_date')
            ->where('user_id', $request->user()->id)
            ->where('active', 'Y')
            ->orderBy('created_at_date', 'desc')
            ->get()
            ->groupBy('created_at_date');

        return Inertia::render('Dashboard', [
            'todos' => $todos
        ]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Todos/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id, Request $request)
    {
        $todos = Todos::select('title', 'body')
                    ->where('id', $id)
                    ->where('user_id', $request->user()->id)
                    ->where('active', 'Y')
                    ->get();
        
        return Inertia::render('Todos/Multi', [
            'disabled' => 'true',
            'placeholders' => $todos,
            'disabled' => true,
            'action' => 'View',
            'title' => 'View Todo'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $todos = Todos::select()->where('id', $id);
        
        return Inertia::render('Todos/Multi', [
            'disabled' => 'true',
            'placeholders' => $todos,
            'disabled' => false,
            'action' => 'Edit',
            'title' => 'Edit Todo'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todos $todos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todos $todos)
    {
        //
    }
    
    public function delete_confirmation()
    {
        //
    }
    
    public function reset()
    {
        //
    }
}