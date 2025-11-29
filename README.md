# 🤖 Portfolio Personal - Carlos Valladares

Bienvenido al repositorio de mi portfolio personal. Este proyecto es una aplicación web moderna diseñada para mostrar mi trayectoria como **Técnico en Robótica**, mis proyectos de desarrollo de software y mi interés en la Inteligencia Artificial.

🔗 **Ver Demo en Vivo:** [https://konki-port.vercel.app](https://konki-port.vercel.app)

## 🚀 Sobre el Proyecto

Este portfolio ha sido construido desde cero utilizando las últimas tecnologías del ecosistema React. No es solo una web estática, sino una demostración de habilidades de desarrollo frontend, integrando diseño de interfaz (UI), animaciones y elementos 3D interactivos.

### Características Principales
* **Diseño Moderno:** Interfaz limpia y minimalista usando componentes de **Shadcn UI**.
* **Modo Oscuro:** Tema oscuro por defecto con una paleta de colores personalizada "Stone".
* **Elementos 3D:** Integración de **Three.js** y **React Three Fiber** para visualizaciones interactivas (Robot Orb).
* **Animaciones:** Transiciones suaves y micro-interacciones.
* **Responsive:** Totalmente adaptado a dispositivos móviles y escritorio.

## 🛠️ Stack Tecnológico

Este proyecto utiliza herramientas de vanguardia:

* **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Configuración moderna con `@theme`)
* **Componentes UI:** [Shadcn/ui](https://ui.shadcn.com/) (basado en Radix UI)
* **3D & Gráficos:**
    * `@react-three/fiber` & `@react-three/drei` (Three.js para React)
    * `lucide-react` (Iconografía)
* **Routing:** React Router v7
* **Despliegue:** Vercel (CI/CD automático)

## 📦 Instalación y Uso Local

Si quieres ejecutar este proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Konki29/konki-port.git](https://github.com/Konki29/konki-port.git)
    cd konki-port
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abrir `http://localhost:5173/` en tu navegador.

## 📂 Estructura del Proyecto

```text
src/
├── assets/        # Imágenes, SVGs y modelos (robot.svg, face.jpg)
├── components/    # Componentes reutilizables
│   ├── 3d/        # Componentes Three.js (RobotCanvas)
│   └── ui/        # Componentes base de Shadcn (Button, Card, Badge)
├── pages/         # Páginas principales (Home, Projects)
├── lib/           # Utilidades (cn helper)
└── index.css      # Configuración de Tailwind v4 y temas
