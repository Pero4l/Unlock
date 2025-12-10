"use client";

import Image from "next/image";
import { useState } from "react";
import image from "@/public/basics-of-blockchain-explained-in-easy-terms.webp";
import logo from "@/app/favicon.ico";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function Home() {
  const [isClick, setIsClick] = useState(false);
  const router = useRouter();

  const ref = () => {
    setIsClick(true);
    setTimeout(() => {
      router.push("https://wa.me/4571447586");
    }, 3000);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-bold">

      <div className="flex justify-end pt-3" id="google_translate_element"></div>

      <div className="flex justify-center gap-1 items-center pb-3">
        <Image className="w-9 h-10" src={logo} alt="site logo" />
        <h1 className="text-center text-[23px] font-mono text-blue-400 pt-5">
          UNLOCK YOUR BLOCKCHAIN
        </h1>
      </div>

      <Image className="px-2 md:w-full" src={image} alt="banner" />

      <div className="p-3 font-mono">
        <h1 className="text-center text-xl text-white pb-5 font-serif">Welcome Mr Heinz and Mrs Karianne</h1>

        <p>To unlock your blockchain you'll have to pay the sum of $3000 worth of <span className="text-gray-400">Ethereum(ETH)</span> or <span className="text-green-300">USDT(TRC20)</span> to our company wallet address. When the payment is done successfully, then click on the <em><b className="underline">Payment completed button below</b></em> and then send the transaction screenshot to our whatsapp channel for comfirmation.</p>

        <p>When we comfirm your payment then your withdrawal of $12,000 will be sent to the wallet address you provide.</p>
        <p className="pt-3"><em>Thank you so much for choosing Apex Investment Management as your number one investment platform.</em></p>

        <p className="pt-5 underline">Company wallet address: </p>
       <div className="pt-4">
         <h2 className="text-gray-400">ETHEREUM</h2>
        <span className="text-[13px]">0x3535b244A990Ac7Fbaa4f20313fe9d393F2eD68C</span>
       </div>
        
          <div className="pt-4">
         <h2 className="text-green-300">USDT(TRC20)</h2>
        <span className="text-[13px]">THEoMXnvoUekTioVaxLVJ1CypByMg9ksFn</span>
       </div>

        <div className="flex justify-center pt-9 pb-7"><button onClick={ref} className={`border p-3 ${isClick ? "bg-green-600 hover-bg-green-400" : "bg-gray-600 hover-bg-gray-400"} rounded-xl`}>{isClick ? "Pending comfirmation...": "Payment completed"}</button></div>
    
      </div>

      {/* Load Google Translate Safely */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="gt-init">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          }
        `}
      </Script>
    </div>
  );
}
