<?php

namespace App\Console\Commands;

use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
class testcmd extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = Str::random (8);
        $pass = Str::random(12);
        User :: create([
            'name' => $name,
            'email' => $name .'@gmail.com',
            'password' => $pass,

        ]);
        $this->info('Successefully created');
    }
}
