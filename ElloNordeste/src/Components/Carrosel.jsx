// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  { image: '/images/hero1.jpg', title: 'Administração Profissional de Condomínios', subtitle: 'Gestão transparente, eficaz e acessível.' },
  { image: '/images/hero2.jpg', title: 'Tecnologia a favor da sua comodidade', subtitle: 'Soluções digitais para facilitar o dia a dia do síndico.' },
  { image: '/images/hero3.jpg', title: 'Condomínios bem cuidados', subtitle: 'Confiança, responsabilidade e compromisso.' }
]

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000 }}
        effect="fade"
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                <a
                  href="#contato"
                  className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-all"
                >
                  Fale com a gente
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
