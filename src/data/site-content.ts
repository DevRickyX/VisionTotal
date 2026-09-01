export type SiteLocation = {
  city: string;
  region: string;
  label: string;
  address: string;
  note: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "eye" | "glasses" | "activity" | "scan" | "baby" | "heart";
};

export type NavigationItem = { label: string; href: string; children: { label: string; href: string }[] };

export const siteContent = {
  organization: {
    name: "Visión Total",
    legalName: "Visión Total S.A.S.",
    phoneDisplay: "+57 (604) 448 09 15",
    phoneHref: "tel:+576044480915",
    email: "info@visiontotal.com.co",
    schedule: "Lunes a viernes · 7:00 a. m. a 6:00 p. m.",
  },
  navigation: [
    { label: "Atención", href: "/servicios", children: [{ label: "Servicios", href: "/servicios" }, { label: "Particulares", href: "/particulares" }] },
    { label: "Dónde estamos", href: "/sedes", children: [{ label: "Sedes", href: "/sedes" }, { label: "Solicitar cita", href: "/solicitar-cita" }] },
    { label: "Comunidad", href: "/salud-visual", children: [{ label: "Salud visual", href: "/salud-visual" }, { label: "Brigadas", href: "/brigadas" }] },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: "Red especializada en salud visual",
    title: "Especialistas en el cuidado de tu salud visual.",
    description:
      "Atención oftalmológica integral para pacientes y familias en Medellín, Apartadó y Montería.",
  },
  quickActions: [
    {
      title: "Solicitar una cita",
      description: "Encuentra el canal adecuado según tu ciudad y tipo de atención.",
      href: "/solicitar-cita",
      icon: "calendar" as const,
      action: "Ver canales de atención",
    },
    {
      title: "Radicar una PQRSF",
      description: "Presenta una petición, queja, reclamo, sugerencia o felicitación.",
      href: "/pqrsf",
      icon: "message" as const,
      action: "Escribir a atención al usuario",
    },
    {
      title: "Encuesta de satisfacción",
      description: "Tu experiencia nos ayuda a mejorar la atención de otros pacientes.",
      href: "/encuesta-satisfaccion",
      icon: "clipboard" as const,
      action: "Consultar encuesta",
    },
  ],
  services: [
    {
      title: "Consulta oftalmológica",
      description: "Valoración integral, diagnóstico y seguimiento por especialistas.",
      icon: "eye" as const,
    },
    {
      title: "Optometría",
      description: "Evaluación de la visión y prescripción de corrección óptica.",
      icon: "glasses" as const,
    },
    {
      title: "Cirugía oftalmológica",
      description: "Procedimientos con evaluación previa y acompañamiento clínico.",
      icon: "activity" as const,
    },
    {
      title: "Ayudas diagnósticas",
      description: "Pruebas especializadas para apoyar decisiones médicas oportunas.",
      icon: "scan" as const,
    },
    {
      title: "Oftalmología pediátrica",
      description: "Cuidado visual especializado para niñas, niños y adolescentes.",
      icon: "baby" as const,
    },
    {
      title: "Córnea, retina y glaucoma",
      description: "Atención de condiciones que requieren evaluación especializada.",
      icon: "heart" as const,
    },
  ] satisfies Service[],
  locations: [
    {
      city: "Medellín",
      region: "Antioquia",
      label: "Sede quirúrgica",
      address: "Calle 57 # 46-43, sector Argentina",
      note: "También contamos con atención ambulatoria en la ciudad.",
    },
    {
      city: "Apartadó",
      region: "Urabá antioqueño",
      label: "Sede quirúrgica",
      address: "Calle 103 # 97-154, local 1",
      note: "Confirma la sede indicada al momento de solicitar tu cita.",
    },
    {
      city: "Montería",
      region: "Córdoba",
      label: "Sede administrativa y quirúrgica",
      address: "Calle 28 # 7-34",
      note: "Si vienes por EPS, revisa la sede asignada en tu orden médica.",
    },
  ] satisfies SiteLocation[],
  appointmentChannels: [
    {
      city: "Medellín",
      description: "Orientación para identificar el canal según tu EPS o atención particular.",
      action: "Llamar para orientación",
      href: "tel:+576044480915",
      channel: "Línea general",
    },
    {
      city: "Apartadó",
      description: "Solicitudes para Urabá y confirmación de la sede asignada.",
      action: "Escribir por WhatsApp",
      href: "https://wa.me/573226248492",
      channel: "WhatsApp Urabá",
    },
    {
      city: "Montería",
      description: "Citas y orientación para Córdoba; revisa tu orden si vienes por EPS.",
      action: "Escribir por WhatsApp",
      href: "https://wa.me/573226248492",
      channel: "WhatsApp Córdoba",
    },
  ],
  healthArticles: [
    {
      category: "Prevención",
      title: "Glaucoma: por qué los controles a tiempo importan",
      image: "/images/news-news-1.jpg",
    },
    {
      category: "Salud infantil",
      title: "Señales para consultar la visión de niñas y niños",
      image: "/images/news-news-2.jpg",
    },
    {
      category: "Bienestar visual",
      title: "Miopía: hábitos y controles para cuidar tu visión",
      image: "/images/news-news-3.jpg",
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
