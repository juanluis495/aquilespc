# AquilesPC · aquilespc.cl

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

Mientras la revisas en tu computador vas a ver unas **etiquetas amarillas** («Por definir», «Confirmar respaldo»…). Marcan lo que falta completar. En **aquilespc.cl no aparecen**; ver la sección 5.

---

## 2. Dónde está publicada

- **Página oficial:** <https://aquilespc.cl>, en Netlify (proyecto `bejewelled-creponne-e350ad`).
- **Repositorio (público):** <https://github.com/juanluis495/aquilespc>. Netlify está conectado a este repositorio: cada cambio que se sube se publica solo en aquilespc.cl en 1 o 2 minutos.
- **Copia provisoria:** <https://juanluis495.github.io/aquilespc/> (GitHub Pages). Se usó mientras Netlify estaba en revisión. Cuando aquilespc.cl ya se vea públicamente, apágala para no tener dos copias: en el repositorio, **Settings → Pages → Unpublish site**.

Las etiquetas amarillas de pendientes se ocultan en aquilespc.cl, pero **se ven** en las direcciones `.netlify.app` y `github.io`. Si vas a compartir una de esas, cambia `mostrarPendientes` a `'no'`; ver la sección 5.

**Cambiar un texto sin instalar nada:** en el repositorio, abre el archivo (por ejemplo `index.html`), presiona el lápiz (**Edit this file**), haz el cambio y presiona **Commit changes**. En 1 o 2 minutos aparece en aquilespc.cl.

---

## 3. Publicar en Netlify

Ya está hecho con la **opción B** (conectando el repositorio). Esto queda como referencia, por si algún día hay que armarlo de nuevo en otra cuenta.

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

## 4. Dominio aquilespc.cl (NIC Chile)

Así quedó configurado (29 de octubre de 2026):

- **Registro:** en [NIC Chile](https://www.nic.cl), a nombre de **Aquiles Paredes Correa**. Solo él puede entrar a modificarlo.
- **Servidores de nombre (DNS):** los de Netlify:
  ```
  dns1.p03.nsone.net
  dns2.p03.nsone.net
  dns3.p03.nsone.net
  dns4.p03.nsone.net
  ```
  Los registros del dominio (la dirección de la página, `www` y, más adelante, el TXT de Google) se administran en Netlify, en **Dominios → aquilespc.cl → DNS**, no en NIC Chile.
- **`www.aquilespc.cl`** lleva automáticamente a `aquilespc.cl`, y `http://` lleva a `https://`.
- **HTTPS (el candado):** certificado gratuito de Let's Encrypt que Netlify renueva solo.

**Importante:** el dominio hay que **renovarlo en NIC Chile** antes de su fecha de expiración. NIC Chile avisa al correo del titular. Si no se renueva, la página deja de verse en aquilespc.cl.

### Si algún día hay que volver a conectarlo

1. En Netlify: **Gestión de dominios → Añadir dominio** → `aquilespc.cl` → acepta **«Configurar Netlify DNS»** y copia los 4 servidores de nombre que te muestre.
2. Aquiles entra a nic.cl → **Mis dominios** → `aquilespc.cl` → modificar **Servidores de nombre**, borra los que haya y escribe los 4 de Netlify. Si pide dirección IP, se deja en blanco.
3. Esperar entre unos minutos y unas horas. Netlify activa el HTTPS solo; se puede revisar en **Gestión de dominios → HTTPS**.

> Ojo: **aquiles.cl** (sin «pc») es de otra empresa. No se debe agregar en Netlify.

---

## 5. Dónde cambiar cada cosa

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

1. En <https://analytics.google.com> crea una propiedad para aquilespc.cl y un flujo de datos **Web**.
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

- `'auto'` (como está ahora): se ven al revisar en tu computador o en la dirección `.netlify.app`, y **se ocultan en aquilespc.cl**.
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

## 6. Dar de alta el sitio en Google Search Console

Search Console te muestra cómo aparece la página en Google y con qué búsquedas llegan las personas.

1. Entra a <https://search.google.com/search-console> con tu cuenta de Google → **Agregar propiedad**.
2. Elige **Dominio** y escribe `aquilespc.cl`.
3. Google te da un registro **TXT** (empieza con `google-site-verification=`). Cópialo.
4. En Netlify: **Domains → aquilespc.cl → DNS settings → Add new record**: tipo **TXT**, nombre `@` (o vacío), valor: lo que copiaste. Guarda.
5. Vuelve a Search Console y presiona **Verificar** (si falla, espera unos minutos y reintenta).
6. Ya verificado, ve a **Sitemaps** (menú izquierdo), escribe `sitemap.xml` y presiona **Enviar**.
7. Opcional: en **Inspección de URLs** escribe `https://aquilespc.cl/` y presiona **Solicitar indexación**.

Google puede tardar desde unos días hasta un par de semanas en mostrar la página en los resultados.

> Si cambias textos importantes, actualiza la fecha `<lastmod>` de `sitemap.xml` (formato `AAAA-MM-DD`).

---

## 7. Pendientes

- [ ] **Valores** de la sesión de orientación y de los planes de adicciones y codependencia. Por ahora dice «Consulta el valor por WhatsApp». → sección 5, *Valores de las sesiones*.
- [ ] **Horario exacto** de atención. Por ahora solo dice «lunes a sábado». → sección 5, *Horario de atención*.
- [ ] **Respaldo de la formación**: Técnico en Rehabilitación (IPLACEX, en curso) y Publicista (Universidad del Mar). Si no se confirma, ocultar la sección. → sección 5, *Sección Formación*.
- [ ] **ID real de Google Analytics** (hoy `G-XXXXXXXXXX`). → sección 5, *ID de Google Analytics*.
- [ ] **Hacer pública la página en Netlify.** Al 29 de octubre de 2026 aquilespc.cl todavía pide iniciar sesión en Netlify a los visitantes. Revisar en **Configuración del proyecto** la protección de visitantes (debe quedar sin protección).
- [ ] **Apagar GitHub Pages** cuando aquilespc.cl ya se vea públicamente. → sección 2.
- [ ] **Dar de alta el sitio en Google Search Console** y enviar el sitemap. → sección 6.
- [x] Dominio aquilespc.cl conectado a Netlify, con HTTPS (29 de octubre de 2026).
