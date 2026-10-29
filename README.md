# AquilesPC · aquilespc.com

Página web de una sola página de **Aquiles Paredes Correa**, terapeuta en adicciones y codependencia. Su objetivo es que las personas escriban por WhatsApp para agendar una sesión.

Es un sitio estático: no necesita instalar nada, ni programas especiales, ni base de datos.

## Qué hay en esta carpeta

```
index.html            La página (textos y estructura)
404.html              Página que aparece si alguien entra a una dirección que no existe
css/styles.css        Colores, letras y diseño
js/main.js            AJUSTES (Analytics, WhatsApp, pendientes) y medición de clics
img/                  Fotos y logos optimizados, en varios tamaños
favicon.ico           Ícono de la pestaña del navegador
favicon.png           Ícono para Android y para Google
apple-touch-icon.png  Ícono si alguien guarda la página en la pantalla de un iPhone
robots.txt            Permite que Google revise el sitio
sitemap.xml           Lista de páginas para Google
```

Para editar cualquier archivo: clic derecho → **Abrir con** → **Bloc de notas** (o Visual Studio Code). Al guardar, deja la codificación en **UTF-8** para que las tildes y la ñ no se rompan.

---

## 1. Ver la página en tu computador

Haz doble clic en `index.html`. Se abre en tu navegador tal como se verá publicada.

Mientras la revisas en tu computador vas a ver unas **etiquetas amarillas** («Por definir», «Confirmar respaldo»…). Marcan lo que falta completar. En **aquilespc.com no aparecen**; ver la sección 4.

---

## 2. Publicar en Netlify

Netlify tiene un plan gratuito que alcanza de sobra para esta página. Crea una cuenta en <https://app.netlify.com/signup>.

### Opción A: arrastrar la carpeta (la más simple)

1. Entra a <https://app.netlify.com/drop>.
2. Arrastra **la carpeta completa** del sitio (la que contiene `index.html`) a la página.
3. En unos segundos te da una dirección del tipo `nombre-al-azar.netlify.app`. Ya está publicada.
4. En **Site configuration → Change site name** puedes cambiarle el nombre, por ejemplo `aquilespc`.

Para **actualizar** la página después de un cambio: entra al sitio en Netlify → pestaña **Deploys** → arrastra otra vez la carpeta al recuadro que dice «Drag and drop your site output folder here».

### Opción B: conectar el repositorio (se actualiza sola)

Si la carpeta está en GitHub:

1. En Netlify: **Add new site → Import an existing project → GitHub** y elige el repositorio.
2. Deja **Build command** vacío y **Publish directory** vacío (o un punto: `.`).
3. **Deploy**. Desde ahí, cada cambio que subas a GitHub se publica solo en uno o dos minutos.

> En Vercel funciona igual: **Add New → Project**, importas el repositorio y aceptas sin configurar nada.

---

## 3. Conectar el dominio aquilespc.com

Un dominio .com se compra en un registrador (por ejemplo GoDaddy, Namecheap, Cloudflare o Hostinger; NIC Chile solo vende dominios .cl). El registrador guarda **a qué servidores DNS apunta tu dominio**, y los registros (A, CNAME, TXT) se crean en esos servidores. Lo más simple es que los maneje Netlify.

> También puedes comprar el dominio directamente en Netlify (**Domain management → Add a domain → Register**). En ese caso no hay que configurar nada: queda conectado solo.

### Paso 1: agregar el dominio en Netlify

1. En tu sitio de Netlify: **Domain management → Add a domain** → escribe `aquilespc.com` → **Verify** → **Add domain**.
2. Netlify te ofrece **«Set up Netlify DNS»**. Acéptalo. Al final te muestra **4 servidores de nombre**, parecidos a estos (copia los tuyos, no estos):
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

### Paso 2: cambiar los servidores DNS en tu registrador

1. Entra a la cuenta donde compraste el dominio → **Mis dominios** → `aquilespc.com`.
2. Busca la opción de **servidores de nombre**, **nameservers** o **DNS personalizados** (cada registrador le pone un nombre distinto).
3. Borra los que haya y escribe los 4 que te dio Netlify. Guarda.

