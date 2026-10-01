"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Music,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
  Sparkles,
} from "lucide-react";

const Musica = () => {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const detenerCarga = () => {
      setCargando(false);
    };

    const detectarReproduccion = () => {
      setReproduciendo(true);
      setCargando(false);
    };

    const detectarPausa = () => {
      setReproduciendo(false);
    };

    audio.addEventListener("playing", detectarReproduccion);
    audio.addEventListener("pause", detectarPausa);
    audio.addEventListener("canplay", detenerCarga);
    audio.addEventListener("error", detenerCarga);

    return () => {
      audio.removeEventListener("playing", detectarReproduccion);
      audio.removeEventListener("pause", detectarPausa);
      audio.removeEventListener("canplay", detenerCarga);
      audio.removeEventListener("error", detenerCarga);
    };
  }, []);

  const reproducirMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      setCargando(true);

      audio.muted = false;
      setSilenciado(false);

      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
      setCargando(false);
      setMostrarModal(false);
    }
  };

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setReproduciendo(false);
    setMostrarModal(false);
  };

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        setCargando(true);

        audio.muted = false;
        setSilenciado(false);

        await audio.play();

        setReproduciendo(true);
      } catch (error) {
        console.error("No se pudo reproducir la música:", error);
        setCargando(false);
      }
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  const alternarSilencio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setSilenciado(audio.muted);
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        loop
        preload="auto"
      />

      {/* MODAL INICIAL */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-black/80
              px-5
              backdrop-blur-[5px]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* LUZ DORADA DE FONDO */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#d5a84b]/10
                blur-[120px]
              "
            />

            {/* PARTÍCULAS */}
            <div
              className="
                pointer-events-none
                absolute
                left-[10%]
                top-[15%]
                h-1
                w-1
                rounded-full
                bg-[#e6c16a]
                shadow-[40px_80px_0_#d5a84b,120px_20px_0_#f3d98b,240px_120px_0_#d5a84b,300px_20px_0_#e6c16a]
              "
            />

            <motion.div
              className="
                relative
                w-full
                max-w-[410px]
                overflow-hidden
                rounded-[3px]
                border
                border-[#d7ae5d]/60
                bg-[#090909]
                px-7
                py-10
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.75)]
                sm:px-10
                sm:py-12
              "
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BORDE INTERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7px]
                  border
                  border-[#d7ae5d]/20
                "
              />

              {/* DECORACIÓN SUPERIOR */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-32
                  w-32
                  bg-[radial-gradient(circle_at_top_left,rgba(215,174,93,0.20),transparent_68%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  h-32
                  w-32
                  bg-[radial-gradient(circle_at_bottom_right,rgba(215,174,93,0.18),transparent_68%)]
                "
              />

              {/* CERRAR */}
              <button
                type="button"
                onClick={continuarSinMusica}
                aria-label="Cerrar ventana de música"
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d7ae5d]/30
                  bg-black/50
                  text-[#d7ae5d]
                  transition
                  duration-300
                  hover:scale-105
                  hover:border-[#d7ae5d]
                  hover:bg-[#d7ae5d]
                  hover:text-black
                "
              >
                <X size={17} />
              </button>

              {/* ICONO */}
              <motion.div
                className="
                  relative
                  z-10
                  mx-auto
                  mb-6
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d7ae5d]/60
                  bg-gradient-to-br
                  from-[#17130c]
                  to-black
                  text-[#e2bd6b]
                  shadow-[0_0_35px_rgba(215,174,93,0.16)]
                "
                animate={{
                  rotate: reproduciendo ? 360 : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: reproduciendo ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <Music size={31} strokeWidth={1.4} />

                <motion.div
                  className="
                    absolute
                    -right-1
                    -top-1
                    text-[#e6c16a]
                  "
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={15} />
                </motion.div>
              </motion.div>

              {/* SUBTÍTULO */}
              <p
                className="
                  relative
                  z-10
                  mb-3
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#c99c49]
                "
              >
                Celebremos juntos
              </p>

              {/* TÍTULO */}
              <h2
                className="
                  relative
                  z-10
                  mb-4
                  font-['Playfair_Display']
                  text-3xl
                  font-normal
                  text-[#e4bd6c]
                  sm:text-4xl
                "
              >
                Una canción especial
              </h2>

              {/* DIVISOR */}
              <div
                className="
                  relative
                  z-10
                  mx-auto
                  mb-6
                  flex
                  max-w-[220px]
                  items-center
                  justify-center
                  gap-3
                "
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d7ae5d]/60" />

                <span className="text-[10px] text-[#d7ae5d]">
                  ◆
                </span>

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d7ae5d]/60" />
              </div>

              {/* TEXTO */}
              <p
                className="
                  relative
                  z-10
                  mx-auto
                  mb-8
                  max-w-[300px]
                  font-['Playfair_Display']
                  text-[15px]
                  leading-7
                  text-[#e9dfca]/75
                "
              >
                La música también forma parte de los momentos
                que hacen especial esta celebración.
              </p>

              {/* BOTONES */}
              <div className="relative z-10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={reproducirMusica}
                  disabled={cargando}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    border
                    border-[#e1b75e]
                    bg-gradient-to-r
                    from-[#b47b22]
                    via-[#e1b75e]
                    to-[#b47b22]
                    px-6
                    py-[15px]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#080808]
                    shadow-[0_10px_30px_rgba(201,156,73,0.15)]
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:brightness-110
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {cargando ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-black/30
                          border-t-black
                        "
                      />

                      Cargando
                    </>
                  ) : (
                    <>
                      <Play
                        size={16}
                        fill="currentColor"
                      />

                      Escuchar música
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    w-full
                    border
                    border-[#d7ae5d]/35
                    bg-transparent
                    px-6
                    py-[14px]
                    text-[11px]
                    uppercase
                    tracking-[0.17em]
                    text-[#d7ae5d]
                    transition
                    duration-300
                    hover:border-[#d7ae5d]/70
                    hover:bg-[#d7ae5d]/10
                  "
                >
                  Continuar sin música
                </button>
              </div>

              {/* TEXTO INFERIOR */}
              <p
                className="
                  relative
                  z-10
                  mt-6
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                50 años · Una vida por celebrar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTROL FLOTANTE */}
      {!mostrarModal && (
        <motion.div
          className="
            fixed
            bottom-5
            right-5
            z-[9998]
            flex
            items-center
            gap-1
            border
            border-[#d7ae5d]/50
            bg-[#080808]/95
            p-[5px]
            shadow-[0_12px_35px_rgba(0,0,0,0.45)]
            backdrop-blur-md
          "
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={alternarReproduccion}
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              bg-gradient-to-br
              from-[#e1b75e]
              to-[#a96f1c]
              text-black
              transition
              duration-300
              hover:brightness-110
            "
          >
            {cargando ? (
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-black/30
                  border-t-black
                "
              />
            ) : reproduciendo ? (
              <Pause
                size={17}
                fill="currentColor"
              />
            ) : (
              <Play
                size={17}
                fill="currentColor"
              />
            )}
          </button>

          {/* VOLUMEN */}
          <button
            type="button"
            onClick={alternarSilencio}
            aria-label={
              silenciado
                ? "Activar sonido"
                : "Silenciar música"
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              text-[#d7ae5d]
              transition
              duration-300
              hover:bg-[#d7ae5d]/10
            "
          >
            {silenciado ? (
              <VolumeX size={18} />
            ) : (
              <Volume2 size={18} />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Musica;