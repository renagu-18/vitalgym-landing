import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { negocio, whatsappUrl } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center gap-8 overflow-hidden px-6 pt-24 text-center"
    >
      <Image
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay oscuro plano (sin gradiente) para legibilidad del texto */}
      <div className="absolute inset-0 bg-vg-black/80" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <FadeIn>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-vg-red">
            Entrenamiento personal en {negocio.ubicacion}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-heading text-5xl font-bold uppercase leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Vital<span className="text-vg-red">Gym</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="max-w-xl text-lg text-foreground/80 sm:text-xl">
            Entrenamiento 100% personalizado, en grupos de máximo 3 personas.
            Rutina, medidas y progreso hechos a tu medida.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-vg-red px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700"
            >
              Coordina tu clase de prueba
            </a>
            <a
              href={negocio.urlApp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-vg-red hover:text-vg-red"
            >
              Ir a la app
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={350}>
          <p className="text-sm text-foreground/60">
            Sin costo y sin compromiso.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