El cambio suele tardar entre unos minutos y unas horas (a veces hasta 24 h). Cuando Netlify detecta el dominio, activa **HTTPS** (el candado) solo y gratis. Revisa en **Domain management → HTTPS** que diga «Your site has HTTPS enabled».

Netlify agrega automáticamente `www.aquilespc.com` y lo redirige a `aquilespc.com`.

### Si prefieres mantener tus DNS actuales

Si el dominio ya apunta a otro proveedor de DNS (por ejemplo, Cloudflare o un hosting), no cambies los servidores en el registrador. En ese proveedor crea:

| Tipo  | Nombre | Valor |
|-------|--------|-------|
| A     | `@` (aquilespc.com) | `75.2.60.5` |
| CNAME | `www` | `tu-sitio.netlify.app` (la dirección que te dio Netlify) |

Netlify muestra estos valores en **Domain management** al agregar el dominio. Si alguno es distinto, usa el que te muestra Netlify.

---

## 4. Dónde cambiar cada cosa

### Ajustes de `js/main.js`

Al comienzo de `js/main.js` hay un bloque llamado **AJUSTES**:

```js
var AJUSTES = {
  analyticsId: 'G-XXXXXXXXXX',
  whatsappNumero: '56934176783',
  whatsappMensaje: 'Hola Aquiles, quiero agendar una sesión de orientación.',
  mostrarPendientes: 'auto'
};
```

Cambia solo lo que está entre comillas simples `' '` y no borres las comas del final.

#### ID de Google Analytics

1. En <https://analytics.google.com> crea una propiedad para aquilespc.com y un flujo de datos **Web**.
2. Copia el **ID de medición**, que empieza con `G-`.
3. Pégalo en `analyticsId`, reemplazando `G-XXXXXXXXXX`.

Mientras diga `G-XXXXXXXXXX`, Analytics no se carga. Tampoco se carga cuando abres la página en tu computador, para no contar tus propias visitas de revisión.

**Clics en los botones.** Cada clic en WhatsApp, Instagram o TikTok envía el evento `contact_click`, con el parámetro `link_id`, que dice qué botón fue:

| `link_id` | Botón |
|-----------|-------|
| `whatsapp_hero` | «Agenda por WhatsApp» de la portada |
| `whatsapp_contacto` | «Abrir WhatsApp» de la sección Contacto |
| `whatsapp_flotante` | Botón flotante «Agendar» (solo celular) |
| `instagram` | Instagram |
| `tiktok` | TikTok |

Para ver qué botón se usa más, en Google Analytics ve a **Administrar → Definiciones personalizadas → Crear dimensión personalizada**: nombre «Botón», ámbito **Evento**, parámetro `link_id`. Si además marcas `contact_click` como **evento clave** (Administrar → Eventos), Analytics lo cuenta como una conversión.

#### Número de WhatsApp

Hay que cambiarlo en dos archivos:

1. `js/main.js` → `whatsappNumero`: código de país + número, sin `+` ni espacios. Ejemplo: `56912345678`.
2. `index.html` → usa **Edición → Reemplazar** (Ctrl + H) y reemplaza `56934176783` por el número nuevo. Aparece 6 veces: los 3 botones y los datos para Google. Después busca `+56 9 3417 6783` (el número que se lee en la sección Contacto) y cámbialo a mano.

#### Mensaje predeterminado de WhatsApp

En `js/main.js` → `whatsappMensaje`. Se escribe normal, con tildes y espacios. Ese es el texto que aparece ya escrito cuando la persona abre WhatsApp.

> Los botones de `index.html` traen una copia del mensaje original, que solo se usa si el navegador tiene JavaScript desactivado. No hace falta cambiarla.

#### Etiquetas amarillas de pendientes

`mostrarPendientes` controla todas las etiquetas amarillas a la vez:

- `'auto'` (como está ahora): se ven al revisar en tu computador o en la dirección `.netlify.app`, y **se ocultan en aquilespc.com**.
- `'no'`: no se ven nunca. Úsalo si vas a compartir la dirección `.netlify.app` antes de conectar el dominio.
- `'si'`: se ven siempre.

