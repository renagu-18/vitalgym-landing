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

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#planes", label: "Planes" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
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
  "Recordatorio de clases por WhatsApp o Gmail",
  "Acceso a la plataforma web",
  "Atención personalizada 1:1",
];

export const horarios = [
  { dias: "Lunes a viernes", horas: "06:00 – 10:00" },
  { dias: "Lunes a viernes", horas: "18:00 – 22:00" },
  { dias: "Sábados", horas: "09:00 – 11:00" },
];
