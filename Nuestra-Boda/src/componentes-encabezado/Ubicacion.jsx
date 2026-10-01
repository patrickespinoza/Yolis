import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react";

const Celebracion = ({
  titulo = "Celebración",
  fecha = "7 Sabado de Noviembre",
  hora = "7:00 PM",
  lugar = "Lugar de la celebración",
  direccion = "C. Andrés Renteria 83, Lomas de La Soledad, 45403 Tonalá, Jal.",
  ubicacion = "https://maps.app.goo.gl/M8oPzS3uoApP9fkk8",
}) => {
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
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#C99A3D]/10
          blur-[110px]
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
          blur-[110px]
        "
      />

      {/* Líneas decorativas */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-10
          h-px
          w-28
          bg-gradient-to-r
          from-[#C99A3D]/60
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-0
          h-px
          w-28
          bg-gradient-to-l
          from-[#C99A3D]/60
          to-transparent
        "
      />

      {/* Destellos */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[13%]
          text-[#B8862E]/35
        "
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.85, 1.1, 0.85],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={17} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[12%]
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

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* ENCABEZADO */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.42em]
              text-[#A97625]
              sm:text-xs
            "
          >
            Te esperamos
          </p>

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
            {titulo}
          </h2>

          {/* Divisor */}

          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-[250px]
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
        </motion.div>

        {/* ========================================
            TARJETA PRINCIPAL
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            border
            border-[#B8862E]/45
            bg-[#FAF6ED]
            px-6
            py-11
            shadow-[0_25px_65px_rgba(74,52,20,0.13)]
            sm:px-10
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
              border-[#C99A3D]/20
            "
          />

          {/* Línea dorada superior */}

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
              via-[#C99A3D]
              to-transparent
            "
          />

          {/* ========================================
              ICONO PRINCIPAL
          ======================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              mb-8
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#B8862E]/45
              bg-[#F2E9DA]
              text-[#A97625]
              shadow-[0_8px_25px_rgba(184,134,46,0.12)]
            "
          >
            <MapPin size={26} strokeWidth={1.3} />
          </div>

          {/* ========================================
              FECHA Y HORA
          ======================================== */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {/* FECHA */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                border
                border-[#B8862E]/30
                bg-[#F2E9DA]/65
                px-5
                py-7
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B8862E]/35
                  bg-[#FAF6ED]
                  text-[#A97625]
                "
              >
                <CalendarDays
                  size={18}
                  strokeWidth={1.4}
                />
              </div>

              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#A97625]
                "
              >
                Fecha
              </p>

              <p
                className="
                  font-['Playfair_Display']
                  text-xl
                  text-[#17130D]
                  sm:text-2xl
                "
              >
                {fecha}
              </p>
            </motion.div>

            {/* HORA */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                border
                border-[#B8862E]/30
                bg-[#F2E9DA]/65
                px-5
                py-7
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B8862E]/35
                  bg-[#FAF6ED]
                  text-[#A97625]
                "
              >
                <Clock3
                  size={18}
                  strokeWidth={1.4}
                />
              </div>

              <p
                className="
                  mb-2
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#A97625]
                "
              >
                Hora
              </p>

              <p
                className="
                  font-['Playfair_Display']
                  text-2xl
                  text-[#17130D]
                "
              >
                {hora}
              </p>
            </motion.div>
          </div>

          {/* ========================================
              DATOS DEL LUGAR
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
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              mx-auto
              mt-10
              max-w-2xl
              text-center
            "
          >
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-[#A97625]
              "
            >
              Ubicación
            </p>

            <h3
              className="
                font-['Playfair_Display']
                text-2xl
                font-normal
                text-[#17130D]
                sm:text-3xl
              "
            >
              {lugar}
            </h3>

            <div
              className="
                mx-auto
                my-5
                h-px
                w-12
                bg-[#B8862E]/55
              "
            />

            <p
              className="
                mx-auto
                max-w-lg
                font-['Playfair_Display']
                text-[15px]
                leading-7
                text-[#17130D]/65
                sm:text-base
                sm:leading-8
              "
            >
              {direccion}
            </p>

            {/* ========================================
                BOTÓN MAPS
            ======================================== */}

            <motion.a
              href={ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mx-auto
                mt-9
                flex
                w-fit
                items-center
                justify-center
                gap-3
                border
                border-[#B57D25]
                bg-gradient-to-r
                from-[#A96F1C]
                via-[#D7AA50]
                to-[#A96F1C]
                px-9
                py-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#11100D]
                shadow-[0_12px_30px_rgba(169,111,28,0.20)]
                transition
                duration-300
              "
            >
              <Navigation
                size={16}
                strokeWidth={1.8}
              />

              Ver ubicación
            </motion.a>
          </motion.div>

          {/* ========================================
              FRASE FINAL
          ======================================== */}

          <div
            className="
              relative
              z-10
              mt-11
              border-t
              border-[#B8862E]/20
              pt-7
              text-center
            "
          >
            <p
              className="
                font-['Playfair_Display']
                text-sm
                italic
                tracking-wide
                text-[#8C6729]
                sm:text-base
              "
            >
              Una noche especial merece un lugar especial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Celebracion;