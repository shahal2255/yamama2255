import React, { useState } from 'react';
import { Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0e0f14] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Moments &amp; Flavours
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Yamama Shawaya Gallery
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            A glimpse into our freshly grilled dishes, chilled beverages, and restaurant atmosphere.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-900/60 cursor-pointer shadow-lg transition-all duration-300"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Hover overlay with caption & zoom icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900/80 border border-zinc-700 transition-colors z-50 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-zinc-900/80 hover:bg-red-600 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center border border-zinc-700"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-zinc-900/80 hover:bg-red-600 transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center border border-zinc-700"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative"
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={GALLERY_ITEMS[selectedImageIndex].image}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-6 bg-[#121319] border-t border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  {GALLERY_ITEMS[selectedImageIndex].category}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h4>
                <p className="text-sm text-zinc-300 mt-1">
                  {GALLERY_ITEMS[selectedImageIndex].caption}
                </p>
              </div>
              <span className="text-xs text-zinc-500 font-mono tabular-nums whitespace-nowrap">
                {selectedImageIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
