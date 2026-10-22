# 🏡 InmoPortal - Catálogo Inmobiliario SPA

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Aplicación de una sola página (**SPA**) para la búsqueda y gestión de propiedades inmobiliarias en Chile, desarrollada con **React**, **React Router v6/II**, **Context API** y **Bootstrap**.

---

## 🚀 Características Principales

El proyecto cubre en su totalidad los conceptos clave de **React Router II** aplicados a un caso real de negocio:

* **🧭 Menú con Detección de Ruta Activa (`<NavLink>`):**  
  Implementación de enlaces inteligentes que detectan la ubicación actual del usuario mediante la propiedad `isActive`, aplicando estilos visuales dinámicos (`.active` en verde oscuro subrayado y `.inactive` en gris).

* **⚡ Redireccionamiento Programático (`useNavigate`):**  
  Buscador en la vista principal con selector desplegable de propiedades. Valida que el usuario seleccione una opción válida y lo redirige automáticamente por código hacia la ficha técnica (`/propiedades/:id`).

* **🎯 Rutas Dinámicas y Ficha de Detalle (`useParams`):**  
  Captura dinámica del parámetro `:id` desde la URL para buscar la información en una base de datos desacoplada (`src/data/propiedades.js`). Muestra la ficha técnica dentro de una tarjeta estructurada de **React Bootstrap** (`<Card>`) con renderizado condicional si el código no existe o no se especifica.

* **🛡️ Rutas Protegidas (`UserContext` + `<Navigate />`):**  
  Protección de la vista privada del corredor inmobiliario (`/admin`). Si no existe una sesión activa (`user === null`), el guardia de seguridad `<Navigate to="/login" />` redirige automáticamente a la pantalla de acceso.

* **🔑 Autenticación y Control de Sesión:**  
  Formulario de inicio de sesión con campos controlados (`nombre` y `correo`) que alimenta el estado global del contexto. La vista de administración saluda al corredor por su nombre y correo, y provee un botón de **Cerrar Sesión** que restablece el contexto y expulsa automáticamente al usuario.

---

## 🛠️ Tecnologías Utilizadas

* **React 19** - Librería para la interfaz de usuario.
* **React Router DOM v6** - Sistema de navegación y enrutamiento SPA.
* **Bootstrap 5 & React-Bootstrap** - Diseño adaptable, tarjetas (`Card`), badges y utilidades CSS.
* **Vite** - Herramienta de compilación ultrarrápida.
* **JavaScript (ES6+)** - Desestructuración, funciones flecha, template strings y métodos inmutables (`find`, `trim`).

---

## 📂 Estructura del Proyecto

```text
inmo-portal/
├── src/
│   ├── components/
│   │   └── Navbar.jsx           # Barra de navegación superior con NavLink e isActive
│   ├── context/
│   │   └── UserContext.jsx      # Proveedor del estado global de sesión (user, setUser)
│   ├── data/
│   │   └── propiedades.js       # Catálogo de propiedades desacoplado
│   ├── views/
│   │   ├── Home.jsx             # Buscador de propiedades con useNavigate()
│   │   ├── Propiedades.jsx      # Vista detalle con useParams() y Card de Bootstrap
│   │   ├── Administracion.jsx   # Panel privado para corredores autenticados
│   │   └── Login.jsx            # Formulario de inicio de sesión conectado al contexto
│   ├── App.jsx                  # Configuración de BrowserRouter, Routes, Route y Navigate
│   ├── index.css                # Estilos personalizados y clases .active / .inactive
│   └── main.jsx                 # Punto de entrada envolviendo App con UserProvider
├── package.json
└── README.md
```

---

## 💻 Instalación y Uso Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/jleival/portal-inmobiliaria.git
cd portal-inmobiliaria
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` para interactuar con la aplicación.

---

## 🧪 Flujo de Pruebas en la Aplicación

1. **Navegación:** Haz clic en las opciones del menú (`Home`, `Propiedades`, `Administración`, `Login`) para observar cómo la clase activa se actualiza sin recargar la página.
2. **Búsqueda:** Desde el Home, selecciona la *"Propiedad #2 (Depto Loft en Providencia)"* y presiona **"Buscar Propiedad"**. Observa la URL `/propiedades/2` y la tarjeta renderizada.
3. **Manejo de Errores:** Cambia manualmente la URL a `/propiedades/99` o haz clic en "Propiedades" en el menú para comprobar el renderizado condicional de la alerta amarilla.
4. **Protección de Rutas:** Haz clic en **"Administración"** sin iniciar sesión; el sistema te redirigirá instantáneamente a `/login`.
5. **Sesión Activa:** Ingresa tu nombre y correo en el Login y presiona **"Iniciar Sesión"**. Accederás a `/admin` con un saludo personalizado. Presiona **"Cerrar Sesión"** para comprobar la salida automática.

---

## 👤 Autor

* **Jorge Leiva**
  * GitHub: [@jleival](https://github.com/jleival)
  * Repositorio: [portal-inmobiliaria](https://github.com/jleival/portal-inmobiliaria)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
