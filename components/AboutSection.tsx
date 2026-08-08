import FadeIn from "@/components/FadeIn";

export default function AboutSection() {
  return (
    <section
      id="que-es"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            ¿Qué es <span className="text-vg-red">VitalGym</span>?
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            VitalGym es un gimnasio en casa con entrenamiento 100%
            personalizado. Trabajamos con un máximo de 3 personas por bloque
            horario, para que cada cliente tenga su rutina individual,
            seguimiento de medidas y un plan adaptado a sus propias metas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
