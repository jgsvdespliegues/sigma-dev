# 🚀 Instrucciones de Configuración - Sigma Dev

## ⚡ CONFIGURACIÓN RÁPIDA

### 1️⃣ Obtener Site Key de Cloudflare Turnstile

1. Ve a: https://dash.cloudflare.com/?to=/:account/turnstile
2. Clic en "Add site"
3. Configura:
   - **Site name:** Sigma Dev Contact
   - **Domain:** sigma-dev.com.ar (o déjalo vacío para localhost)
   - **Widget Mode:** Managed
4. Copia tu **Site Key** (empieza con `0x4...`)

---

### 2️⃣ Reemplazar Site Key en el código

Abre el archivo: `index.html`

Busca la línea 212 (aproximadamente):
```html
<div class="cf-turnstile"
     data-sitekey="TU_SITE_KEY_AQUI"
     data-theme="light"
     data-size="normal">
</div>
```

Reemplaza `TU_SITE_KEY_AQUI` con tu Site Key real:
```html
<div class="cf-turnstile"
     data-sitekey="0x4AAAAAAAabc123..."
     data-theme="light"
     data-size="normal">
</div>
```

---

### 3️⃣ Configurar Formspree (Opcional - Recomendado)

Para que Formspree valide el captcha en el backend:

1. Ve a: https://formspree.io/forms/xkgqlgjb/settings
2. En "Integrations" o "Spam Protection"
3. Busca "Cloudflare Turnstile"
4. Actívalo y pega tu **Secret Key** de Cloudflare

---

### 4️⃣ Probar localmente

```bash
# Opción 1: Usar Live Server (VS Code)
# Instala la extensión "Live Server" y haz clic derecho en index.html → "Open with Live Server"

# Opción 2: Usar Python
cd "d:\0 Diseños\Landing Sigma"
python -m http.server 8000

# Opción 3: Usar Node.js
cd "d:\0 Diseños\Landing Sigma"
npx http-server -p 8000
```

Abre: http://localhost:8000

---

### 5️⃣ Desplegar en Vercel

Sigue la guía completa en: [DEPLOYMENT.md](DEPLOYMENT.md)

**Resumen rápido:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/landing-sigma-dev.git
git push -u origin main
```

Luego:
1. Ve a https://vercel.com
2. Import repository
3. Deploy
4. Configura dominio personalizado en Settings → Domains

---

## 🎨 Personalización del Captcha

### Cambiar tema (claro/oscuro)
En `index.html` línea 213:
```html
data-theme="dark"  <!-- oscuro -->
data-theme="light" <!-- claro (actual) -->
```

### Cambiar tamaño
```html
data-size="normal"   <!-- normal (actual) -->
data-size="compact"  <!-- compacto -->
```

### Modo invisible (sin widget visible)
En Cloudflare Dashboard, cambia el Widget Mode a "Invisible"

---

## 🔍 Verificar que funciona

1. Abre el formulario de contacto
2. Deberías ver el widget de Turnstile (cuadro con checkbox)
3. Completa el formulario
4. Haz clic en "Enviar"
5. Debe aparecer el modal de confirmación
6. Verifica en Cloudflare Dashboard → Turnstile → Analytics

---

## 🆘 Solución de problemas

### No aparece el widget
- Verifica que el Site Key sea correcto
- Abre la consola del navegador (F12) y busca errores
- Asegúrate de que el script de Turnstile se carga

### "Invalid domain"
- En Cloudflare, asegúrate de que el dominio esté configurado
- O usa dominio en blanco para permitir cualquier dominio (solo desarrollo)

### El formulario se envía sin completar el captcha
- Verifica que el código JavaScript esté funcionando
- Revisa la consola del navegador

---

## 📞 Recursos

- Documentación Turnstile: https://developers.cloudflare.com/turnstile/
- Dashboard Turnstile: https://dash.cloudflare.com/?to=/:account/turnstile
- Formspree Docs: https://help.formspree.io/hc/en-us
