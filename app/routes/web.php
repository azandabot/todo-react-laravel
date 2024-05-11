<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'verified'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [TodosController::class, 'index'])->name('dashboard');
    
    // Todos routes
    Route::get('/todos/create', [TodosController::class, 'create'])->name('todos.create');
    Route::get('/todos/view/{id}', [TodosController::class, 'show'])->name('todos.show');
    Route::get('/todos/edit/{id}', [TodosController::class, 'edit'])->name('todos.edit');
    Route::get('/todos/destroy/{id}', [TodosController::class, 'delete_confirmation'])->name('todos.delete_confirmation');
    
    Route::post('/todos', [TodosController::class, 'store'])->name('todos.store');
    Route::patch('/todos/{id}', [TodosController::class, 'update'])->name('todos.update');
    
    Route::delete('/todos/{id}', [TodosController::class, 'destroy'])->name('todos.destroy');
    Route::delete('/todos/all', [TodosController::class, 'reset'])->name('todos.reset');
    
    // Profile routes
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';