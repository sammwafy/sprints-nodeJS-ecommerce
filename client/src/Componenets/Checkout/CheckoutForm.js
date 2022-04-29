/** @format */

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";

import CardSection from "./CardSection";

export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const result = await stripe.confirmCardPayment("{CLIENT_SECRET}", {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: "Jenny Rosen",
				},
			},
		});

		if (result.error) {
			// Show error to your customer (for example, insufficient funds)
			console.log(result.error.message);
		} else {
			// The payment has been processed!
			if (result.paymentIntent.status === "succeeded") {
				console.log("passed");
				// Show a success message to your customer
				// There's a risk of the customer closing the window before callback
				// execution. Set up a webhook or plugin to listen for the
				// payment_intent.succeeded event that handles any business critical
				// post-payment actions.
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardSection />
			<Button type='submit' variant='dark'>
				Check Card
			</Button>
		</form>
	);
}
