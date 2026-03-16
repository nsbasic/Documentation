<?php
// Set to approprate path on your system
require '/usr/home/nsbasic/scripts/stripe/vendor/autoload.php';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("*** put your key here ***");

// Create the charge on Stripe's servers - this will charge the user's card
try {
  $stripe = \Stripe\Charge::create(array(
    "amount" => $_POST['amount'],
    "currency" => 'usd',
    "description" => $_POST['description'],
    "source" => $_POST['id']
  ));
} catch(\Stripe\Error\Card $e) {
  echo "Declined.";
  die();
}