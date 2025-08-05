import React from 'react';

const brochureItems = [
    {
        id: 1,
        title: 'Tiles Brochure',
        imageUrl: '/path/to/tiles-brochure-image.jpg',
        pdfUrl: '/tiles-brochure.pdf'
    },
    {
        id: 2,
        title: 'Latest Brochure Edition 6',
        imageUrl: '/path/to/edition6-cover.jpg',
        pdfUrl: '/edition6.pdf'
    },
    {
        id: 3,
        title: 'Radiator Brochure',
        imageUrl: '/path/to/radiator-brochure.jpg',
        pdfUrl: '/radiator-brochure.pdf'
    }
];

const BrochurePage = () => (
    <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white py-8">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-semibold">Brochure</h1>
                <p className="text-gray-500 mt-2">Home &raquo; Brochure</p>
            </div>
        </header>

        {/* Brochure Items */}
        <main className="flex-grow container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {brochureItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <p className="text-lg font-medium">{item.title}</p>
                            <button className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Download
                            </button>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    </div>
);

export default BrochurePage;
