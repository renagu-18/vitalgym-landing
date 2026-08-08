import FadeIn from "@/components/FadeIn";
import { horarios } from "@/lib/data";

export default function ScheduleSection() {
  return (
    <section
      id="horarios"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Horarios de <span className="text-vg-red">atención</span>
          </h2>
        </FadeIn>

        <div className="mt-12 flex flex-col divide-y divide-white/10 rounded-lg border border-white/10">
          {horarios.map((horario, i) => (
            <FadeIn key={`${horario.dias}-${horario.horas}`} delay={i * 100}>
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-medium text-foreground/90">
                  {horario.dias}
                </span>
                <span className="font-heading text-lg font-semibold text-vg-red">
                  {horario.horas}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
