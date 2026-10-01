import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Galeria = () => {
  const images = [
    "/carrusel03.jpg",
    "/carrusel02.jpg",
    "/carrusel01.jpg",
    "/carrusel04.jpg",
  ];

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#F2E9DA]
        px-5
        py-24
        sm:px-8
        sm:py-28
      "
    >
      {/* ========================================
          DECORACIÓN DE FONDO
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C99A3D]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C99A3D]/10
          blur-[120px]
        "
      />

      {/* DESTELLOS */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[10%]
          text-[#B8862E]/35
        "
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.85, 1.1, 0.85],
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
          bottom-[10%]
          right-[8%]
          text-[#B8862E]/30
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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ========================================
            ENCABEZADO
        ======================================== */}

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
          className="mb-12 text-center sm:mb-16"
        >


          <h2
            className="
              font-['Playfair_Display']
              text-4xl
              font-normal
              text-[#17130D]
              sm:text-5xl
              md:text-6xl
            "
          >
            Recuerdos
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
                to-[#B8862E]/70
              "
            />

            <span className="text-[8px] text-[#B8862E]">
              ◆
            </span>

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#B8862E]/70
              "
            />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              font-['Playfair_Display']
              text-[15px]
              italic
              leading-7
              text-[#17130D]/60
              sm:text-base
            "
          >
            Una vida se construye con momentos que merecen
            ser recordados.
          </p>
        </motion.div>

        {/* ========================================
            GALERÍA
        ======================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-2
            gap-3
            sm:gap-5
            lg:grid-cols-12
            lg:grid-rows-2
          "
        >
          {/* ========================================
              FOTO 1 - PRINCIPAL
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              col-span-2
              overflow-hidden
              border
              border-[#B8862E]/40
              bg-[#FAF6ED]
              p-[5px]
              shadow-[0_20px_45px_rgba(69,47,17,0.12)]

              lg:col-span-7
              lg:row-span-2
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[9px]
                z-20
                border
                border-[#D8B66A]/25
              "
            />

            <div className="relative h-[390px] overflow-hidden sm:h-[560px] lg:h-[650px]">
              <img
                src={images[0]}
                alt="Recuerdo especial"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              {/* degradado inferior */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[35%]
                  bg-gradient-to-t
                  from-black/35
                  to-transparent
                "
              />
            </div>
          </motion.div>

          {/* ========================================
              FOTO 2
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#B8862E]/35
              bg-[#FAF6ED]
              p-[4px]
              shadow-[0_15px_35px_rgba(69,47,17,0.10)]

              lg:col-span-5
            "
          >
            <div className="h-[230px] overflow-hidden sm:h-[310px]">
              <img
                src={images[1]}
                alt="Momento especial"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>
          </motion.div>

          {/* ========================================
              FOTO 3
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#B8862E]/35
              bg-[#FAF6ED]
              p-[4px]
              shadow-[0_15px_35px_rgba(69,47,17,0.10)]

              lg:col-span-3
            "
          >
            <div className="h-[230px] overflow-hidden sm:h-[310px]">
              <img
                src={images[2]}
                alt="Recuerdo"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>
          </motion.div>

          {/* ========================================
              FOTO 4
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#B8862E]/35
              bg-[#FAF6ED]
              p-[4px]
              shadow-[0_15px_35px_rgba(69,47,17,0.10)]

              lg:col-span-2
            "
          >
            <div className="h-[230px] overflow-hidden sm:h-[310px]">
              <img
                src={images[3]}
                alt="Momento inolvidable"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-[1.05]
                "
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================
            FRASE FINAL
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
            duration: 0.8,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
          "
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-14
              bg-[#B8862E]/55
            "
          />

          <p
            className="
              font-['Playfair_Display']
              text-base
              italic
              leading-7
              text-[#8C6729]
              sm:text-lg
            "
          >
            50 años de historias, recuerdos y momentos
            inolvidables.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Galeria;