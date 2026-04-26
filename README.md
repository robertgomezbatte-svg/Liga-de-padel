# Información Legal · App de Ligas de Pádel

Sitio web sencillo con los textos legales para una plataforma de creación y gestión de ligas de pádel: Términos de Uso, Política de Privacidad, Política de Cookies y Aviso Legal.

## Estructura

```
legal-site/
├── index.html      # Página principal con todas las secciones
├── styles.css      # Estilos (paleta verde inspirada en la pista)
├── script.js       # Navegación entre secciones
└── README.md
```

## Cómo publicarla en GitHub Pages

1. **Crea un repositorio nuevo** en GitHub (por ejemplo, `padel-legal` o `terminos`).
2. **Sube los archivos** `index.html`, `styles.css` y `script.js` al repositorio.
   - Desde la web: "Add file > Upload files".
   - O por terminal:
     ```bash
     git init
     git add .
     git commit -m "Inicial"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
     git push -u origin main
     ```
3. **Activa GitHub Pages**:
   - Ve a `Settings` > `Pages` en tu repositorio.
   - En "Source", elige la rama `main` y la carpeta `/ (root)`.
   - Guarda los cambios.
4. En unos segundos tu sitio estará en:
   `https://TU-USUARIO.github.io/TU-REPO/`

## Personalización

Antes de publicar, abre `index.html` y reemplaza los siguientes marcadores:

- `[Nombre de la app]` → el nombre de tu plataforma de pádel
- `[Tu nombre o empresa]` / `[Tu nombre o razón social]` → titular del servicio
- `[Fecha]` → fecha de la última actualización
- `[Dirección]` / `[Dirección completa]` → tu domicilio
- `[NIF/CIF]` → identificación fiscal (si aplica)
- `[País]` / `[Ciudad/País]` → jurisdicción aplicable
- `[URL]` → URL de tu web/app
- `tucorreo@ejemplo.com` → tu correo de contacto
- En el apartado **6. Cuotas, Pagos y Premios** elige entre "actúa" o "no actúa" como intermediario, según corresponda.

## Apartados específicos para pádel ya incluidos

- ✅ Creación de ligas y rol del organizador
- ✅ Reglas de conducta deportiva (no falseo de resultados, no trampas en ranking)
- ✅ Resultados, rankings y resolución de disputas
- ✅ Cuotas de inscripción y premios
- ✅ Limitación de responsabilidad por lesiones, accidentes o reservas de pista
- ✅ Datos deportivos específicos (nivel, mano dominante, posición drive/revés, club)
- ✅ Visibilidad del perfil entre jugadores de una misma liga
- ✅ Geolocalización opcional para encontrar ligas cercanas

## Aviso importante

Estas plantillas son un punto de partida adaptado al contexto de una app deportiva, pero no sustituyen el asesoramiento legal. Antes de publicar en producción, especialmente si vas a gestionar pagos, datos de menores o ligas con premios, te recomiendo que un profesional revise el contenido para garantizar el cumplimiento del **RGPD**, la **LOPDGDD** (España), la **LSSI-CE** y cualquier otra normativa que aplique en tu jurisdicción.
