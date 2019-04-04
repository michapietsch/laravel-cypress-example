<?php

use Illuminate\Database\Seeder;

class CypressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Some User',
            'email' => 'some_user@example.com',
            'password' => bcrypt('somePassword'),
        ]);
    }
}
