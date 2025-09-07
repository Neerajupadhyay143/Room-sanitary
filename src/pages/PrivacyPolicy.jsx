import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
    return (
        <div className="flex justify-center px-4 py-8 bg-gray-50">
            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 md:p-10 leading-relaxed text-gray-800 overflow-y-auto">
                {/* Page Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Privacy Policy
                </h1>

                {/* Intro */}
                <p className="font-semibold">
                    At Mirelo Ltd we are committed to protecting and respecting your
                    privacy.
                </p>
                <p className="mt-4">
                    This policy (together with our website terms of use for any website enquiries and our Terms for any Orders and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
                    For the Purpose of the Data Protection Act 2018 (the Act), the data controller is Mirelo Ltd
                </p>

                {/* Section 1 */}
                <h2 className="text-xl font-semibold mt-6">Information we may collect from you</h2>
                <p className="mt-6">We may collect and process the following data about you:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        Information that you provide by filling in forms on our website{" "}
                        <a
                            href="https://www.mirelo.co.uk"
                            className="text-blue-600 underline"
                        >
                            www.mirelo.co.uk
                        </a>{" "}
                        (our site) including registration, subscription, posting material or
                        requesting services.
                    </li>
                    <li>Records of correspondence if you contact us.</li>
                    <li>Survey responses for research purposes (optional participation).</li>
                    <li>Details of your Orders and fulfilment.</li>
                    <li>
                        Full details of your financial assets including account, policy or
                        certificate details where necessary.
                    </li>
                    <li>
                        Details of your visits to our site including traffic data, location
                        data, weblogs, and other communication data.
                    </li>
                </ul>

                {/* Section 2 */}
                <h2 className="text-xl font-semibold mt-6">IP Addresses</h2>
                <p className="mt-2">
                    We may collect information about your computer, including where available your IP address, operating system and browser type, for system administration and to report aggregate information to our advertisers. This is statistical data about our users’ browsing actions and patterns, and does not identify any individual.
                </p>

                {/* Section 3 */}
                <h2 className="text-xl font-semibold mt-6">Cookies</h2>
                <p className="mt-2">
                    For the same reason, we may obtain information about your general internet usage by using a cookie file which is stored on your browser or the hard drive of your computer. Cookies contain information that is transferred to your computer’s hard drive. They help us to improve our site and to deliver a better and more personalised service. Some of the cookies we use are essential for the site to operate. They enable us to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                        To estimate our audience size and usage pattern.{" "}

                    </li>
                    <li>To store information about your preferences, and so allow us to customise our site according to your individual interests.</li>
                    <li>To speed up your searches.</li>
                    <li>To recognise you when you return to our site.</li>
                    <li>
                        Allow you to use our site in a way that makes your browsing experience more convenient. If you register with us or complete our online forms, we will use cookies to remember your details during your current visit and any future visit provided the cookie was not deleted in the interim.
                    </li>

                </ul>
                <p className="mt-2">If you register with us on our site or if you continue to use our site, you agree to our use of cookies.Cookies are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.You block cookies by activating the setting on your browser which allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our site.All cookies used on this website are essential cookies only.</p>
                {/* Section 4 */}
                <h2 className="text-xl font-semibold mt-6">Where we store your personal data</h2>
                <p className="mt-2">
                    The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers. Such staff may be engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
                </p>

                {/* Section 5 */}
                <h2 className="text-xl font-semibold mt-6">Uses made of the Information</h2>
                <p className="mt-6">We do not use the details of your financial assets for any purpose other than for the sole purpose of providing the Services to you.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        To carry out our obligations arising from any contracts entered into between you and us.
                    </li>
                    <li>
                        To provide you with information, products or services that you request from us or which we feel may interest you,
                        where you have consented to be contacted for such purposes.
                    </li>
                    <li>
                        To ensure that content from our site is presented in the most effective manner for you and for your computer.
                    </li>
                    <li>
                        To notify you about changes to our Services or our site.
                    </li>
                    <li>
                        Except as stated in the section headed “Disclosure of your information”, we will never disclose your card details
                        and financial assets to any third party.
                    </li>
                </ul>
                <p className="mt-2">We may use your personal data (not including your card details or information about your financial assets), or permit selected third parties to use your personal (not financial) data, to provide you with information about goods and services which may be of interest to you and we or they may contact you about these by post or telephone.
                    If you are an existing customer, we will only contact you by electronic means (e-mail or SMS) with information about goods and services similar to those which were the subject of a previous sale to you.
                </p>
                <p className="mt-2">
                    If you are a new customer, and where we permit selected third parties to use your data, we (or they) will contact you by electronic means only if you have consented to this.
                    If you do not want us to use your data in this way, or to pass your details on to third parties for marketing purposes, please tick the relevant box situated on the form on which we collect your data (the application form or the site enquiry form).
                </p>

                {/* Section 6 */}
                <h2 className="text-xl font-semibold mt-6">Disclosure of your information</h2>
                <p className="mt-2">
                    We may disclose your personal information to any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006. We will never disclose your payment card details and financial assets to any member of our group.
                </p>
                <p className="mt-6">We may disclose your personal information to third parties:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the
                        prospective seller or buyer of such business or assets. We will only disclose your financial assets to a buyer of our
                        business on completion.
                    </li>
                    <li>
                        If Walking The City or substantially all of its assets are acquired by a third party, in which case personal data held
                        by it about its customers will be one of the transferred assets.
                    </li>
                    <li>
                        If third parties process personal data on our behalf in accordance with the purposes for which the data was originally
                        collected (including the purposes set out in this privacy policy), or for purposes to which you have subsequently
                        consented. For example, sometimes a third party may have access to your personal data in order to support our
                        information technology system or to handle mailings on our behalf. These third parties have access to personal data
                        needed to perform their functions, but may not use it for other purposes.
                    </li>
                    <li>
                        If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in
                        order to enforce or apply our site terms of use or our Terms and other agreements; or to protect the rights, property,
                        or safety of Walking The City, our customers, or others. This includes exchanging information with other companies and
                        organisations for the purposes of fraud protection and credit risk reduction.
                    </li>
                </ul>
                <p className="mt-2">
                    Where appropriate, before disclosing your personal data to a third party, we will endeavour to contractually require the third party to take adequate precautions as well as organisational and security measures to protect that data and to comply with its confidentiality obligations and all applicable law.
                </p>
                {/* Section 7 */}
                <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
                <p className="mt-2">
                    You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us on{" "}
                    <Link to="/contact" className="text-blue-600 underline">
                        info@mirelo.co.uk
                    </Link>{" "}

                </p>
                <p className="mt-2">
                    Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
                </p>
                {/* Section 8 */}
                <h2 className="text-xl font-semibold mt-6">Access to Information</h2>
                <p className="mt-2">
                    The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee of £10 to meet our costs in providing you with details of the information we hold about you.
                </p>

                {/* Section 9 */}
                <h2 className="text-xl font-semibold mt-6">Changes to our Privacy Policy</h2>
                <p className="mt-2">
                    Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail.
                </p>

                {/* Section 10 */}
                <h2 className="text-xl font-semibold mt-6">Contact</h2>
                <p className="mt-2">
                    Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to {" "}
                    <Link to="/contact" className="text-blue-600 underline">
                        info@mirelo.co.uk
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
