import { negocio } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-sm text-foreground/60">
        <p className="font-heading text-lg font-bold text-foreground">
          Vital<span className="text-vg-red">Gym</span>
        </p>
        <p>{negocio.ubicacion}</p>
        <p>
          © {new Date().getFullYear()} {negocio.nombre}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
