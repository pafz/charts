<img src="http://www.franbosquet.com/wp-content/uploads/ironhack_logonegro.png" width="80" style="float:right">

# Valencia Digital Talent | Materiales live coding + challenge 

En este repositorio encontrarás todo lo relacionado con el Live Coding realizado por [Germán Álvarez](https://www.linkedin.com/in/german-alvarez-dev/) durante el [Valencia digital Talent](https://www2.ironhack.com/valenciadigitaltalent): 

1. Grabación del Live coding
2. Materiales utilizados: códigos desarrollados y slides proyectadas
3. Challenge para optar a una beca acumulable del +5%

### 1.- Grabación Live Coding
En [este enlace](https://drive.google.com/file/d/1xT5l91DE0F85LXW4S5mIB_zklVokn9yO/view?usp=sharing) puedes econtrar la grabación del código que desarrollamos durante el evento, con cada uno de los pasos que seguimos hasta crear el panel de gráficos con ChartJS.

### 2.- Materiales
Todos los materiales del evento se encuentran en este mismo repositorio. Para descargártelos, haz click en el botón verde de la esquina superior izquierda (`Code`) y selecciona `Download zip`. Para visualizar el panel basta con abrir el archivo `index.html` del directorio `charts` con tu navegador web.

- __Códigos desarrollados__: puedes encontrar un directorio `charts-panel` con el panel de gráficos que desarrollamos. Para visualizarlo basta con abrir su el archivo `index.html` en tu navegador web. 

- __Slides__: puedes encontrar un directorio `slides` con los slides proyectados en formato PDF.

### 3.- Challenge
¿Te animas a enfrentarte por tu cuenta a un reto de creación de gráficos con [ChartJS](https://www.chartjs.org/)? Dale!🔥 🔥

Aquí tienes todos los detalles que necesitas para ello, así como las instrucciones para enviarme tu resolución __antes del martes 19 de abril__ y optar a una beca extendida del 5%, acumulable a las disponibles por parte de nuestros partners valencianos. Para resolverlo, puedes usar tu editor de código favorito o [Visual Studio Code](https://code.visualstudio.com/download), que es el software con el que desarrollé el producto.

Trabajaremos con una API diferente, de alimentos, que puedes ver [en este enlace](https://multiapi-app.herokuapp.com/foods). Una vez hayas revisado tanto la grabación como mis códigos, estás list@ para comenzar. 

#### Iteración 1: entorno de trabajo

Resolverás el reto en el directorio `challenge` de este repositorio donde encontrarás, entre otros, los dos archivos con los que vas a trabajar:
- Archivo `index.html` con el HTML listo para que comiences a incluir tus charts, y que puedes abrir con tu navegador.
- Archivo `script.js` en el directorio `js`, donde te he dejado los primeros pasos ya desarrollados:
  - Líneas 1-2: configuraciones por defecto para el color de texto de todos tus charts.
  - Líneas 5-7: llamda a la API de alimentos y traspaso de datos a la función `printFoodsCharts`
  - Líneas 11-16: función `printFoodsCharts`, desde la que enviaremos los alimentos a las funciones que renderizarán cada gráfico. Te dejo, a modo de ayuda, los datos de los tres primeros alimentos ya almacenados en variables y enviados como argumentos a la primera función.
  - Líneas 20-26: función `printCaloriesChart`, la primera de las funciones que necesitarás para renderizar los gráficos. Ya recibe los tres primeros alimentos, y te he dejado comentados tres mensajes de consola que te servirán de ayuda. Puedes descomentarlos quitando las `//` que les preceden, y verlos en el navegador, en la consola de desarrollo (botón derecho -> inspeccionar -> pestaña Console).

Analiza este entorno de trabajo y haz las pruebas pertinentes para asegurarte que tienes el control.

#### Iteración 2: comparativa calórica 

El HTML está preparado para renderizar el primer gráfico sobre el ID `chart1`. Esto lo harás en la función `printCaloriesChart`, que ya está creada. Este primer gráfico de tipo `bar` compara las calorías de los __seis__ primeros alimentos. Para ello, tendrás que enviar a la función los otros tres restantes, y hacer uso de la propiedad `name` y `kcal` de cada alimento para componer su objeto de datos. 

Este es el aspecto que debería tener tu chart:

<img width="1326" alt="image" src="https://user-images.githubusercontent.com/46670724/162581797-d3321103-2c10-4543-8d1e-721b9a5bc5a9.png">


#### Iteración 3: comparativas generales 

Para esta iteración tendrás que renderizar tres gráficos en los IDs `chart2`, `chart3` y `chart4` del HTML. Es por ello que necesitarás crear tres funciones, una para cada gráfico. 

Estos son los pasos:
1. Crea tu función para renderizar el chart y envíale los datos de los mismos desde la función `printFoodsCharts`, tal y como hicimos para la función `printCaloriesChart`.
2. En cada función de renderizado, crea un chart de tipo `doughnut` con un objeto de datos donde las `labels` sean los nombres de cada alimento, y los `data` sean sus proteínas, grasa y calcio, respectivamente. 

Las tres funciones son casi idénticas, por lo que comienza trabajando en la primera y replícala una vez terminada para crear las otras dos restantes. Solo tendrás que modificar la propiedad de proteínas, grasa y calcio.

Este es el aspecto que debería tener tus charts:

<img width="1326" alt="image" src="https://user-images.githubusercontent.com/46670724/162582046-be19316a-c2e8-46d4-850e-0613485540c7.png">

#### Iteración 4: comparativa combinada  

El HTML está preparado para renderizar el último gráfico sobre el ID `chart5`. Crea una función para ello e incluye en su objeto `data` dos `datasets` diferentes: uno para los datos calóricos y otro para los datos protéicos. 

Este ejemplo es similar al último que realizamos en el evento, excepto porque no es necesario modificar el `type` de ninguno de los `datasets`.

Este es el aspecto que debería tener tu chart:

<img width="1326" alt="image" src="https://user-images.githubusercontent.com/46670724/162581825-3ea88e7d-a6f7-4f08-a7e8-3ad5d63caa35.png">


#### Envíame tu trabajo

Envíame tu resolución __antes del martes 19 de abril__ o bien a través de un repositorio de Github, o bien a través de un servicio como Google Drive si no tienes conocimientos de GIT. 

Puedes remitirme el enlace a mi email: german.alvarez@ironhack.com

¡Ánimo!