### Valores de las sesiones (`index.html`)

Busca `PENDIENTE: valor` (Ctrl + F). Aparece en las 3 tarjetas de Acompañamientos y en la pregunta frecuente del valor.

**En cada tarjeta**, cambia esto:

```html
<dd>Consulta el valor por WhatsApp <span class="todo">Por definir</span></dd>
```

por el valor, borrando la etiqueta amarilla:

```html
<dd>$00.000</dd>
```

**En la pregunta frecuente** «¿Cuánto vale una sesión?», reemplaza el texto de la respuesta y borra `<span class="todo">…</span>`. Luego, para que Google también la lea, agrégala al bloque `"@type": "FAQPage"` que está en el `<head>` de `index.html`, justo después de `"mainEntity": [`:

```json
{ "@type": "Question", "name": "¿Cuánto vale una sesión?", "acceptedAnswer": { "@type": "Answer", "text": "EL MISMO TEXTO DE LA RESPUESTA" } },
```

(Por ahora esa pregunta no va en el bloque para Google, porque todavía no hay precio.)

### Horario de atención (`index.html`)

Busca `PENDIENTE: horario`. Aparece en dos lugares: en la portada («Lunes a sábado») y en «Cómo reservar» («Horario: lunes a sábado.»). Al completarlo, borra también `<span class="todo">Confirmar horario exacto</span>`.

### Sección Formación (`index.html`)

Busca `PENDIENTE: respaldo`. Si se confirma la formación, borra las dos etiquetas `<span class="todo">Confirmar respaldo</span>`.

Si **no** se confirma, oculta la sección entera cambiando:

```html
<section id="formacion">
```

por:

```html
<section id="formacion" hidden>
```

Para volver a mostrarla, borra la palabra `hidden`.

### Una agenda en línea más adelante

En «Cómo reservar» (`index.html`) hay un comentario `<!-- AGENDA: … -->` que marca dónde insertar el código de una agenda (Calendly, Google Calendar, etc.) cuando la haya.

---

## 5. Dar de alta el sitio en Google Search Console

Search Console te muestra cómo aparece la página en Google y con qué búsquedas llegan las personas.

1. Entra a <https://search.google.com/search-console> con tu cuenta de Google → **Agregar propiedad**.
2. Elige **Dominio** y escribe `aquilespc.com`.
3. Google te da un registro **TXT** (empieza con `google-site-verification=`). Cópialo.
4. En Netlify: **Domains → aquilespc.com → DNS settings → Add new record**: tipo **TXT**, nombre `@` (o vacío), valor: lo que copiaste. Guarda.
5. Vuelve a Search Console y presiona **Verificar** (si falla, espera unos minutos y reintenta).
6. Ya verificado, ve a **Sitemaps** (menú izquierdo), escribe `sitemap.xml` y presiona **Enviar**.
7. Opcional: en **Inspección de URLs** escribe `https://aquilespc.com/` y presiona **Solicitar indexación**.

Google puede tardar desde unos días hasta un par de semanas en mostrar la página en los resultados.

> Si cambias textos importantes, actualiza la fecha `<lastmod>` de `sitemap.xml` (formato `AAAA-MM-DD`).

---

## 6. Pendientes

- [ ] **Valores** de la sesión de orientación y de los planes de adicciones y codependencia. Por ahora dice «Consulta el valor por WhatsApp». → sección 4, *Valores de las sesiones*.
- [ ] **Horario exacto** de atención. Por ahora solo dice «lunes a sábado». → sección 4, *Horario de atención*.
- [ ] **Respaldo de la formación**: Técnico en Rehabilitación (IPLACEX, en curso) y Publicista (Universidad del Mar). Si no se confirma, ocultar la sección. → sección 4, *Sección Formación*.
- [ ] **ID real de Google Analytics** (hoy `G-XXXXXXXXXX`). → sección 4, *ID de Google Analytics*.
- [ ] Conectar el dominio aquilespc.com en Netlify y dar de alta el sitio en Search Console. → secciones 3 y 5.
