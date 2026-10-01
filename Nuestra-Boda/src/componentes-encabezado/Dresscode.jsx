import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  Check,
} from "lucide-react";

const Vestimenta = () => {
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
          -right-40
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
          left-[9%]
          top-[15%]
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
          bottom-[15%]
          right-[9%]
          text-[#D5A84B]/30
        "
        animate={{
          opacity: [0.2, 0.75, 0.2],
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
        {/* ENCABEZADO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <p
            className="
              mb-4
              text-[10px]
              uppercase
              tracking-[0.42em]
              text-[#D5A84B]/75
              sm:text-xs
            "
          >
            Detalles de la celebración
          </p>

          <h2
            className="
              font-['Playfair_Display']
              text-4xl
              font-normal
              text-[#E4BD6C]
              sm:text-5xl
              md:text-6xl
            "
          >
            Código de Vestimenta
          </h2>

          {/* DIVISOR */}

          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-[260px]
              items-center
              justify-center
              gap-3
            "
          >
            <div
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#D5A84B]/60
              "
            />

            <span className="text-[8px] text-[#D5A84B]">
              ◆
            </span>

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#D5A84B]/60
              "
            />
          </div>
        </motion.div>

        {/* ========================================
            TARJETA
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
            px-6
            py-12
            shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            sm:px-12
            sm:py-14
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
              ICONO
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
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mx-auto
              mb-7
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[#D5A84B]/50
              bg-[#D5A84B]/[0.06]
              text-[#E4BD6C]
              shadow-[0_0_30px_rgba(213,168,75,0.10)]
            "
          >
            <Shirt
              size={31}
              strokeWidth={1.2}
            />
          </motion.div>

          {/* ========================================
              FORMAL
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
              Vestimenta
            </p>

            <h3
              className="
                font-['Playfair_Display']
                text-4xl
                font-normal
                text-[#F1E5CE]
                sm:text-5xl
              "
            >
              Formal
            </h3>

            {/* DIVISOR PEQUEÑO */}

            <div
              className="
                mx-auto
                my-7
                h-px
                w-14
                bg-[#D5A84B]/45
              "
            />

            <p
              className="
                mx-auto
                max-w-md
                font-['Playfair_Display']
                text-[15px]
                leading-7
                text-[#EEE2CC]/65
                sm:text-base
                sm:leading-8
              "
            >
              Acompáñanos con un estilo elegante para celebrar
              juntos esta noche tan especial.
            </p>
          </motion.div>

          {/* ========================================
              COLOR NEGRO
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              max-w-sm
              border
              border-[#D5A84B]/25
              bg-black
              px-6
              py-7
            "
          >
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#D5A84B]/65
              "
            >
              Color
            </p>

            

            <p
              className="
                font-['Playfair_Display']
                text-2xl
                text-[#E4BD6C]
              "
            >
              Negro
            </p>
          </motion.div>

          {/* ========================================
              FRASE FINAL
          ======================================== */}

          <motion.p
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
              mt-9
              font-['Playfair_Display']
              text-sm
              italic
              tracking-wide
              text-[#D5A84B]/60
            "
          >
            Elegancia para una noche inolvidable
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vestimenta;