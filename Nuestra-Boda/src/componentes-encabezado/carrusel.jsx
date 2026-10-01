import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Galeria = () => {
  const images = [
    "/carrusel03.jpg",
    "/carrusel02.jpg",
    "/carrusel01.jpg",
    "/carrusel04.jpg",
    "/carrusel05.jpeg",
    "/carrusel06.jpeg",
    "/carrusel07.jpeg",
    "/carrusel08.jpeg",
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
      {/* DECORACIÓN */}

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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ==========================================
            ENCABEZADO
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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

        {/* ==========================================
            GALERÍA CELULAR / TABLET

            Una debajo de otra
            Sin recortar las fotografías
        ========================================== */}

        <div className="space-y-6 lg:hidden">
          {images.map((imagen, index) => (
            <motion.div
              key={imagen}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: Math.min(index * 0.05, 0.2),
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="
                relative
                w-full
                border
                border-[#B8862E]/40
                bg-[#FAF6ED]
                p-[5px]
                shadow-[0_15px_35px_rgba(69,47,17,0.10)]
              "
            >
              {/* BORDE INTERIOR */}

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

              {/* FOTO COMPLETA */}

              <img
                src={imagen}
                alt={`Recuerdo ${index + 1}`}
                loading="lazy"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            GALERÍA COMPUTADORA

            Conservamos composición elegante
        ========================================== */}

        <div
          className="
            mx-auto
            hidden
            max-w-5xl
            grid-cols-12
            gap-5
            lg:grid
          "
        >
          {images.map((imagen, index) => {
            let configuracion = "";

            if (index === 0) {
              configuracion =
                "col-span-7 row-span-2 h-[650px]";
            } else if (index === 1) {
              configuracion =
                "col-span-5 h-[315px]";
            } else if (index === 2) {
              configuracion =
                "col-span-5 h-[315px]";
            } else {
              configuracion =
                "col-span-4 h-[420px]";
            }

            return (
              <motion.div
                key={imagen}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.05, 0.25),
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  border
                  border-[#B8862E]/35
                  bg-[#FAF6ED]
                  p-[5px]
                  shadow-[0_15px_35px_rgba(69,47,17,0.10)]
                  ${configuracion}
                `}
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

                <div className="h-full w-full overflow-hidden">
                  <img
                    src={imagen}
                    alt={`Recuerdo ${index + 1}`}
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==========================================
            FRASE FINAL
        ========================================== */}

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
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-14
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