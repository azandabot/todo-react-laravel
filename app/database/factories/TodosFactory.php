<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Todos;
use App\Models\User;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todos>
 */
class TodosFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    

    public function definition(): array
    {
        // Generate random dates until a date with no record is found
        do {
            $randomDate = $this->generateRandomDate();
        } while ($this->dateExistsInDatabase($randomDate));

        return [
            'user_id' => User::where('name', 'Admin')->firstOrFail()->id,
            'title' => $this->faker->text(30),
            'body' => $this->faker->text(200),
            'created_at_date' => $randomDate->format('Y-m-d'),
        ];
    }

    private function generateRandomDate(): Carbon
    {
        // Generate random dates
        $today = Carbon::today();
        $yesterday = Carbon::yesterday();
        $threeDaysAgo = Carbon::now()->subDays(3);
        $oneWeekAgo = Carbon::now()->subWeek();
        $lastMonth = Carbon::now()->subMonth();

        // Randomly select one of the generated dates
        return $this->faker->randomElement([$today, $yesterday, $threeDaysAgo, $oneWeekAgo, $lastMonth]);
    }

    private function dateExistsInDatabase(Carbon $date): bool
    {
        // Check if a record with the given date exists in the database
        return Todos::whereDate('created_at_date', $date->toDateString())->exists();
    }

}