EVALUACION TIPO SABER PRO / ECAES - 45 PREGUNTAS

CONTENIDO
- index.html: evaluacion web.
- google_apps_script.gs: receptor para guardar resultados en Google Sheets.

QUE HACE
- 45 preguntas, en el orden del cuadernillo.
- Seleccion multiple con unica respuesta.
- No permite finalizar con preguntas sin responder.
- Al finalizar muestra puntaje, porcentaje, y solo la respuesta que marco el estudiante.
- NO muestra la respuesta correcta.
- Puede enviar nombre, codigo/grupo, puntaje y P1-P45 a Google Sheets.

PUBLICACION GRATUITA
1. Crea un repositorio publico en GitHub.
2. Sube index.html.
3. Ve a Settings > Pages.
4. Source: Deploy from a branch.
5. Branch: main. Folder: /(root).
6. Guarda y espera la URL publicada.

GOOGLE SHEETS
1. Crea una hoja de calculo y abre Extensiones > Apps Script.
2. Pega el contenido de google_apps_script.gs y guarda.
3. Deploy > New deployment > Web app.
4. Execute as: Me. Who has access: Anyone.
5. Copia la URL que termina en /exec.
6. Abre index.html y reemplaza PEGA_AQUI_LA_URL_DE_GOOGLE_APPS_SCRIPT por esa URL.
7. Vuelve a subir index.html a GitHub.

IMPORTANTE
La informacion de cada intento se guarda en la pestaña Resultados de la hoja.
