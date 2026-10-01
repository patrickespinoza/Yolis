import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

const Regalos = () => {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#080808]
        px-5
        py-24
        sm:px-8
        sm:py-28
      "
    >
      {/* ========================================
          ILUMINACIÓN DE FONDO
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#D5A84B]/[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#D5A84B]/[0.05]
          blur-[120px]
        "
      />

      {/* ========================================
          DESTELLOS
      ======================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[13%]
          text-[#D5A84B]/40
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={17} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[14%]
          right-[8%]
          text-[#D5A84B]/30
        "
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Sparkles size={14} strokeWidth={1} />
      </motion.div>

      {/* ========================================
          CONTENIDO
      ======================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          text-center
        "
      >


        {/* ========================================
            TARJETA LLUVIA DE SOBRES
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            mt-12
            max-w-2xl
            overflow-hidden
            border
            border-[#D5A84B]/45
            bg-[#0D0D0D]
            px-7
            py-14
            shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            sm:px-14
            sm:py-16
          "
        >
          {/* BORDE INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              border
              border-[#D5A84B]/15
            "
          />

          {/* BRILLO SUPERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-[65%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#E4BD6C]
              to-transparent
            "
          />

          {/* ========================================
              SOBRE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mx-auto
              mb-8
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-[#D5A84B]/50
              bg-[#D5A84B]/[0.06]
              text-[#E4BD6C]
              shadow-[0_0_35px_rgba(213,168,75,0.10)]
            "
          >
            <Mail
              size={40}
              strokeWidth={1.1}
            />

            {/* CORAZÓN PEQUEÑO */}

            <div
              className="
                absolute
                -bottom-1
                -right-1
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#D5A84B]/60
                bg-[#0D0D0D]
                text-[#D5A84B]
              "
            >
              <Heart
                size={13}
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* ========================================
              TÍTULO
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p
              className="
                mb-3
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-[#D5A84B]/65
              "
            >
              Nuestro regalo
            </p>

            <h3
              className="
                font-['Playfair_Display']
                text-3xl
                font-normal
                text-[#F1E5CE]
                sm:text-4xl
              "
            >
              Lluvia de Sobres
            </h3>

            <div
              className="
                mx-auto
                my-7
                h-px
                w-14
                bg-[#D5A84B]/45
              "
            />

            {/* TEXTO PRINCIPAL */}

            <p
              className="
                mx-auto
                max-w-lg
                font-['Playfair_Display']
                text-base
                leading-8
                text-[#EEE2CC]/75
                sm:text-lg
                sm:leading-9
              "
            >
              Tu presencia es el mejor regalo para celebrar
              este momento tan especial.
            </p>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                font-['Playfair_Display']
                text-base
                leading-8
                text-[#EEE2CC]/65
                sm:text-lg
                sm:leading-9
              "
            >
              Si deseas tener un detalle, el día de la fiesta
              tendremos
              <span className="text-[#E4BD6C]">
                {" "}sobres disponibles{" "}
              </span>
              para que puedas depositar tu regalo en efectivo.
            </p>
          </motion.div>

          {/* ========================================
              INDICACIÓN
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              max-w-md
              border
              border-[#D5A84B]/25
              bg-black/50
              px-6
              py-6
            "
          >
            <Mail
              size={21}
              strokeWidth={1.3}
              className="
                mx-auto
                mb-4
                text-[#D5A84B]
              "
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#D5A84B]/65
              "
            >
              El día del evento
            </p>

            <p
              className="
                mt-3
                font-['Playfair_Display']
                text-sm
                leading-7
                text-[#F1E5CE]/80
                sm:text-base
              "
            >
              Encontrarás los sobres disponibles en la
              celebración para colocar tu obsequio.
            </p>
          </motion.div>

          {/* ========================================
              FRASE FINAL
          ======================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mt-10
            "
          >
            <Heart
              size={15}
              strokeWidth={1.2}
              className="
                mx-auto
                mb-4
                text-[#D5A84B]/70
              "
            />

            <p
              className="
                font-['Playfair_Display']
                text-sm
                italic
                tracking-wide
                text-[#D5A84B]/65
              "
            >
              Gracias por ser parte de esta celebración
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Regalos;