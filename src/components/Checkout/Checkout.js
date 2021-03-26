import React from "react";
import GooglePayButton from "@google-pay/button-react";

const Checkout = ({ subtotal }) => {
	// console.log(subtotal.raw);
	const price = "" + subtotal.raw;
	return (
		<React.Fragment>
			<GooglePayButton
				environment="TEST"
				paymentRequest={{
					apiVersion: 2,
					apiVersionMinor: 0,
					allowedPaymentMethods: [
						{
							type: "CARD",
							parameters: {
								allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
								allowedCardNetworks: ["MASTERCARD", "VISA"],
							},
							tokenizationSpecification: {
								type: "PAYMENT_GATEWAY",
								parameters: {
									gateway: "example",
									gatewayMerchantId: "exampleGatewayMerchantId",
								},
							},
						},
					],
					merchantInfo: {
						merchantId: "12345678901234567890",
						merchantName: "Demo Merchant Shubham",
					},
					transactionInfo: {
						totalPriceStatus: "FINAL",
						totalPriceLabel: "Total",
						totalPrice: price,
						currencyCode: "USD",
						countryCode: "US",
					},
					shippingAddressRequired: true,
					callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
				}}
				onLoadPaymentData={(paymentRequest) => {
					console.log("Success", paymentRequest);
				}}
				onPaymentAuthorized={(paymentData) => {
					console.log("Payment Authorised Success", paymentData);
					return { transactionState: "SUCCESS" };
				}}
				onPaymentDataChanged={(paymentData) => {
					console.log("On Payment Data Changed", paymentData);
					return {};
				}}
				existingPaymentMethodRequired="false"
				buttonColor="black"
				buttonType="Buy"
			/>
		</React.Fragment>
	);
};

export default Checkout;
