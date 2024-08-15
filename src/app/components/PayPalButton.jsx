"use client"; 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PayPalCheckout({ selectedPackage }) {
    const router = useRouter();
  const [orderID, setOrderID] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // PayPal SDK options
  const paypalOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, // Store your PayPal Client ID in .env.local
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: selectedPackage.name,
          amount: {
            currency_code: "USD",
            value: selectedPackage.price,
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setSuccess(true);
      router.push(`/thankYou`);
    //   console.log("Payment successful!", details);
      // Here you can handle the successful payment, such as showing a confirmation message or redirecting the user.
    });
  };

  const onError = (err) => {
    setError(err);
    console.error("PayPal Checkout onError", err);
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="paypal-button-container  w-96 p-7 pb-0 rounded-3xl border border-white shadow-inner shadow-[black]  bg-white">
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
        {error && <div>Uh oh, an error occurred! {error.message}</div>}
        {success && <div>Payment successful! Thank you for your purchase.</div>}
      </div>
    </PayPalScriptProvider>
  );
}
