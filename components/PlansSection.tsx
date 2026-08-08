import FadeIn from "@/components/FadeIn";
import PlanCard from "@/components/PlanCard";
import { condicionesPlanes, planes } from "@/lib/data";

export default function PlansSection() {
  return (
    <section
      id="planes"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Nuestros <span className="text-vg-red">Planes</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {planes.map((plan, i) => (
            <FadeIn key={plan.nombre} delay={i * 100}>
              <PlanCard {...plan} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="mt-8 text-center text-sm text-foreground/60">
            {condicionesPlanes}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
