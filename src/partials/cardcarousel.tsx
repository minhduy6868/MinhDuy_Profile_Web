import React from 'react';

// Định nghĩa kiểu cho slide
interface Slide {
  image: string;
  title: string;
  description: string;
}

// Nhận dữ liệu từ props
interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-3 relative">
      <div className="w-96 mx-auto" style={{ scrollSnapType: 'x mandatory' }}>
        {slides.map((slide, index) => (
          <div key={index}>
            <input className="sr-only peer" type="radio" name="carousel" id={`carousel-${index + 1}`} defaultChecked={index === 0} />
            
            <div className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <img className="rounded-t-lg w-96 h-64" src={slide.image} alt={slide.title} />
              <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">{slide.title}</h1>
                <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">{slide.description}</p>
              </div>

              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label htmlFor={`carousel-${index === 0 ? slides.length : index}`} className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                  </svg>
                </label>
                <label htmlFor={`carousel-${index === slides.length - 1 ? 1 : index + 2}`} className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce">
        <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
      </a>
    </div>
  );
};

export default Carousel;
