import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getClientSecret, updateBooking } from "../../APIs/bookingsAPI";
import { updateProduct } from "../../APIs/productsAPI";
import GlobalLoader from "../../ui/GlobalLoader";

const CheckOutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [successCard, setSuccessCard] = useState(false);

  console.log(booking);

  const queryClient = useQueryClient();

  //   for updating product
  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      queryClient.invalidateQueries({ queryKey: ["categoryProducts"] });
      queryClient.invalidateQueries({ queryKey: ["addvertiseProduct"] });
    },
  });

  // updating boooking

  const { mutate: purchased, isLoading: isPurchasing } = useMutation({
    mutationFn: updateBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrder"] });
    },
  });

  // getting client secret

  const { mutate, data: clientSecret } = useMutation({
    mutationFn: getClientSecret,
  });

  useEffect(() => {
    mutate({ price: 10 });
  }, [mutate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card == null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) setCardError(error);
    else setCardError("");

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "name",
            email: "email@email.com",
          },
        },
      });

    console.log(paymentIntent);

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // store payment info in the database
      const payment = {
        price: booking.price,
        transactionId: paymentIntent.id,
        email: booking.email,
        bookingId: booking.id,
      };
      purchased({ id: booking.id, data: payment });
      update({ id: booking.productId, data: { status: "sold" } });
      setTransactionId(payment.transactionId);
      setSuccess("Payment successfully completed");

      setProcessing(false);
      setSuccessCard(true);
      toast.success("payment completed successfully");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[96%] sm:w-[30em] mx-auto p-5 shadow shadow-neutral rounded"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {successCard && (
        <div className="w-[96%] sm:w-[30em] mx-auto p-5 shadow shadow-neutral rounded">
          <p className="text-error">{cardError}</p>
          {success && (
            <div>
              <p className="text-success">{success}</p>
              <p>
                Your transactionId:{" "}
                <span className="font-bold">{transactionId}</span>
              </p>
            </div>
          )}
        </div>
      )}
      {(isPurchasing || isUpdating) && <GlobalLoader />}
    </>
  );
};

export default CheckOutForm;
