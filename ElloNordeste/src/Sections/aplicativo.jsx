import appImg1 from "../assets/4.jpg"; // imagem dos celulares
import { motion } from "framer-motion";

export default function AppSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#3a8ed2] to-[#3b127c] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Imagem dos celulares */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={appImg1} alt="Aplicativo" className="max-w-xs md:max-w-md" />
        </motion.div>

        {/* Texto + Botões */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Segunda via de boletos pelo app
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Reduza as solicitações por segunda via de boletos, dando autonomia ao condômino para que ele visualize pelo celular e pague diretamente pelo aplicativo do seu banco.
          </p>

          {/* Botões das lojas */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
