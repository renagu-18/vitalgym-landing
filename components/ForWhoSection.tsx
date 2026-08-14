import FadeIn from "@/components/FadeIn";
import { perfiles } from "@/lib/data";

export default function ForWhoSection() {
  return (
    <section
      id="para-quien"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            ¿Para quién es <span className="text-vg-red">VitalGym</span>?
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {perfiles.map((perfil, i) => (
            <FadeIn key={perfil.titulo} delay={i * 100}>
              <div className="h-full rounded-lg border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-vg-red">
                  {perfil.titulo}
                </h3>
                <p className="mt-2 text-foreground/80">{perfil.descripcion}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
