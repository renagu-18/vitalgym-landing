export default function PlanCard({
  nombre,
  clasesPorMes,
  frecuencia,
  destacado,
}: {
  nombre: string;
  clasesPorMes: number;
  frecuencia: string;
  destacado: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_40px_-8px_rgba(204,26,26,0.55)] ${
        destacado
          ? "border-vg-red bg-vg-red/5 hover:border-red-400"
          : "border-white/10 bg-white/[0.02] hover:border-vg-red/70"
      }`}
    >
      {destacado && (
        <span className="self-start rounded-full bg-vg-red px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Más popular
        </span>
      )}
      <h3 className="font-heading text-2xl font-bold uppercase tracking-tight">
        {nombre}
      </h3>
      <p className="font-heading text-4xl font-bold text-vg-red">
        {clasesPorMes}
        <span className="ml-2 text-base font-normal text-foreground/70">
          clases / mes
        </span>
      </p>
      <p className="text-foreground/70">{frecuencia}</p>
    </div>
  );
}
