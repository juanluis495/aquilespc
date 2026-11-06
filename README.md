# AquilesPC · aquilespc.cl

Página web de una sola página de **Aquiles Paredes Correa**, terapeuta en adicciones y codependencia. Su objetivo es que las personas escriban por WhatsApp para agendar una sesión.

Es un sitio estático: no necesita instalar nada, ni programas especiales, ni base de datos.

## Qué hay en esta carpeta

```
index.html            La página (textos y estructura)
404.html              Página que aparece si alguien entra a una dirección que no existe
css/styles.css        Colores, letras y diseño
js/main.js            AJUSTES (Analytics, WhatsApp, pendientes) y medición de clics
img/                  Fotos, logos e imagen para compartir, optimizados
favicon.ico           Ícono de la pestaña del navegador
favicon.png           Ícono para Android y para Google
apple-touch-icon.png  Ícono si alguien guarda la página en la pantalla de un iPhone
robots.txt            Permite que Google revise el sitio
sitemap.xml           Lista de páginas para Google
README.md             Este instructivo (no se puede abrir desde aquilespc.cl)
_redirects            Regla de Netlify que esconde este instructivo en aquilespc.cl
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
- **Copia provisoria en GitHub Pages:** se usó mientras Netlify estaba en revisión y se apagó el 4 de noviembre de 2026, para no tener dos copias de la página. Si algún día hiciera falta otra vez: en el repositorio, **Settings → Pages**, rama `main` y carpeta `/ (root)`.

Las etiquetas amarillas de pendientes se ocultan en aquilespc.cl, pero **se ven** en la dirección `.netlify.app` y en tu computador. Si vas a compartir la dirección `.netlify.app`, cambia `mostrarPendientes` a `'no'`; ver la sección 5.

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

**Importante:** el dominio hay que **renovarlo en NIC Chile** antes de su fecha de expiración, que hoy es el **15 de junio de 2028**. NIC Chile avisa al correo del titular. Si no se renueva, la página deja de verse en aquilespc.cl.

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
  mostrarPendientes: 'auto',
  formacion: { rehabilitacion: true, otra: true, experiencia: true }
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

Se decidió **no publicar los valores** (6 de noviembre de 2026). Las tarjetas de Acompañamientos muestran solo en qué consiste cada plan, y la pregunta frecuente «¿Cuánto vale una sesión?» invita a escribir por WhatsApp para recibirlos.

Si algún día se quieren mostrar, en cada tarjeta se agrega esta fila al final de `<dl>…</dl>`:

```html
<dt>Valor</dt><dd>$00.000</dd>
```

Además, se cambia la respuesta de la pregunta frecuente y, para que Google también la lea, se agrega al bloque `"@type": "FAQPage"` del `<head>` de `index.html`, justo después de `"mainEntity": [`:

```json
{ "@type": "Question", "name": "¿Cuánto vale una sesión?", "acceptedAnswer": { "@type": "Answer", "text": "EL MISMO TEXTO DE LA RESPUESTA" } },
```

### Horario de atención (`index.html`)

Desde el 6 de noviembre de 2026 dice **full time** (antes decía «lunes a sábado»). Aparece en dos lugares; para cambiarlo, busca (Ctrl + F) estos textos:

- En la portada: `Atención full time`
- En «Cómo reservar»: `Horario de atención:`

### Sección Formación (`index.html`)

La sección tiene tres bloques, en este orden:

| Bloque | Qué dice |
|--------|----------|
| `rehabilitacion` | **Formación en rehabilitación:** Técnico en Rehabilitación, IPLACEX (en curso). |
| `otra` | **Otra formación:** Publicista con mención en Creatividad, Universidad del Mar. |
| `experiencia` | **Experiencia de vida:** un año de tratamiento residencial. |

**Para ocultar un bloque**, abre `js/main.js` y, en los AJUSTES, cambia su `true` por `false`:

```js
formacion: {
  rehabilitacion: true,
  otra: false,          // este bloque ya no se ve
  experiencia: true
}
```

**Para ocultar la sección completa**, deja los tres en `false`: si no queda ningún bloque, la sección desaparece sola. La mención a publicista de «Quién soy» se mantiene igual.

Cuando se confirme el respaldo de un bloque, en `index.html` busca `Confirmar respaldo` y borra su etiqueta `<span class="todo">Confirmar respaldo</span>`.

> Un bloque oculto sigue escrito en `index.html`. Si nunca se va a mostrar, también se puede borrar de ahí su línea `<div data-cred="…">…</div>`.

### Imagen para compartir (`img/og-1200x630.jpg`)

Es la imagen que aparece al compartir el enlace por WhatsApp, Facebook u otras redes. Mide 1200×630, el formato estándar de esas vistas previas, así que no se recorta. Se armó a partir del banner original: el banner completo al centro y el mismo fondo, desenfocado, arriba y abajo.

Para cambiarla, súbela **con otro nombre** (por ejemplo `og-1200x630-v2.jpg`) y cambia ese nombre en los 3 lugares de `index.html` donde aparece `og-1200x630.jpg`. Con un nombre nuevo, WhatsApp y las redes no siguen usando la imagen guardada de antes. Ojo: los enlaces que ya se compartieron en un chat conservan la vista previa que tenían.

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

La lista completa, para ir marcando lo que se termina, está en la **hoja de ruta**: <https://claude.ai/artifact/Uc7EiPXhaqbkbHSuEjaqUo>. Es privada: para que otra persona la vea, hay que compartirla desde el botón **Compartir** de esa página. Lo principal:

**Lo que tiene que confirmar Aquiles**

- [ ] **Respaldo de la formación**: Técnico en Rehabilitación (IPLACEX, en curso) y Publicista (Universidad del Mar). Lo que no se confirme se oculta, bloque por bloque. → sección 5, *Sección Formación*.

**Publicación y Google**

- [ ] **Revisar la página en el celular** y en modo incógnito, probando los botones de WhatsApp, Instagram y TikTok.
- [ ] **ID real de Google Analytics** (hoy `G-XXXXXXXXXX`), con la dimensión `link_id` y `contact_click` como evento clave. → sección 5, *ID de Google Analytics*.
- [ ] **Dar de alta el sitio en Google Search Console** y enviar el sitemap. → sección 6.

**Más adelante**

- [ ] **Renovar el dominio** en NIC Chile antes del 15 de junio de 2028 (lo hace Aquiles). → sección 4.

**Hecho**

- [x] Página construida a partir del borrador aprobado (26 de octubre de 2026).
- [x] Dominio aquilespc.cl conectado a Netlify, con HTTPS (29 de octubre de 2026).
- [x] Página pública en aquilespc.cl, sin pedir inicio de sesión a los visitantes (4 de noviembre de 2026).
- [x] Copia de GitHub Pages apagada (4 de noviembre de 2026).
- [x] Valores: no se publican; las tarjetas muestran solo en qué consiste cada plan (6 de noviembre de 2026).
- [x] Horario de atención: full time (6 de noviembre de 2026).
- [x] Imagen para compartir de 1200×630 (6 de noviembre de 2026).
