import FadeIn from "@/components/FadeIn";
import { proceso } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Cómo <span className="text-vg-red">funciona</span>
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          {/* Línea conectora del timeline (solo desktop) */}
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-white/10 sm:block" />

          <div className="relative grid gap-10 sm:grid-cols-4">
            {proceso.map((paso, i) => (
              <FadeIn key={paso.paso} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-vg-red bg-vg-black font-heading text-xl font-bold text-vg-red">
                    {paso.paso}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-tight">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    {paso.descripcion}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
