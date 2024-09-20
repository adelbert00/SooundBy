<?php

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use Inertia\Inertia; 
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function submitContact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:32',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required|max:150',
            'recaptcha' => 'required',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $recaptchaSecret = config('services.recaptcha.secret'); 

        $recaptchaResponse = $request->input('recaptcha');

        $response = file_get_contents(
            "https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}"
        );

        $responseKeys = json_decode($response, true);

        if (!$responseKeys["success"]) {
            return back()->withErrors(['recaptcha' => 'reCAPTCHA verification failed.'])->withInput();
        }


        $data = $request->only(['name', 'email', 'subject', 'message']);

        Mail::send('emails.contact', $data, function($message) use ($data) {
            $message->to('contact@sounddesign.com', 'Wojciech Faber')
                    ->subject($data['subject']);
        });

        return back()->with('success', 'Dziękujemy za przesłanie wiadomości! Skontaktujemy się z Tobą wkrótce.');
    }
}
