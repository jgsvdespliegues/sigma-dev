# 🚀 Guía de Despliegue - Sigma Dev Landing Page

## Requisitos previos
- Cuenta de GitHub
- Cuenta de Vercel (gratuita)
- Dominio sigma-dev.com.ar con DNS en Cloudflare

---

## 📦 PASO 1: Subir el proyecto a GitHub

### 1.1 Inicializar Git (si no lo has hecho)
```bash
cd "d:\0 Diseños\Landing Sigma"
git init
git add .
git commit -m "Initial commit - Sigma Dev Landing Page"
```

### 1.2 Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `landing-sigma-dev` (o el que prefieras)
3. Configuración: **Público** o **Privado** (ambos funcionan con Vercel)
4. NO inicialices con README, .gitignore o licencia
5. Haz clic en "Create repository"

### 1.3 Conectar y subir tu código
```bash
git remote add origin https://github.com/TU-USUARIO/landing-sigma-dev.git
git branch -M main
git push -u origin main
```

---

## 🌐 PASO 2: Desplegar en Vercel

### 2.1 Crear cuenta e importar proyecto
1. Ve a https://vercel.com/signup
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "Add New..." → "Project"
4. Selecciona tu repositorio `landing-sigma-dev`
5. Haz clic en "Import"

### 2.2 Configurar el proyecto
En la página de configuración:

**Framework Preset:** Other
**Root Directory:** `./` (dejar por defecto)
**Build Command:** (dejar vacío)
**Output Directory:** (dejar vacío)
**Install Command:** (dejar vacío)

Haz clic en **Deploy**

### 2.3 Esperar el despliegue
- Vercel construirá y desplegará tu sitio
- Te dará una URL temporal: `https://tu-proyecto.vercel.app`
- Verifica que funcione correctamente

---

## 🔗 PASO 3: Conectar tu dominio personalizado con Cloudflare

### 3.1 Agregar dominio en Vercel
1. En tu proyecto de Vercel, ve a "Settings" → "Domains"
2. Agrega `sigma-dev.com.ar`
3. Vercel te mostrará los registros DNS que necesitas configurar

### 3.2 Configurar DNS en Cloudflare

**Opción A: CNAME (Recomendado)**
1. Ve a tu panel de Cloudflare
2. Selecciona tu dominio `sigma-dev.com.ar`
3. Ve a "DNS" → "Records"
4. Agrega los siguientes registros:

```
Tipo: CNAME
Nombre: @
Destino: cname.vercel-dns.com
Proxy status: DNS only (nube gris)
TTL: Auto
```

```
Tipo: CNAME
Nombre: www
Destino: cname.vercel-dns.com
Proxy status: DNS only (nube gris)
TTL: Auto
```

**Opción B: A Record (Alternativa)**
Si CNAME no funciona para el dominio raíz:
```
Tipo: A
Nombre: @
IPv4: 76.76.21.21
Proxy status: DNS only (nube gris)
TTL: Auto
```

### 3.3 Esperar propagación DNS
- Puede tomar entre 5 minutos a 48 horas
- Usualmente funciona en 5-15 minutos
- Verifica en: https://dnschecker.org

### 3.4 Verificar en Vercel
1. Vuelve a Vercel → Settings → Domains
2. Deberías ver un ✅ verde en tu dominio
3. Vercel automáticamente configurará SSL/HTTPS

---

## 🔒 PASO 4: Activar SSL/HTTPS en Cloudflare (Opcional pero recomendado)

### 4.1 Configurar SSL
1. En Cloudflare, ve a "SSL/TLS"
2. Modo de cifrado: **Full** o **Full (strict)**
3. Activa "Always Use HTTPS"
4. Activa "Automatic HTTPS Rewrites"

### 4.2 Habilitar proxy de Cloudflare (Opcional)
Si quieres usar las protecciones de Cloudflare:
1. Ve a DNS → Records
2. Cambia el proxy status a "Proxied" (nube naranja)
3. Esto activará el CDN y protección DDoS de Cloudflare

---

## ✅ VERIFICACIÓN FINAL

Visita tu dominio:
- https://sigma-dev.com.ar ✅
- https://www.sigma-dev.com.ar ✅

Ambos deberían funcionar con HTTPS automático.

---

## 🔄 ACTUALIZAR EL SITIO

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará automáticamente los cambios y redesplegará el sitio en 30-60 segundos.

---

## 🛠️ SOLUCIÓN DE PROBLEMAS

### El dominio no funciona después de 1 hora
- Verifica que los registros DNS en Cloudflare sean correctos
- Asegúrate de que el proxy status sea "DNS only" (gris)
- Usa `nslookup sigma-dev.com.ar` para verificar DNS

### Los archivos CSS/JS no cargan
- Verifica las rutas en index.html (deben ser `./styles.css` y `./script.js`)
- Asegúrate de que todos los archivos estén en la raíz del proyecto
- Vercel distingue mayúsculas/minúsculas en las rutas

### Error 404 en la página
- Verifica que `vercel.json` esté en la raíz del proyecto
- Verifica que `index.html`, `styles.css` y `script.js` estén en la raíz
- Asegúrate de que la carpeta `assets/` esté en la raíz

---

## 📞 SOPORTE

- Documentación Vercel: https://vercel.com/docs
- Documentación Cloudflare: https://developers.cloudflare.com
- Comunidad Vercel: https://github.com/vercel/vercel/discussions
