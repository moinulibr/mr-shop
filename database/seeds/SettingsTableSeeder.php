<?php

use App\Setting;
use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

	/**
     * @var array
     */
    protected $settings = [
    	'general' => [
			[
	            'key'                       =>  'site_name',
	            'value'                     =>  'Mr. Shop',
	        ],
	        [
	            'key'                       =>  'site_title',
	            'value'                     =>  'E-Commerce',
	        ],
	        [
	            'key'                       =>  'site_tagline',
	            'value'                     =>  'Awesome E-Commerce Shop',
	            'type'                     	=>  'textarea',
	        ],
	        [
	            'key'                       =>  'default_email_address',
	            'value'                     =>  'admin@mail.com',
	        ],
	        [
	            'key'                       =>  'default_phone',
	            'value'                     =>  '01776217594',
	        ],
	        [
	            'key'                       =>  'site_logo',
	            'value'                     =>  '',
	            'type'						=> 	'logo',
	        ],
	        [
	            'key'                       =>  'site_favicon',
	            'value'                     =>  '',
	            'type'						=> 	'favicon',
	        ],
	        [
	            'key'                       =>  'footer_copyright_text',
	            'value'                     =>  '<span style="font-weight: bolder; color: rgb(134, 144, 153);">Copyright © 2019-2020&nbsp;<a href="#">Mr. Shop</a>.</span><span style="color: rgb(134, 144, 153);">&nbsp;All rights reserved.</span>',
	            'type'						=> 	'wysiwyg',
	        ],
    	],
    	'shop' => [
    		[
	            'key'                       =>  'currency_code',
	            'value'                     =>  'BDT',
	        ],
	        [
	            'key'                       =>  'currency_symbol',
	            'value'                     =>  '৳',
	        ],
	        [
	            'key'                       =>  'stripe_payment_method',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'stripe_key',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'stripe_secret_key',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'paypal_payment_method',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'paypal_client_id',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'paypal_secret_id',
	            'value'                     =>  '',
	        ],
    	],
    	'seo' => [
	        [
	            'key'                       =>  'seo_meta_title',
	            'value'                     =>  '',
	            'type'                     	=>  'textarea',
	        ],
	        [
	            'key'                       =>  'seo_meta_description',
	            'value'                     =>  '',
	            'type'                     	=>  'textarea',
	        ],
	        [
	            'key'                       =>  'google_analytics',
	            'value'                     =>  '',
	            'type'                     	=>  'textarea',
	        ],
	        [
	            'key'                       =>  'facebook_pixels',
	            'value'                     =>  '',
	            'type'                     	=>  'textarea',
	        ],
    	],
    	'social' => [
	       	[
	            'key'                       =>  'social_facebook',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'social_twitter',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'social_instagram',
	            'value'                     =>  '',
	        ],        
	        [
	            'key'                       =>  'social_pinterest',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'social_youtube',
	            'value'                     =>  '',
	        ],
	        [
	            'key'                       =>  'social_vimeo',
	            'value'                     =>  '',
	        ],
    	]
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

		foreach ($this->settings as $group => $values)
        {
        	foreach ($values as $value) {
        		$value['group'] = $group;
        		$result = Setting::create($value);
        		if (!$result) {
	                $this->command->info("Insert failed at $group.");
	                return;
            	}
        	}
        }
        $this->command->info('Settings Inserted Successfully!');
    }
}
