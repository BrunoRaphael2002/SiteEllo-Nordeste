// src/components/HeroCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { ArrowRight } from 'lucide-react'
import img1 from '../assets/1.jpg'

const slides = [
  {
    image: img1,
    pretitle: 'Consult Solutions',
    title: 'Administração Profissional de Condomínios',
    subtitle: 'Gestão transparente, eficaz e acessível.'
  },
  {
    image: img1,
    pretitle: 'Inovação Digital',
    title: 'Tecnologia a favor da sua comodidade',
    subtitle: 'Soluções digitais para facilitar o dia a dia do síndico.'
  },
  {
    image: img1,
    pretitle: 'Confiança e Qualidade',
    title: 'Condomínios bem cuidados',
    subtitle: 'Confiança, responsabilidade e compromisso.'
  }
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
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradiente para melhorar contraste no topo */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
              
              {/* Camada escura geral + conteúdo */}
              <div className="w-full h-full bg-black/50 flex items-center">
                <div className="text-white max-w-3xl px-8 md:px-16 pt-20 md:pt-32 relative z-20">
                  <p className="text-sm md:text-base text-white/70 mb-2 uppercase tracking-widest">
                    {slide.pretitle}
                  </p>
                  <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-medium px-6 py-3 rounded-full hover:bg-red-700 transition"
                  >
                    Fale com a gente
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
