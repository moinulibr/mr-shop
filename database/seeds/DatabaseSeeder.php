<?php

use Illuminate\Database\Seeder;
use App\Brand;
use App\Size;
use App\Category;
use App\Image;

use App\Product;
use App\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // factory(Brand::class, 20)->create();
        // $this->call(SizesTableSeeder::class);
        // factory(Category::class, 10)->create();
        // factory(Image::class, 10)->create();


		// factory(Product::class, 100)->create()->each(function ($product) {
  //           $product->images()->save(Image::all()->random());
  //           $product->categories()->save(Category::all()->random());
  //           $product->sizes()->save(Size::all()->random());
  //       });

        // factory(Post::class, 20)->create()->each(function ($post) {
        //     $post->images()->save(Image::all()->random());
        //     $post->categories()->save(Category::all()->random());
        // });


    }
}
