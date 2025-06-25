# 🏋️‍♂️ FullFit System

**FullFit System** es una plataforma web diseñada para optimizar la gestión de gimnasios, comenzando con Full Fitness Circasia. El sistema digitaliza el control de pagos, acceso de clientes, gestión de entrenadores, eventos y productos. Está dividido en 3 etapas de desarrollo para facilitar su implementación por fases.

---

## 🚀 Características por Etapas

### 🧱 Etapa 1 – Sistema básico (MVP)
- Registro de mensualidades.
- Gestión de clientes y su estado (activo/inactivo).
- Recordatorios automáticos por WhatsApp.
- Calendario de eventos (solo visible para clientes activos).
- Perfil de entrenadores personales y asignación de rutinas.

### 📊 Etapa 2 – Gestión de acceso y panel administrativo
- Generación de código QR o PIN único por cliente.
- Verificación de acceso rápida desde recepción o celular.
- Dashboard con métricas: clientes activos, vencimientos y pagos recientes.
- Sistema de roles (admin, portero, entrenador).

### 🧾 Etapa 3 – Automatización total y expansión
- Integración con lector de huella (opcional).
- Integración con pasarelas de pago (Nequi, Bancolombia, tarjeta).
- Módulo de productos (catálogo, stock, ventas).
- Aplicación web progresiva (tipo app móvil).

---

## 🧪 Tecnologías utilizadas

- **Frontend**: React.js + TailwindCSS
- **Backend**: Node.js + Express.js
- **Base de datos**: MySQL
- **Despliegue**: Vercel / Render / Railway
- **Notificaciones**: WhatsApp Business API (integración futura)
- **Autenticación y roles**: JWT, RBAC

---

## 🧑‍💻 Roles del sistema

- **Administrador**: Control total del sistema, métricas, pagos y gestión.
- **Entrenador**: Visualiza clientes asignados y crea rutinas personalizadas.
- **Portero**: Verifica accesos mediante QR/PIN.
- **Cliente**: Visualiza estado de membresía, eventos y rutinas asignadas.

---

## 📁 Estructura del proyecto

