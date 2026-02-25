# Portfolio Personal — Carlos Valladares

Repositorio del portfolio personal. Aplicación web construida con React, TypeScript y Three.js para presentar mi trayectoria como Ingeniero en Robótica, proyectos de desarrollo de software e investigación en Inteligencia Artificial.

**Demo:** [https://konki-port.vercel.app](https://konki-port.vercel.app)

---

## Sobre el Proyecto

Portfolio desarrollado desde cero con el ecosistema React moderno. Integra diseño editorial minimalista, tipografía serif/monospace, y elementos 3D interactivos en WebGL.

### Características

- Estética NERV Minimalista y Editorial (Crimson Pro + JetBrains Mono)
- Elementos 3D con Three.js y React Three Fiber (wireframe hologram)
- Paleta de color reducida: carbón `#0a0a0a` + ámbar técnico `#ffb800`
- Componentes base Shadcn UI (Radix UI)
- Diseño responsive (mobile + desktop)
- Scanlines sutiles y micro-animaciones

---

## Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| Core | React 19, TypeScript |
| Build | Vite 7 |
| Estilos | Tailwind CSS v4 (`@theme` config) |
| Componentes | Shadcn/ui (Radix UI) |
| 3D | `@react-three/fiber`, `@react-three/drei` |
| Iconografía | Lucide React |
| Routing | React Router v7 |
| Despliegue | Vercel (CI/CD) |

---

## Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Konki29/konki-port.git
cd konki-port

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173/`.

---

## Estructura del Proyecto

```text
src/
├── assets/        # Recursos estáticos (SVGs, imágenes)
├── components/
│   ├── 3d/        # Componentes Three.js (RobotCanvas)
│   └── ui/        # Componentes base Shadcn (Button, Card, Badge)
├── pages/         # Páginas (Home, Projects)
├── lib/           # Utilidades (cn helper)
└── index.css      # Tokens de diseño y configuración Tailwind v4
```
