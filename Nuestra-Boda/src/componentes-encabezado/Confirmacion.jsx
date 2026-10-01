import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  MessageSquareText,
} from "lucide-react";

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado.trim() || !asistencia) {
      setError("Completa tu nombre y confirma tu asistencia.");
      return;
    }

    if (asistencia === "Sí asistiré" && !invitados) {
      setError("Indica el número de personas que asistirán.");
      return;
    }

    setError("");
    setEnviando(true);
    setEnviado(false);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : "0",
      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwP_CeczY83Jq9PYVpRSTNffPocPJTZUISizBSPR_7__G-kw20fu-HzHBTzBWgzVn4w/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      setEnviado(true);

      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados("");

      setTimeout(() => {
        setEnviado(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);

      setError(
        "Hubo un error al enviar tu confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

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
          top-10
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

      <div className="relative z-10 mx-auto max-w-4xl">

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
            RSVP
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
            Confirma tu Asistencia
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
              leading-7
              text-[#17130D]/65
              sm:text-base
              sm:leading-8
            "
          >
            Tu presencia hará aún más especial esta celebración.
            Por favor confirma tu asistencia.
          </p>
        </motion.div>

        {/* ========================================
            FORMULARIO
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            max-w-2xl
            overflow-hidden
            border
            border-[#B8862E]/45
            bg-[#FAF6ED]
            px-6
            py-10
            shadow-[0_25px_65px_rgba(74,52,20,0.13)]
            sm:px-12
            sm:py-12
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

          {/* LÍNEA DORADA SUPERIOR */}

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

          <div className="relative z-10 space-y-6">

            {/* ========================================
                NOMBRE
            ======================================== */}

            <div>
              <label
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#8C6729]
                "
              >
                <UserRound size={14} strokeWidth={1.5} />

                Nombre
              </label>

              <input
                type="text"
                placeholder="Nombre y apellido"
                value={nombreInvitado}
                onChange={(e) =>
                  setNombreInvitado(e.target.value)
                }
                className="
                  w-full
                  border
                  border-[#B8862E]/35
                  bg-[#F2E9DA]/60
                  px-5
                  py-4
                  font-['Playfair_Display']
                  text-[#17130D]
                  outline-none
                  transition
                  placeholder:text-[#17130D]/35
                  focus:border-[#B8862E]
                  focus:bg-[#FAF6ED]
                  focus:ring-1
                  focus:ring-[#B8862E]/30
                "
              />
            </div>

            {/* ========================================
                ASISTENCIA
            ======================================== */}

            <div>
              <p
                className="
                  mb-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#8C6729]
                "
              >
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* SÍ */}

                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("Sí asistiré");
                    setError("");
                  }}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-5
                    py-4
                    font-['Playfair_Display']
                    transition
                    duration-300

                    ${
                      asistencia === "Sí asistiré"
                        ? `
                          border-[#B8862E]
                          bg-[#17130D]
                          text-[#E4BD6C]
                          shadow-[0_10px_25px_rgba(23,19,13,0.18)]
                        `
                        : `
                          border-[#B8862E]/30
                          bg-[#F2E9DA]/60
                          text-[#17130D]
                          hover:border-[#B8862E]/60
                        `
                    }
                  `}
                >
                  <Check size={18} strokeWidth={1.5} />

                  Sí asistiré
                </button>

                {/* NO */}

                <button
                  type="button"
                  onClick={() => {
                    setAsistencia("No podré asistir");
                    setInvitados("");
                    setError("");
                  }}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-5
                    py-4
                    font-['Playfair_Display']
                    transition
                    duration-300

                    ${
                      asistencia === "No podré asistir"
                        ? `
                          border-[#B8862E]
                          bg-[#17130D]
                          text-[#E4BD6C]
                          shadow-[0_10px_25px_rgba(23,19,13,0.18)]
                        `
                        : `
                          border-[#B8862E]/30
                          bg-[#F2E9DA]/60
                          text-[#17130D]
                          hover:border-[#B8862E]/60
                        `
                    }
                  `}
                >
                  <X size={18} strokeWidth={1.5} />

                  No podré asistir
                </button>
              </div>
            </div>

            {/* ========================================
                NÚMERO DE INVITADOS
                SOLO APARECE SI ASISTE
            ======================================== */}

            {asistencia === "Sí asistiré" && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <label
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#8C6729]
                  "
                >
                  <UsersRound
                    size={15}
                    strokeWidth={1.5}
                  />

                  Número de personas
                </label>

                <input
                  type="number"
                  min="1"
                  inputMode="numeric"
                  placeholder="Ej. 2"
                  value={invitados}
                  onChange={(e) =>
                    setInvitados(e.target.value)
                  }
                  className="
                    w-full
                    border
                    border-[#B8862E]/35
                    bg-[#F2E9DA]/60
                    px-5
                    py-4
                    font-['Playfair_Display']
                    text-[#17130D]
                    outline-none
                    transition
                    placeholder:text-[#17130D]/35
                    focus:border-[#B8862E]
                    focus:bg-[#FAF6ED]
                    focus:ring-1
                    focus:ring-[#B8862E]/30
                  "
                />
              </motion.div>
            )}

            {/* ========================================
                MENSAJE
            ======================================== */}

            <div>
              <label
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#8C6729]
                "
              >
                <MessageSquareText
                  size={14}
                  strokeWidth={1.5}
                />

                Mensaje especial
              </label>

              <textarea
                placeholder="Escribe un mensaje..."
                value={mensajeInvitado}
                onChange={(e) =>
                  setMensajeInvitado(e.target.value)
                }
                rows="4"
                className="
                  w-full
                  resize-none
                  border
                  border-[#B8862E]/35
                  bg-[#F2E9DA]/60
                  px-5
                  py-4
                  font-['Playfair_Display']
                  text-[#17130D]
                  outline-none
                  transition
                  placeholder:text-[#17130D]/35
                  focus:border-[#B8862E]
                  focus:bg-[#FAF6ED]
                  focus:ring-1
                  focus:ring-[#B8862E]/30
                "
              />
            </div>

            {/* ========================================
                ERROR
            ======================================== */}

            {error && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  border
                  border-[#9B5D46]/30
                  bg-[#9B5D46]/10
                  px-4
                  py-3
                  text-center
                  text-sm
                  text-[#734434]
                "
              >
                {error}
              </motion.div>
            )}

            {/* ========================================
                CONFIRMACIÓN ENVIADA
            ======================================== */}

            {enviado && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -5,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                className="
                  border
                  border-[#B8862E]/35
                  bg-[#D5A84B]/10
                  px-5
                  py-4
                  text-center
                "
              >
                <Check
                  size={21}
                  strokeWidth={1.5}
                  className="
                    mx-auto
                    mb-2
                    text-[#A97625]
                  "
                />

                <p
                  className="
                    font-['Playfair_Display']
                    text-sm
                    text-[#17130D]
                    sm:text-base
                  "
                >
                  ¡Confirmación enviada correctamente!
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#17130D]/55
                  "
                >
                  Gracias por confirmar tu asistencia.
                </p>
              </motion.div>
            )}

            {/* ========================================
                BOTÓN ENVIAR
            ======================================== */}

            <motion.button
              type="button"
              onClick={enviarConfirmacion}
              disabled={enviando}
              whileHover={
                !enviando
                  ? {
                      y: -2,
                      scale: 1.01,
                    }
                  : {}
              }
              whileTap={
                !enviando
                  ? {
                      scale: 0.98,
                    }
                  : {}
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                border
                border-[#A97625]
                bg-gradient-to-r
                from-[#A96F1C]
                via-[#D7AA50]
                to-[#A96F1C]
                px-7
                py-4
                font-['Playfair_Display']
                text-base
                font-semibold
                tracking-wide
                text-[#11100D]
                shadow-[0_12px_30px_rgba(169,111,28,0.20)]
                transition
                duration-300
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:text-lg
              "
            >
              <Send size={17} strokeWidth={1.7} />

              {enviando
                ? "Enviando..."
                : "Enviar Confirmación"}
            </motion.button>
          </div>
        </motion.div>

        {/* ========================================
            FRASE FINAL
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-10 text-center"
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
            ¡Será un gusto celebrar contigo!
          </p>

          <div
            className="
              mx-auto
              mt-5
              h-px
              w-12
              bg-[#B8862E]/50
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Confirmacion;