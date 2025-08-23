import React from "react";
import logo from "../assets/logo/logo.png"

function TermsAndCondition() {
    return (
        <div className=" relative max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

            {/* Watermark Logo */}
            <img
                src={logo}
                alt="Mirelo LTD Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 w-64 h-64 pointer-events-none select-none"
            />
            <h1 className="text-3xl font-bold mb-8 text-center">
                Terms and Conditions of Business - Mirelo LTD
            </h1>

            {/* Section 1 - Contract */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. CONTRACT</h2>
                <p className="mb-2">
                    1.1 For the purposes of this contract hereafter Mirelo LTD shall be described as the "Supplier" and the entity placing an order shall be described as the "Customer".
                </p>
                <p className="mb-2">
                    1.2 There can be no variance to these Terms and Conditions of Business (the Contract) whatsoever unless varied by written documentation and signed by an authorised signatory of the Supplier.
                </p>
                <p className="mb-2">
                    1.3 The placing of an order by a Customer shall be deemed acceptance of these Terms in their entirety. Any subsequent verbal orders will be bound by these Terms.
                </p>
            </section>

            {/* Section 2 - Prices */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. PRICES</h2>
                <p className="mb-2">
                    2.1 All prices quoted are exclusive of V.A.T. and are subject to the prevailing rate of V.A.T. at the date of invoice. All prices quoted apply to a specific order only and are subject to change, without prior notification.
                </p>
            </section>

            {/* Section 3 - Delivery */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. DELIVERY</h2>
                <p className="mb-2">
                    3.1 All dates given by the Supplier for delivery are estimated dates only and therefore the Supplier shall incur no liability for any loss or damage whatsoever as a result of a failure to adhere to any such dates nor can any such failure be used as an excuse for non-acceptance of any such delivery.
                </p>
                <p className="mb-2">
                    3.2 The Supplier shall be entitled to make partial deliveries, invoice for goods delivered and expect payment in accordance with their terms of payment.
                </p>
                <p className="mb-2">
                    3.3 It is the Customer's responsibility to inform the Supplier and the Carrier of any discrepancies against the delivery documents i.e., short delivered or damaged goods. Notification of such items must be given in writing to the Supplier and the Carrier within 48 hours from the date of delivery. If it is not possible to examine the goods at the time of delivery then the Carrier's delivery documents must be marked Unexamined. (Time is of the essence of this clause)
                </p>
                <p className="mb-2">
                    3.4 Items notified to the supplier as damaged must be returned within 14 days from the date of notification. All items will only be accepted for refund/credit by the Supplier if they are returned in the original boxes/packaging. (Time is of the essence of this clause)
                </p>
            </section>

            {/* Section 4 - Terms of Payment */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. TERMS OF PAYMENT</h2>
                <p className="mb-2">
                    4.1 All Payments are due no later than thirty days following the month of invoice date. These payment terms shall apply at all times unless varied in writing by an authorised officer of the Supplier.
                </p>
                <p className="mb-2">
                    4.2 All remittances received will be allocated to invoices and credited to the Customers' account in chronological order.
                </p>
                <p className="mb-2">
                    4.3 All amounts overdue for payment due to the Supplier shall, at the Supplier's discretion, bear interest at the rate of 5% per month, compounded, for the period from the date of invoice to the date of settlement. In addition all costs of any recovery action shall be borne by the Customer.
                </p>
                <p className="mb-2">
                    4.4 In the event of the Supplier having any indication of the Customer being unable to settle its accounts as and when they fall due, all amounts due to the Supplier shall become payable in full immediately. The Supplier reserves the right to uplift goods supplied to mitigate amounts due and assess such goods and credit such values as it deems reasonable.
                </p>
            </section>

            {/* Section 5 - Title and Risk */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. TITLE AND RISK</h2>
                <p className="mb-2">
                    5.1 Risk and responsibility for insurance of all items supplied shall pass to the Customer upon delivery within the United Kingdom.
                </p>
                <p className="mb-2">
                    5.2 All goods supplied for destinations outside of the United Kingdom are sold FOB and acceptance by the Shipping Agent on behalf of the Customer shall constitute delivery of the goods, and insurance and risk liability shall pass to the customer at this point.
                </p>
                <p className="mb-2">
                    5.3 Notwithstanding delivery and passing of risk, property in and title to the goods shall remain with the Supplier until full payment of all goods/services supplied under any contract.
                </p>
            </section>

            {/* Section 6 - Warranty */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. WARRANTY</h2>
                <p className="mb-2">
                    6.1 The Supplier warrants that all goods supplied are to the best of their knowledge of merchantable quality and are free from any defects due to materials, design, or workmanship.
                </p>
                <p className="mb-2">
                    6.2 Should the Supplier accept the validity of any claim, liability shall be limited to the replacement or repair of such items. No third-party claims will be entertained.
                </p>
                <p className="mb-2">
                    6.3 The Supplier reserves the right to make alterations in design, colour, finish, or content of the goods sold from samples shown or displayed brochures/catalogues.
                </p>
                <p className="mb-2">
                    6.4 For items made to a Customer's specific request, the Supplier reserves the right to over/under deliver within tolerances of ±20% for orders up to 25 pieces and ±10% for orders over 25 pieces.
                </p>
                <p className="mb-2">
                    6.5 The Supplier reserves the right to refuse supply and/or suspend further deliveries or stop goods in transit without giving a reason.
                </p>
            </section>

            {/* Section 7 - Liability */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. LIABILITY</h2>
                <p className="mb-2">
                    7.1 In the event of insolvency, liquidation, receivership, or bankruptcy, clause 4.4 applies.
                </p>
                <p className="mb-2">
                    7.2 The Supplier has no liability to the Customer for consequential loss due to short, late, or incomplete deliveries or damaged goods.
                </p>
                <p className="mb-2">
                    7.3 The Supplier is not responsible for non-performance due to causes beyond its control, including strikes, lockouts, power disruption, transport/material/fuel shortages, acts of war, or civil disturbance.
                </p>
            </section>

            {/* Section 8 - Cancellation */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. CANCELLATION</h2>
                <p className="mb-2">
                    Should the Customer decide to cancel or change their instructions after placing an order, the Supplier is entitled to invoice as if the order had been fulfilled in its entirety. This entitlement is in addition to other rights conferred upon the Supplier.
                </p>
            </section>

            {/* Section 9 - Law */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. LAW</h2>
                <p className="mb-2">
                    9.1 This agreement is governed by the Laws of England and Wales.
                </p>
            </section>

            {/* Footer */}
            <p className="text-center mt-8 text-gray-500">
                © {new Date().getFullYear()} Mirelo LTD. All rights reserved.
            </p>
        </div>
    );
}

export default TermsAndCondition;
