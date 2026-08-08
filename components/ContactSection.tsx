import FadeIn from "@/components/FadeIn";
import { negocio, whatsappUrl } from "@/lib/data";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Coordina tu <span className="text-vg-red">clase de prueba</span>
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-4 text-lg text-foreground/80">
            Escríbenos por WhatsApp y te ayudamos a elegir el plan que mejor
            se adapte a tus metas.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-vg-red px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-red-700"
          >
            Escribir por WhatsApp
          </a>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-col items-center gap-2 text-foreground/70">
            <p>{negocio.ubicacion}</p>
            <p>+{negocio.whatsapp}</p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.02] p-8">
            <p className="text-foreground/90">
              ¿Ya entrenas con nosotros o quieres inscribirte directamente?
            </p>
            <a
              href={negocio.urlApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md border border-white/20 px-8 py-3 font-semibold text-foreground transition-colors hover:border-vg-red hover:text-vg-red"
            >
              Ir a la app de inscripción
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
