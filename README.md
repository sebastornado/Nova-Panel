# NovaPanel - SaaS Admin & Support Dashboard

This project is a feature-rich frontend UI for a SaaS application's admin and support dashboard. It is designed to manage customers, subscriptions, support tickets, and technical documentation, providing a centralized hub for customer service and operational management.

---

## (English)

### Project Overview

**NovaPanel** is a modern, responsive, and intuitive dashboard built with the latest web technologies. It serves as the control center for a fictional SaaS company, enabling support agents and administrators to efficiently handle user management, billing inquiries, internal collaboration, and knowledge sharing. The interface is designed to be clean, professional, and highly functional, ready for a production environment.

### Key Features

*   **Comprehensive Dashboard:** An overview of key metrics like revenue, subscriptions, sales, and active users, including charts for ticket resolution and response times.
*   **User Management:** A complete user management system to view, add, edit, and delete users, with detailed user profile pages.
*   **Team Collaboration:** Dedicated sections for team-based chat and an internal feed for announcements and knowledge sharing.
*   **Customer Support:** A direct user chat interface and a robust support ticket management system.
*   **Knowledge Base:** A built-in documentation system with clickable articles, images, and a content table, inspired by professional KB tools.
*   **Billing & Subscriptions:** A section to manage subscription plans, payment methods, and view invoice history.
*   **Integrations:** A visually represented page for connecting third-party services like Salesforce, Slack, and Stripe.
*   **Customization:** Includes light/dark mode and multiple color theme options.
*   **Internationalization (i18n):** Supports English and Spanish languages.
*   **Fully Responsive:** Designed to work seamlessly across desktop, tablet, and mobile devices.

### Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI/Generative Functionality:** [Google Genkit](https://firebase.google.com/docs/genkit)
*   **Charting:** [Recharts](https://recharts.org/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **State Management:** React Context API

### Getting Started & Deployment

To get this project running locally or to deploy it, follow these steps.

**Prerequisites:**
*   Node.js (v18 or later recommended)
*   npm, yarn, or pnpm

**1. Clone the repository:**
```bash
git clone <your-repository-url>
cd <repository-directory>
```

**2. Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

**3. Run the development server:**
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

**4. Deployment:**
This Next.js application is ready for production. You can deploy it on any platform that supports Node.js applications, such as:

*   **Vercel:** The easiest way to deploy a Next.js app. Simply connect your Git repository, and Vercel will handle the build and deployment process automatically.
*   **Netlify:** Similar to Vercel, Netlify offers seamless deployment for Next.js projects.
*   **Firebase App Hosting:** Use the `apphosting.yaml` file included in the project for a direct deployment to Firebase.
*   **Docker / Self-hosting:** You can build a production-ready container using the standard `next build` command and serve the output from the `.next` folder.

A typical build command is:
```bash
npm run build
```
After building, you can start the production server with:
```bash
npm run start
```

---

## (Español)

### Descripción del Proyecto

**NovaPanel** es un panel de control (dashboard) de UI frontend, moderno y rico en funcionalidades, para la administración y soporte de una aplicación SaaS. Está diseñado para gestionar clientes, suscripciones, tickets de soporte y documentación técnica, proporcionando un centro de operaciones para el servicio al cliente y la gestión operativa.

### Características Principales

*   **Dashboard Integral:** Una vista general con métricas clave como ingresos, suscripciones, ventas y usuarios activos, incluyendo gráficos para la resolución de tickets y tiempos de respuesta.
*   **Gestión de Usuarios:** Un sistema completo para ver, añadir, editar y eliminar usuarios, con páginas de perfil detalladas.
*   **Colaboración de Equipo:** Secciones dedicadas para chat por equipos y un feed interno para anuncios e intercambio de conocimientos.
*   **Soporte al Cliente:** Una interfaz de chat directo con usuarios y un sistema robusto para la gestión de tickets de soporte.
*   **Base de Conocimientos:** Un sistema de documentación integrado con artículos interactivos, imágenes y tabla de contenidos, inspirado en herramientas profesionales de KB.
*   **Facturación y Suscripciones:** Una sección para gestionar planes de suscripción, métodos de pago y ver el historial de facturas.
*   **Integraciones:** Una página visual para conectar servicios de terceros como Salesforce, Slack y Stripe.
*   **Personalización:** Incluye modo claro/oscuro y múltiples temas de color.
*   **Internacionalización (i18n):** Soporte para los idiomas inglés y español.
*   **Totalmente Responsivo:** Diseñado para funcionar perfectamente en dispositivos de escritorio, tabletas y móviles.

### Tecnologías Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Componentes de UI:** [ShadCN UI](https://ui.shadcn.com/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Funcionalidad IA/Generativa:** [Google Genkit](https://firebase.google.com/docs/genkit)
*   **Gráficos:** [Recharts](https://recharts.org/)
*   **Gestión de Formularios:** [React Hook Form](https://react-hook-form.com/)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Gestión de Estado:** React Context API

### Instalación y Despliegue

Para ejecutar este proyecto localmente o para desplegarlo, sigue estos pasos.

**Prerrequisitos:**
*   Node.js (v18 o superior recomendado)
*   npm, yarn, o pnpm

**1. Clona el repositorio:**
```bash
git clone <url-de-tu-repositorio>
cd <directorio-del-repositorio>
```

**2. Instala las dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

**3. Ejecuta el servidor de desarrollo:**
```bash
npm run dev
```
Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.

**4. Despliegue:**
Esta aplicación de Next.js está lista para producción. Puedes desplegarla en cualquier plataforma que soporte aplicaciones de Node.js, como:

*   **Vercel:** La forma más fácil de desplegar una app de Next.js. Simplemente conecta tu repositorio de Git y Vercel se encargará del proceso de build y despliegue automáticamente.
*   **Netlify:** Similar a Vercel, Netlify ofrece un despliegue fluido para proyectos de Next.js.
*   **Firebase App Hosting:** Usa el archivo `apphosting.yaml` incluido en el proyecto para un despliegue directo en Firebase.
*   **Docker / Auto-alojado:** Puedes construir un contenedor listo para producción usando el comando estándar `next build` y servir el contenido de la carpeta `.next`.

Un comando de build típico es:
```bash
npm run build
```
Después del build, puedes iniciar el servidor de producción con:
```bash
npm run start
```
