import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Carousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollToSlide = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      emblaApi.plugins().forEach(plugin => {
        if (plugin.name === 'Autoplay') {
          plugin.reset();
        }
      });
    }
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`embla__slide relative flex-[0_0_auto] transition-transform duration-300 ease-in-out ${
              selectedIndex === index ? 'scale-105' : 'scale-100'
            }`}
            onClick={() => scrollToSlide(index)}
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="object-cover cursor-pointer w-[29.375rem] h-[37.5rem] max-h-[37.5rem]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;