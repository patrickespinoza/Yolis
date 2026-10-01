import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Contador = ({
  titulo = "50 Años",
  texto = "Una vida llena de historias, momentos inolvidables y aún quedan muchos por celebrar.",
  frase = "Celebremos juntos",
  fecha = "2026-11-07T00:00:00",
}) => {
  const calculateTime = () => {
    const difference = +new Date(fecha) - +new Date();

    if (difference > 0) {
      return {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  const unidades = Object.keys(timeLeft);

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#070707]
        px-5
        py-24
        sm:px-8
        sm:py-28
      "
    >
      {/* ========================================
          FONDO / ILUMINACIÓN
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(201,156,73,0.13),transparent_35%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#d5a84b]/[0.07]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#d5a84b]/[0.08]
          blur-[110px]
        "
      />

      {/* ========================================
          DESTELLOS DECORATIVOS
      ======================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[12%]
          text-[#d7ae5d]/50
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={18} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[30%]
          text-[#d7ae5d]/40
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles size={13} strokeWidth={1} />
      </motion.div>

      {/* ========================================
          CONTENIDO
      ======================================== */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* SUBTÍTULO */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mb-5
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-[#d5a84b]
            sm:text-xs
          "
        >
          Una fecha para recordar
        </motion.p>



        {/* ========================================
            LÍNEA DECORATIVA
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mx-auto
            my-8
            flex
            max-w-[280px]
            items-center
            justify-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#d5a84b]/70
            "
          />

          <span className="text-[9px] text-[#d5a84b]">
            ◆
          </span>

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#d5a84b]/70
            "
          />
        </motion.div>

        {/* ========================================
            TEXTO
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3
            className="
              font-['Playfair_Display']
              text-2xl
              font-normal
              tracking-wide
              text-[#f0e5ce]
              sm:text-3xl
            "
          >
            {frase}
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-['Playfair_Display']
              text-[15px]
              leading-7
              text-[#eee2cc]/70
              sm:text-base
              sm:leading-8
            "
          >
            {texto}
          </p>
        </motion.div>

        {/* ========================================
            CONTADOR
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-14
            max-w-3xl
          "
        >
          <p
            className="
              mb-6
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-[#d5a84b]/75
              sm:text-[10px]
            "
          >
            Faltan
          </p>

          <div
            className="
              grid
              grid-cols-4
              gap-2
              sm:gap-4
            "
          >
            {unidades.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                  relative
                  overflow-hidden
                  border
                  border-[#d5a84b]/45
                  bg-[#0c0c0c]/90
                  px-1
                  py-5
                  shadow-[0_15px_35px_rgba(0,0,0,0.25)]
                  sm:px-4
                  sm:py-7
                "
              >
                {/* brillo superior */}

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
                    via-[#e3bd68]
                    to-transparent
                  "
                />

                {/* NÚMERO */}

                <motion.span
                  key={timeLeft[item]}
                  initial={{
                    opacity: 0.4,
                    y: -3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    block
                    font-['Playfair_Display']
                    text-2xl
                    font-normal
                    tabular-nums
                    text-[#e4bd6c]
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {String(timeLeft[item]).padStart(2, "0")}
                </motion.span>

                {/* NOMBRE */}

                <span
                  className="
                    mt-3
                    block
                    text-[7px]
                    uppercase
                    tracking-[0.12em]
                    text-[#eee2cc]/55
                    sm:text-[9px]
                    sm:tracking-[0.22em]
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
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
          className="mt-12"
        >
          <p
            className="
              font-['Playfair_Display']
              text-sm
              italic
              tracking-wide
              text-[#d5a84b]/70
              sm:text-base
            "
          >
            Una noche para celebrar la vida
          </p>

          <div
            className="
              mx-auto
              mt-5
              h-px
              w-12
              bg-[#d5a84b]/50
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contador;