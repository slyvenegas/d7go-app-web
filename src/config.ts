// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'D7GO App',
    title: 'D7GO App - Viajes Seguros y Confiables',
    description:
      'D7GO App conecta pasajeros y conductores para ofrecer viajes seguros, cómodos y a precios justos. ¡Descarga la app y comienza tu viaje hoy mismo!',
    keywords:
      'app de transporte, viajes seguros, conductores confiables, pasajeros satisfechos, D7GO, envíos, fletes, comida a domicilio',
    email: 'soporte@d7gollc.com',

    // Open Graph / Twitter
    ogTitle: 'D7GO App',
    ogDescription:
      'App de Transporte D7GO - Viajes Seguros y Confiables',
    twitterCard: 'summary_large_image',
    twitterTitle: 'D7GO App',
    twitterDescription: 'App de Transporte D7GO - Viajes Seguros y Confiables',
  },


  // ============================================
  // CARROUSEL IMAGES
  // ============================================


  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Servicios', href: '#features' },
      { name: '¿Cómo Funciona?', href: '#how-it-works' },
      // { name: 'Precios', href: '#pricing' },
      // { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Descarga la App',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Confiabilidad ',
    subheadline: 'al alcance de tu mano',
    description:
      'Viajes justos por el precio que ambos acuerden. Precios justos en envíos, fletes y comida',
    cta: {
      primary: {
        text: 'Descarga la App',
        href: '#contact',
      },
      secondary: {
        text: 'Aprende más',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '+20k', label: 'Viajes en la Ciudad' },
      { value: '92.9%', label: 'Usuarios Satisfechos' },
      { value: '+240K', label: 'miembros de la comunidad' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'A tu medida',
    subtitle:
      'Todo lo que necesitas y quieres para un viaje seguro y agradable',
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'Simple y Seguro',
    subtitle: 'Llega a tu destino en pocos pasos',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Creamos IMPACTO',
    subtitle: 'Lo que nuestros usuarios dicen de D7GO',
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Dos Aplicaciones, una sola comunidad',
    subtitle:
      'Escoge la que mejor se adapte a tus prioridades y comienza a disfrutar de viajes seguros y cómodos con D7GO App.',
    plans: [
      {
        name: 'D7GO Pasajero',
        price: '$0 COP',
        period: '/mes',
        description: 'Perfecto para viajes y envíos.',
        features: [
          'Datos en tiempo real',
          '+1,000 autos disponibles/día',
          'Soporte básico 24/7',
          'Orden de servicio ilimitadas',
        ],
        cta: {
          text: 'Descarga la App',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'D7GO Conductor',
        // price: '$349,000 COP',
        // period: '/mes',
        description: 'Crece siendo partner de D7GO',
        badge: 'SÓLO PARA CONDUCTORES',
        features: [
          'Seguro de viaje incluido',
          'Hasta 15% comision-back por mes',
          'Integraciones con otras App de ubicación',
          'Soporte Prioritario',
          'Monitoreo en tiempo real 24/7',
          'Paga mediante transferencia bancaria',
        ],
        cta: {
          text: 'Descarga tu App',
          href: '#contact',
        },
        featured: true,
      },
      // {
      //   name: 'Empresas',
      //   price: 'Personalizado /mes',
      //   period: '',
      //   description: 'Para operaciones a gran escala y necesidades empresariales personalizadas',
      //   features: [
      //     'Entregas a tu precio',
      //     'Recogida rápida',
      //     'Repartidores confiables',
      //     'Seguro incluido para cada envío',
      //     'Envía hasta a 3 direcciones con un solo repartidor',
      //     'Seguimiento en tiempo real',
      //   ],
      //   cta: {
      //     text: '¡Cotiza!',
      //     href: '#contact',
      //   },
      //   featured: false,
      // },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Todo lo que necesitas saber sobre D7GO App',
  },


  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Inicia tu viaje hoy mismo',
    subtitle:
      'Sé D7GO Driver y únete a una comunidad que viaja rápido y cómodo. Comienza en minutos con nuestro plan gratuito.',
    benefits: [
      'No se requiere tarjeta de crédito',
      'Configuración en menos de 5 minutos',
      'Cancela en cualquier momento',
      'Soporte al cliente 24/7',
    ],
    email: 'soporte@d7gollc.com',
    form: {
      cta: 'Quiero saber más',
      fields: {
        name: {
          label: 'Nombre Completo',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Correo Electrónico',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Tipo de usuario',
          placeholder: 'Pasajero / Conductor',
          required: true,
        },
        message: {
          label: '¿Por qué quieres ser un D7GO Driver?',
          placeholder: 'Cuéntanos un poco más sobre qué esperas de la App.',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Seguridad, confianza y comodidad a un precio acorde a ti.',
    columns: [
      {
        title: 'Nuestros Servicios',
        links: [
          { name: 'Viajes en la ciudad', href: '#features' },
          { name: 'Comisiones', href: '#features' },
          { name: 'Localización en tiempo real', href: '#' },
          { name: 'Envíos', href: '#' },
          { name: '¿Por qué elegir D7GO?', href: '#' },
        ],
      },
      {
        title: 'Algo más',
        links: [
          { name: 'Sobre Nosotros', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Colaboraciones', href: '#' },
          { name: '¿Tienes sugerencias?', href: '#contact' },
          // { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Política de Privacidad', href: '#' },
          { name: 'Términos de Servicio', href: '/terminos' },
          { name: 'Política de Cookie', href: '#' },
          { name: 'Seguridad', href: '#' },
          // { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      // { name: 'GitHub', href: '#', icon: 'github' },
      // { name: 'LinkedIn', href: '#', icon: 'linkedin' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
      { name: 'Facebook', href: '#', icon: 'facebook' },
      { name: 'Tiktok', href: '#', icon: 'tiktok' },
      { name: 'Twitter', href: '#', icon: 'twitter' },
    ],
    copyright: `${new Date().getFullYear()} D7GO App. Todos los derechos reservados.`,
  },
};
