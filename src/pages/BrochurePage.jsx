import React from 'react';
import logo from "../assets/logo/logo.png"
import DownloadPDF from "../assets/downloaded_PDF/Brochure.pdf"

const brochureItems = [
    {
        title: 'Mirelo Bathrooms',
        description:
            'At Mirelo Bathrooms, we specialize in delivering premium, stylish, and functional bathroom solutions designed to elevate your space. From innovative fittings to elegant fixtures, our products are crafted with quality and durability in mind. Discover how Mirelo can transform your bathroom into a space of comfort and luxury.',
        image: logo,
    },
];


const BrochurePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gray-700 text-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Brochure
                        </h1>
                    </div>
                </div>
            </div>

            {/* Brochure Items */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid gap-10 justify-center items-center md:grid-cols-3">
                    {brochureItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-contain"
                            />
                            <div className="p-6 w-full">
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-600 mb-4">{item.description}</p>

                                {/* Download PDF Button */}
                                <a
                                    href={DownloadPDF}
                                    download
                                    className=" bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors text-sm w-full"
                                >
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BrochurePage;
