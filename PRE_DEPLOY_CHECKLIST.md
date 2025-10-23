# ✅ Checklist Pre-Deploy - Sigma Dev

Verifica estos puntos ANTES de hacer el deploy a producción.

---

## 📋 CHECKLIST DE ARCHIVOS

### ✅ Estructura de Archivos Correcta

```
✓ index.html              (en la raíz)
✓ styles.css              (en la raíz)
✓ script.js               (en la raíz)
✓ vercel.json             (en la raíz)
✓ .gitignore              (en la raíz)
✓ assets/                 (carpeta en la raíz)
  ✓ icon/Icon.png
  ✓ logo/fondoNegro/SigmaLogoAnimadoFBlack2.gif
  ✓ footer/logoFooterBlancoTransparente.png
```

---

## 🔍 VERIFICAR RUTAS EN index.html

### ✅ CSS y JavaScript

Abre `index.html` y verifica que las rutas sean correctas:

```html
<!-- ✅ CORRECTO -->
<link rel="stylesheet" href="./styles.css">
<script src="./script.js"></script>

<!-- ❌ INCORRECTO -->
<link rel="stylesheet" href="/vFinal/styles.css">
<script src="/vFinal/script.js"></script>
```

**Líneas a verificar:**
- Línea 12: `href="./styles.css"`
- Línea 260: `src="./script.js"`

---

## 🔑 CLOUDFLARE TURNSTILE

### ✅ Site Key Configurado

1. **Obtener Site Key:**
   - Ve a: https://dash.cloudflare.com/?to=/:account/turnstile
   - Copia tu Site Key

2. **Verificar en index.html (línea ~212):**
   ```html
   <!-- ❌ NO DEPLOYAR ASÍ -->
   <div class="cf-turnstile"
        data-sitekey="TU_SITE_KEY_AQUI">

   <!-- ✅ DEBE SER -->
   <div class="cf-turnstile"
        data-sitekey="0x4AAAAAAAabc123...">
   ```

3. **Configurar Secret Key en Formspree:**
   - Ve a: https://formspree.io/forms/xkgqlgjb/settings
   - Integrations → Cloudflare Turnstile
   - Pega tu Secret Key

---

## 🌐 VERIFICAR vercel.json

Abre `vercel.json` y verifica que sea:

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*\\.(css|js|png|jpg|jpeg|gif|svg|ico))",
      "dest": "/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

**NO debe tener:** `vFinal` en ninguna parte

---

## 🎯 PRUEBA LOCAL

### ✅ Probar antes de deploy

```bash
# Opción 1: Live Server (VS Code)
# Clic derecho en index.html → "Open with Live Server"

# Opción 2: Python
cd "d:\0 Diseños\Landing Sigma"
python -m http.server 8000
```

### ✅ Verificar funcionamiento:

- [ ] La página carga correctamente
- [ ] Los estilos CSS se aplican
- [ ] El logo animado del hero se muestra
- [ ] El navbar funciona
- [ ] Los enlaces de navegación hacen scroll suave
- [ ] El formulario muestra el widget de Turnstile
- [ ] El formulario se envía y muestra el modal
- [ ] El botón de WhatsApp es visible
- [ ] El footer se ve correctamente
- [ ] NO hay errores en la consola (F12)

---

## 📧 FORMSPREE

### ✅ Verificar configuración

1. **Email destino:**
   - Verifica que `https://formspree.io/f/xkgqlgjb` sea tu formulario
   - O reemplaza con tu propio endpoint de Formspree

2. **Turnstile configurado:**
   - Settings → Integrations → Cloudflare Turnstile
   - Secret Key pegada correctamente

---

## 🔐 SEGURIDAD

### ✅ Verificar antes de hacer público

- [ ] No hay credenciales hardcodeadas en el código
- [ ] El `.gitignore` está configurado
- [ ] Las API keys están en variables de entorno (si aplica)
- [ ] La Site Key de Turnstile es pública (está bien exponerla)
- [ ] La Secret Key NO está en el código frontend

---

## 🚀 GIT & GITHUB

### ✅ Preparar repositorio

```bash
# 1. Verificar que estés en la carpeta correcta
cd "d:\0 Diseños\Landing Sigma"

# 2. Verificar archivos que se van a subir
git status

# 3. Verificar que NO se suban archivos innecesarios
# Debe estar en .gitignore:
# - .vercel
# - .DS_Store
# - .vscode/

# 4. Verificar el commit
git log --oneline -5
```

---

## 📦 VERCEL DEPLOY

### ✅ Configuración en Vercel

Cuando importes el proyecto en Vercel, usa:

```
Framework Preset:    Other
Root Directory:      ./ (por defecto)
Build Command:       (vacío)
Output Directory:    (vacío)
Install Command:     (vacío)
```

**NO configurar:** Build settings especiales

---

## 🌍 DNS CLOUDFLARE

### ✅ Registros DNS

Después del deploy en Vercel, configura:

```
Tipo: CNAME
Nombre: @
Destino: cname.vercel-dns.com
Proxy status: DNS only (☁️ gris)
TTL: Auto
```

```
Tipo: CNAME
Nombre: www
Destino: cname.vercel-dns.com
Proxy status: DNS only (☁️ gris)
TTL: Auto
```

---

## ✅ VERIFICACIÓN POST-DEPLOY

### Después del deploy, verifica:

1. **URL de Vercel funciona:**
   - [ ] https://tu-proyecto.vercel.app carga correctamente

2. **Dominio personalizado:**
   - [ ] https://sigma-dev.com.ar funciona
   - [ ] https://www.sigma-dev.com.ar funciona
   - [ ] Redirecciona automáticamente a HTTPS

3. **Funcionalidades:**
   - [ ] Navegación smooth scroll
   - [ ] Formulario con Turnstile funciona
   - [ ] Modal aparece al enviar
   - [ ] Formulario llega a tu email
   - [ ] WhatsApp flotante funciona
   - [ ] Todas las imágenes cargan

4. **Responsive:**
   - [ ] Mobile (< 768px) se ve bien
   - [ ] Tablet (768px - 992px) se ve bien
   - [ ] Desktop (> 992px) se ve bien

5. **Consola del navegador:**
   - [ ] Sin errores en la consola (F12)
   - [ ] Sin warnings críticos

---

## 🎨 OPCIONAL - MEJORAS POST-DEPLOY

- [ ] Configurar Analytics (Google Analytics, Vercel Analytics)
- [ ] Agregar Favicon personalizado
- [ ] Configurar Open Graph meta tags para redes sociales
- [ ] Agregar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Activar Cloudflare Proxy (☁️ naranja) para CDN y protección

---

## 📞 EN CASO DE PROBLEMAS

### Recursos de ayuda:

- **Documentación Vercel:** https://vercel.com/docs
- **Documentación Cloudflare:** https://developers.cloudflare.com
- **Soporte Formspree:** https://help.formspree.io

### Comandos útiles de debugging:

```bash
# Ver logs de Vercel
vercel logs

# Verificar DNS
nslookup sigma-dev.com.ar

# Verificar conectividad
ping sigma-dev.com.ar

# Ver certificado SSL
openssl s_client -connect sigma-dev.com.ar:443
```

---

## ✅ LISTO PARA DEPLOY

Si todos los checkboxes están marcados, ¡estás listo para hacer deploy!

```bash
git add .
git commit -m "Ready for production deployment"
git push -u origin main
```

Luego ve a Vercel y conecta el repositorio.

---

**¡Éxito con tu deploy! 🚀**
