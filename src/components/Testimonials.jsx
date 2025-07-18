// import React from 'react';

// const testimonials = [
//   {
//     name: 'Sooraj Negi',
//     title: 'Seo at Mezzotint',
//     // image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     feedback:
//       'Ankit is a dedicated developer who delivers quality code. His React and UI skills are impressive, and he’s always ready to take on new challenges.',
//   },
//   {
//     name: 'Dibyanshu Sinha',
//     title: 'Lead software engineer at PayPal',
//     // image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     feedback:
//       'I had the pleasure of working with Ankit during a client project. His professionalism, problem-solving skills, and punctuality really stood out.',
//   },
//   {
//     name: 'sidit Srivastava',
//     title: 'AI software engineer at WeBuildTech',
//     image: 'https://randomuser.me/api/portraits/men/76.jpg',
//     feedback:
//       'Great experience collaborating with Ankit! He brings ideas to life with clean, responsive layouts and pixel-perfect attention to detail.',
//   },
//    {
//     name: 'sidit Srivastava',
//     title: 'AI software engineer at WeBuildTech',
//     image: 'https://randomuser.me/api/portraits/men/76.jpg',
//     feedback:
//       'Great experience collaborating with Ankit! He brings ideas to life with clean, responsive layouts and pixel-perfect attention to detail.',
//   },
//    {
//     name: 'sidit Srivastava',
//     title: 'AI software engineer at WeBuildTech',
//     image: 'https://randomuser.me/api/portraits/men/76.jpg',
//     feedback:
//       'Great experience collaborating with Ankit! He brings ideas to life with clean, responsive layouts and pixel-perfect attention to detail.',
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-12 bg-gray-50" id="testimonials">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-12">Testimonials</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
//             >
//               <div className="flex items-center justify-center mb-4 space-x-4">
//                 {/* <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-14 h-14 rounded-full object-cover border-2 border-indigo-600"
//                 /> */}
//                 <div className="text-center">
//                   <h4 className="text-lg font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-sm text-gray-500">{testimonial.title}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 “{testimonial.feedback}”
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
   {
    name: 'Sooraj Negi',
    title: 'Seo at Mezzotint',
    // image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'Ankit is a dedicated developer who delivers quality code. His React and UI skills are impressive, and he’s always ready to take on new challenges.',
  },
  {
    name: 'Dibyanshu Sinha',
    title: 'Lead software engineer at PayPal',
    // image: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'I had the pleasure of working with Ankit during a client project. His professionalism, problem-solving skills, and punctuality really stood out.',
  },
  {
    name: 'sidit Srivastava',
    title: 'AI software engineer at WeBuildTech',
    // image: 'https://randomuser.me/api/portraits/men/76.jpg',
    feedback:
      'Great experience collaborating with Ankit! He brings ideas to life with clean, responsive layouts and pixel-perfect attention to detail.',
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-black" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Testimonials</h2>

        <Swiper
       className="hide-swiper-arrows-mobile"
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={30}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-black p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500"
                  /> */}
                </div>
                <p className="text-gray-700 dark:text-white italic text-lg mb-4">“{testimonial.feedback}”</p>
                <h4 className="text-xl font-semibold text-indigo-700">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 pb-2">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

