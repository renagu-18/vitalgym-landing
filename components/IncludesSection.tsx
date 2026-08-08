import FadeIn from "@/components/FadeIn";
import { incluye } from "@/lib/data";

export default function IncludesSection() {
  return (
    <section
      id="incluye"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Qué incluye <span className="text-vg-red">cualquier plan</span>
          </h2>
        </FadeIn>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {incluye.map((item, i) => (
            <FadeIn key={item} delay={i * 75}>
              <li className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.02] px-5 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vg-red text-xs font-bold text-white">
                  ✓
                </span>
                <span className="text-foreground/90">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
