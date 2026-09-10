import { CSSProperties, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type FadingVideoProps = {
  src: string | string[];
  className?: string;
  style?: CSSProperties;
};

function FadingVideo({ src, className = "", style }: FadingVideoProps) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const fadeIn = () => requestAnimationFrame(() => setVisible(true));

  const onTimeUpdate = () => {
    const video = ref.current;
    if (!video || !Number.isFinite(video.duration)) return;
    if (video.duration - video.currentTime <= 0.55) setVisible(false);
  };

  const onEnded = async () => {
    const video = ref.current;
    if (!video) return;
    if (sources.length === 1) {
      video.currentTime = 0;
      try { await video.play(); fadeIn(); } catch {}
      return;
    }
    setIndex((current) => (current + 1) % sources.length);
  };

  useEffect(() => {
    setVisible(false);
    const video = ref.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [index]);

  return (
    <video
      ref={ref}
      src={sources[index]}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={fadeIn}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      className={className}
      style={{ ...style, opacity: visible ? 1 : 0, transition: "opacity 500ms ease" }}
    />
  );
}

function BlurText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-y-[0.1em] ${className}`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.24em] inline-block"
          initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: index * 0.075, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

function ArrowUpRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 7h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScrollArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 14l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const reveal = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

export default function App() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 18 });
  const rotateY = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const rotateX = useTransform(smoothY, [-1, 1], [1.6, -1.6]);

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <main className="bg-black text-white">
      <section id="inicio" onMouseMove={onMouseMove} className="relative min-h-[100svh] overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/public/section-product.png"
            alt="Detalhe da Memória Luz 360"
            className="hero-media absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover object-center md:w-[112%]"
          />

          {/* Quando tiver o vídeo real, substitua a imagem por:
          <FadingVideo
            src="/memoria-luz-hero.mp4"
            className="aspect-[4/5] w-full object-cover" />
          */}
        </motion.div>

        <div className="hero-vignette absolute inset-0 z-[1]" />

        <nav className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8 lg:px-14">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#inicio" className="liquid-glass rounded-full px-4 py-2.5 font-heading text-xl italic tracking-tight">
              Memória Luz
            </a>

            <div className="liquid-glass hidden items-center gap-1 rounded-full p-1.5 md:flex">
              {[
                ["Como funciona", "#como-funciona"],
                ["Veja os detalhes", "#detalhes"],
                ["Para presentear", "#presentear"],
                ["Dúvidas", "#duvidas"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="rounded-full px-3 py-2 font-body text-sm font-medium text-white/85 transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>

            <a href="#oferta" className="liquid-glass-strong group flex min-h-12 items-center gap-2 rounded-full px-4 py-2.5 font-body text-sm font-medium">
              <span className="hidden sm:inline">Criar a minha</span>
              <span className="sm:hidden">Criar</span>
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight /></span>
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-20 pt-28 text-center md:px-10">
          <motion.div
            {...reveal}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-full px-4 py-2 font-body text-[10px] font-medium tracking-[0.18em] text-white/90 sm:text-xs"
          >
            PERSONALIZADA COM AS SUAS FOTOS
          </motion.div>

          <div className="mt-6 max-w-[980px]">
            <BlurText
              text="Suas melhores memórias não foram feitas para ficar esquecidas na galeria."
              className="font-heading text-[3rem] italic leading-[0.9] tracking-[-1.5px] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            />
          </div>

          <motion.p
            {...reveal}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl font-body text-[15px] font-light leading-snug text-white/80 sm:text-base md:text-lg"
          >
            Transforme 4 fotos especiais em uma luminária personalizada que conta a sua história em cada lado.
          </motion.p>

          <motion.div {...reveal} transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }} className="mt-7">
            <a href="#oferta" className="liquid-glass-strong group flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 font-body text-sm font-medium transition-transform duration-300 hover:scale-[1.02]">
              Criar minha Memória Luz
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight /></span>
            </a>
          </motion.div>

          <motion.p {...reveal} transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }} className="mt-4 font-body text-xs font-light text-white/60">
            4 fotos • Iluminação LED • Feita especialmente para você
          </motion.p>

          <motion.a
            {...reveal}
            href="#como-funciona"
            transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 flex flex-col items-center gap-1.5 font-body text-[11px] text-white/55 transition hover:text-white/80"
          >
            <span>Descubra como funciona</span>
            <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><ScrollArrow /></motion.span>
          </motion.a>
        </div>
      </section>

      <section id="como-funciona" className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-5 py-24 md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-5 font-body text-xs font-medium tracking-[0.16em] text-white/55">
              // MEMÓRIAS TRANSFORMADAS EM LUZ
            </motion.p>

            <motion.h2 initial={{ opacity: 0, y: 26, filter: "blur(9px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.85 }} className="max-w-3xl font-heading text-5xl italic leading-[0.92] tracking-[-1.5px] md:text-7xl">
              Algumas fotos merecem mais do que ficar esquecidas na galeria.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.12 }} className="mt-7 max-w-2xl font-body text-base font-light leading-relaxed text-white/72 md:text-lg">
              Uma viagem inesquecível. Um momento com quem você ama. Seu pet. Sua família. Algumas fotografias carregam histórias inteiras — e agora elas podem fazer parte da sua casa.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-5 max-w-2xl font-body text-base font-light leading-relaxed text-white/88">
              Escolha quatro dessas lembranças e transforme-as em uma luminária personalizada criada especialmente para contar a sua história.
            </motion.p>

            <motion.div id="oferta" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.28 }} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#personalizar" className="liquid-glass-strong group flex min-h-12 items-center gap-3 rounded-full px-6 py-3 font-body text-sm font-medium transition-transform hover:scale-[1.02]">
                Quero criar a minha
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight /></span>
              </a>
              <span className="font-body text-sm text-white/45">A partir de R$ 249,90</span>
            </motion.div>
          </div>

          <motion.div id="detalhes" initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }} whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1 }} className="relative mx-auto w-full max-w-xl">
            <div className="liquid-glass rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img src="/section-product.png" alt="Detalhe da Memória Luz 360" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
            <div className="liquid-glass absolute -bottom-5 left-4 rounded-full px-4 py-2 text-xs text-white/75">4 lados • 4 histórias</div>
          </motion.div>
        </div>

        <span id="presentear" className="absolute bottom-0" />
        <span id="duvidas" className="absolute bottom-0" />
        <span id="personalizar" className="absolute bottom-0" />
      </section>
    </main>
  );
}
