import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar"; // Importamos nuestra Navbar
import { HomePage } from "@/pages/Home";       // Importamos la página de Inicio
import { ProjectsPage } from "@/pages/Projects"; // Importamos la página de Proyectos
//import { NotFoundPage } from "@/pages/NotFoundPage";  Importamos la página 404

function App() {
  return (
    // Usamos un 'flex column' para poner la navbar arriba y el contenido debajo
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      {/* 1. La Navbar siempre será visible */}
      <Navbar />

      {/* 2. Aquí se renderizará el contenido de la página actual */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          {/* <Route path="/contacto" element={<ContactoPage />} /> ...próximamente */}
        </Routes>
      </main>

      {/* (Opcional) Puedes añadir un Footer aquí abajo */}
      
    </div>
  );
}

export default App;