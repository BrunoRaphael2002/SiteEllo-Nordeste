import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="bg-white py-20 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Onde Estamos
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        Av. Maria Rosa, 1458 - Manaíra, João Pessoa - PB, 58038-461
        </motion.p>

        <motion.div
          className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-200 mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            title="Localização no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.201929677632!2d-34.84216112587316!3d-7.102580669636492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd10e3512321%3A0xc27c36dd136b23cc!2sEllo%20Administra%C3%A7%C3%A3o%20de%20Condom%C3%ADnios!5e0!3m2!1spt-BR!2sbr!4v1765527577417!5m2!1spt-BR!2sbr" 
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          
        </motion.div>
      </div>
    </section>
  );
}
