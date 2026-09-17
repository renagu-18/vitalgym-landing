export const negocio = {
  nombre: "VitalGym",
  ubicacion: "San Miguel, Santiago, Chile",
  whatsapp: "56979282151",
  mensajeWhatsapp:
    "Hola, quiero información sobre VitalGym y coordinar una clase de prueba",
  urlApp: "https://vitalgym-app.vercel.app",
};

export const whatsappUrl = `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(
  negocio.mensajeWhatsapp
)}`;

export const seo = {
  titulo: `${negocio.nombre} | Entrenamiento personalizado en ${negocio.ubicacion}`,
  descripcion:
    "Gimnasio en casa en San Miguel: entrenamiento personalizado en grupos de máximo 3 personas. Agenda tu clase de prueba gratis, sin compromiso.",
};

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#proceso", label: "Proceso" },
  { href: "#planes", label: "Planes" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
];

export const perfiles = [
  {
    titulo: "Si el tiempo no te sobra",
    descripcion:
      "Entrenas cerca de tu casa, sin perder media hora en traslado ni tiempo muerto esperando que se desocupe una máquina.",
  },
  {
    titulo: "Si los gimnasios grandes no son lo tuyo",
    descripcion:
      "Prefieres un grupo chico donde el profe sabe tu nombre y tu rutina, en vez de perderte entre desconocidos.",
  },
  {
    titulo: "Si ya lo intentaste antes y no funcionó",
    descripcion:
      "Has entrenado antes pero sin seguimiento real, y terminaste abandonando. Acá revisamos tu progreso semana a semana para que no pase de nuevo.",
  },
  {
    titulo: "Si es tu primera vez y te da un poco de vergüenza",
    descripcion:
      "No tienes que partir en un gimnasio lleno de gente mirando. Entrenas en un grupo de máximo 3 personas, a tu ritmo y sin apuro.",
  },
];

export const proceso = [
  {
    paso: 1,
    titulo: "Evaluación inicial",
    descripcion:
      "Conversamos sobre tus metas y hacemos un levantamiento de tu punto de partida.",
  },
  {
    paso: 2,
    titulo: "Plan personalizado",
    descripcion:
      "Diseñamos tu rutina individual, adaptada a tus objetivos y tu nivel actual.",
  },
  {
    paso: 3,
    titulo: "Sesiones en grupos chicos",
    descripcion:
      "Entrenas en bloques de máximo 3 personas, con atención personalizada 1:1.",
  },
  {
    paso: 4,
    titulo: "Seguimiento de progreso",
    descripcion:
      "Medimos tu avance con seguimiento de medidas corporales e historial de progreso, y ajustamos el plan.",
  },
];

export const planes = [
  {
    nombre: "Pack Inicio",
    clasesPorMes: 8,
    frecuencia: "2 veces por semana aprox.",
    destacado: false,
  },
  {
    nombre: "Pack Transforma",
    clasesPorMes: 12,
    frecuencia: "3 veces por semana",
    destacado: true,
  },
  {
    nombre: "Pack Elite",
    clasesPorMes: 20,
    frecuencia: "5 veces por semana aprox.",
    destacado: false,
  },
];

export const condicionesPlanes =
  "Todos los planes son trimestrales y se pagan en 3 cuotas mensuales.";

export const incluye = [
  "Rutina personalizada",
  "Seguimiento de medidas corporales",
  "Historial de progreso",
  "Recordatorio automático de clases por Gmail",
  "Acceso a la plataforma web",
  "Atención personalizada 1:1",
];

export const horarios = [
  { dias: "Lunes a viernes", horas: "06:00 – 10:00" },
  { dias: "Lunes a viernes", horas: "18:00 – 22:00" },
  { dias: "Sábados", horas: "09:00 – 11:00" },
];
