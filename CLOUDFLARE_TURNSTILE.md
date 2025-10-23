# 🔒 Guía de Implementación - Cloudflare Turnstile

## ¿Qué es Cloudflare Turnstile?
Es un captcha invisible y gratuito de Cloudflare que reemplaza a reCAPTCHA. Es más rápido, respeta la privacidad y no requiere resolver puzzles molestos.

---

## 🚀 PASO 1: Obtener las claves de Turnstile

### 1.1 Acceder al Dashboard de Cloudflare
1. Ve a https://dash.cloudflare.com
2. Inicia sesión con tu cuenta
3. En el menú lateral, busca "Turnstile"
   - O ve directamente a: https://dash.cloudflare.com/?to=/:account/turnstile

### 1.2 Crear un nuevo sitio
1. Haz clic en "Add site" o "Agregar sitio"
2. Completa el formulario:
   - **Site name:** Sigma Dev Contact Form
   - **Domain:** sigma-dev.com.ar (o déjalo en blanco para desarrollo local)
   - **Widget Mode:** Managed (recomendado para comenzar)

### 1.3 Copiar las claves
Después de crear el sitio, verás dos claves:

```
Site Key (Clave pública): 0x4AAAA... (ejemplo)
Secret Key (Clave secreta): 0x4AAAA... (ejemplo)
```

⚠️ **IMPORTANTE:**
- **Site Key:** Se usa en el HTML (frontend) - es pública
- **Secret Key:** NUNCA la expongas en el frontend - solo en backend

---

## 💻 PASO 2: Implementar en tu formulario

Ya he preparado el código con placeholders. Necesitarás:

1. Reemplazar `TU_SITE_KEY_AQUI` en el archivo HTML
2. Configurar la verificación en el backend (Formspree ya lo soporta)

---

## 🔧 PASO 3: Configurar Formspree para validar Turnstile

### Opción A: Formspree con validación (Plan Gratuito)

1. Ve a https://formspree.io/forms/xkgqlgjb/settings
2. En "Spam Protection", activa "Cloudflare Turnstile"
3. Pega tu **Secret Key** de Turnstile

Formspree automáticamente validará el token del captcha.

### Opción B: Validación manual en backend (si usas tu propio backend)

Si en el futuro usas tu propio servidor, necesitarás validar así:

```javascript
// Backend (Node.js ejemplo)
const verifyToken = async (token) => {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: 'TU_SECRET_KEY',
      response: token
    })
  });
  const data = await response.json();
  return data.success;
};
```

---

## 🎨 MODOS DE WIDGET

### Managed (Recomendado)
- Cloudflare decide automáticamente si mostrar el captcha
- Invisible para usuarios confiables
- Muestra desafío solo a usuarios sospechosos

### Non-Interactive
- Siempre invisible
- Mejor UX pero menos seguridad

### Invisible
- Similar a Non-Interactive
- Para casos donde la seguridad extrema no es crítica

---

## ✅ VERIFICACIÓN

Después de implementar:

1. Abre tu formulario
2. Llena los campos
3. Deberías ver el widget de Turnstile (o será invisible según el modo)
4. Envía el formulario
5. Verifica en el Dashboard de Cloudflare → Turnstile → Analytics

---

## 🛠️ SOLUCIÓN DE PROBLEMAS

### El widget no aparece
- Verifica que el script de Turnstile esté cargado
- Revisa la consola del navegador para errores
- Asegúrate de que el Site Key sea correcto

### El formulario no se envía
- Verifica que Formspree tenga configurado Turnstile
- Revisa que la Secret Key en Formspree sea correcta

### "Invalid site key"
- Verifica que el dominio en Cloudflare coincida con tu dominio real
- Durante desarrollo local, puedes usar un Site Key de prueba

---

## 🔑 CLAVES DE PRUEBA (Solo desarrollo)

Cloudflare proporciona claves de prueba:

```
Site Key (siempre pasa): 1x00000000000000000000AA
Site Key (siempre falla): 2x00000000000000000000AB
Site Key (fuerza desafío): 3x00000000000000000000FF
```

Usa estas solo para desarrollo local.

---

## 📊 ANALYTICS

En el dashboard de Cloudflare Turnstile podrás ver:
- Total de verificaciones
- Tasa de éxito/fallo
- Intentos de bots bloqueados
- Análisis por país/región
