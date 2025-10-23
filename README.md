# 🚀 Sigma Dev - Landing Page

Landing page profesional para Sigma Dev, una empresa de desarrollo de software a medida.

---

## 📁 Estructura del Proyecto

```
Landing Sigma/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript
├── vercel.json             # Configuración de Vercel
├── .gitignore              # Archivos ignorados por Git
│
├── assets/                 # Recursos multimedia
│   ├── icon/
│   │   └── Icon.png
│   ├── logo/
│   │   ├── fondoNegro/
│   │   │   └── SigmaLogoAnimadoFBlack2.gif
│   │   ├── fondoWhite/
│   │   └── transparente/
│   ├── navbar/
│   └── footer/
│       └── logoFooterBlancoTransparente.png
│
└── Documentación/
    ├── DEPLOYMENT.md           # Guía de despliegue en Vercel
    ├── CLOUDFLARE_TURNSTILE.md # Guía de Cloudflare Turnstile
    └── SETUP_INSTRUCTIONS.md   # Instrucciones de configuración
```

---

## ✨ Características

- ✅ **Diseño Responsive:** Mobile-first y totalmente adaptable
- ✅ **Scroll Suave:** Navegación fluida entre secciones
- ✅ **Formulario de Contacto:** Integrado con Formspree
- ✅ **Modal de Confirmación:** Feedback visual al enviar mensajes
- ✅ **Anti-Spam:** Cloudflare Turnstile integrado
- ✅ **Optimizado para SEO:** Meta tags y estructura semántica
- ✅ **WhatsApp Flotante:** Botón de contacto directo
- ✅ **Animaciones Suaves:** Efectos hover y transiciones

---

## 🚀 Inicio Rápido

### 1. Configurar Cloudflare Turnstile

1. Obtén tu Site Key en: https://dash.cloudflare.com/?to=/:account/turnstile
2. Abre `index.html` y busca la línea 212
3. Reemplaza `TU_SITE_KEY_AQUI` con tu Site Key real

### 2. Probar localmente

**Opción A - Live Server (VS Code):**
- Instala la extensión "Live Server"
- Clic derecho en `index.html` → "Open with Live Server"

**Opción B - Python:**
```bash
cd "d:\0 Diseños\Landing Sigma"
python -m http.server 8000
```

Abre: http://localhost:8000

### 3. Desplegar en Vercel

Sigue la guía completa en [DEPLOYMENT.md](DEPLOYMENT.md)

**Resumen:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/landing-sigma.git
git push -u origin main
```

Luego en Vercel:
1. Import repository
2. Configuración:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (vacío)
   - Output Directory: (vacío)
3. Deploy

---

## 🔧 Configuración de Dominio

### DNS en Cloudflare

Configura estos registros en tu panel de Cloudflare:

```
Tipo: CNAME
Nombre: @
Destino: cname.vercel-dns.com
Proxy: DNS only (gris)
```

```
Tipo: CNAME
Nombre: www
Destino: cname.vercel-dns.com
Proxy: DNS only (gris)
```

Tiempo de propagación: 5-15 minutos (máximo 48 horas)

---

## 📝 Modificar el Sitio

### Actualizar contenido

1. Edita `index.html` para cambiar textos, imágenes, enlaces
2. Edita `styles.css` para modificar colores, fuentes, estilos
3. Edita `script.js` para agregar/modificar funcionalidades

### Actualizar en producción

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

Vercel detectará automáticamente los cambios y redesplegará en ~30 segundos.

---

## 🎨 Paleta de Colores

```css
Primario (Azul Vibrante): #3C8CE7
Azul Oscuro (Nav):        #1A374D
Pastel Azul:              #9BB8D0
Gris Claro:               #F8F9FA
Negro Suave:              #212529
```

---

## 📧 Formulario de Contacto

El formulario está integrado con:
- **Formspree:** https://formspree.io/f/xkgqlgjb
- **Cloudflare Turnstile:** Protección anti-spam

### Configurar Formspree

1. Ve a: https://formspree.io/forms/xkgqlgjb/settings
2. En "Integrations" → "Cloudflare Turnstile"
3. Pega tu Secret Key de Cloudflare

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (ES6+)** - Funcionalidades interactivas
- **Bootstrap 5.3.3** - Framework CSS
- **Font Awesome 6.5.2** - Iconos
- **Google Fonts (Poppins)** - Tipografía
- **Cloudflare Turnstile** - Captcha invisible
- **Formspree** - Gestión de formularios
- **Vercel** - Hosting y despliegue

---

## 📄 Documentación

- [**DEPLOYMENT.md**](DEPLOYMENT.md) - Guía completa de despliegue
- [**CLOUDFLARE_TURNSTILE.md**](CLOUDFLARE_TURNSTILE.md) - Configuración del captcha
- [**SETUP_INSTRUCTIONS.md**](SETUP_INSTRUCTIONS.md) - Instrucciones rápidas

---

## 🔒 Seguridad

- ✅ HTTPS automático vía Vercel
- ✅ Cloudflare Turnstile para anti-spam
- ✅ Protección DDoS vía Cloudflare (opcional)
- ✅ Headers de seguridad configurados

---

## 📊 Rendimiento

- ✅ Imágenes optimizadas
- ✅ CSS minificado
- ✅ Carga asíncrona de scripts
- ✅ CDN global via Vercel
- ✅ Lazy loading de imágenes

---

## 📞 Contacto

- **Email:** contacto@sigma-dev.com.ar
- **WhatsApp:** +54 9 11 5843 0181
- **Sitio Web:** https://sigma-dev.com.ar

---

## 📜 Licencia

© 2025 Sigma Dev - Todos los derechos reservados

Desarrollado por Juan Gabriel Soto Valenzuela

---

## 🤝 Soporte

Para reportar problemas o solicitar ayuda:
- Abre un issue en el repositorio
- Contacta a través del formulario en el sitio
- Envía un correo a contacto@sigma-dev.com.ar
