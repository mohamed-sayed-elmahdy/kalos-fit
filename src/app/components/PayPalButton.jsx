import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ packageDetails }) => {
  const myOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    components: "buttons",
    currency: "USD",
  };

  const units = [
    {
      reference_id: packageDetails.name,
      amount: { value: packageDetails.price.toFixed(2) },
    },
  ];

  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider options={myOptions}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: units,
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={async (data, actions) => {
            return actions.order.capture().then(() => {
              router.push("/success");
            });
          }}
          onError={(err) => {
            console.error("PayPal Checkout onError", err);
          }}
          onCancel={() => {
            // Handle cancellation here
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalButton;
