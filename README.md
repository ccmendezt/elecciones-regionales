# Prueba Técnica - Elecciones Electorales

Prueba técnica tecnólogo Elecciones Electorales - OAS Universidad Distrital.

Stack Tecnológico Utilizado:

- Back-end: **TypeScript, NestJS, Express.js, TypeORM & PostgreSQL**
- Front-end: **JavaScript, React**

**Realizado por:** _Cristian Camilo Méndez Trujillo_

## Instrucciones de Ejecución

## Creación - Base de datos

```bash
# El nombre de la base de datos es:
eleccionesregionales
```

## Instalación - Back

```bash
$ yarn install
```

## Correr Back

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Instalación - Front

```bash
$ npm install
```

## Correr Front

```bash
# development
$ npm run dev
```

## Instrucciones de peticiones a la API

El CRUD para Partidos políticos, Candidatos y Votos se realizó en su totalidad:<br />

- Peticiones para **Partidos Políticos**:

1. **Post - Inserción de nuevo partido político**:
   Utilizamos el metodo Post para crear un nuevo partido político.
   ![Creación de partido](assets/crearPartido.gif)
2. **Get - Obtener todos los partidos**:
   Utilizamos el método Get para listar todos los partidos políticos en la base de datos.
   ![Obtener partidos](assets/obtenerPartidos.gif)
3. **Patch - Editar un partido**: Utilizamos el método Patch para editar un partido político.
   ![Editar partido](assets/editarPartido.gif)
4. **Delete - Eliminar un partido**: Utilizamos el método delete para eliminar un partido político.
   ![Eliminar partido](assets/eliminarPartido.gif)

- Peticiones para **Candidatos**:

1. **Post - Inserción de nuevo candidatos**:
   Utilizamos el metodo Post para crear un nuevo candidato.
   ![Creación de partido](assets/crearCandidato.gif)
2. **Get - Obtener todos los candidatos**:
   Utilizamos el método Get para listar todos los candidatos en la base de datos.
   ![Obtener partidos](assets/obtenerCandidatos.gif)
3. **Patch - Editar un candidato**: Utilizamos el método Patch para editar un candidato.
   ![Editar partido](assets/editarCandidato.gif)
4. **Delete - Eliminar un candidato**: Utilizamos el método delete para eliminar un candidato.
   ![Eliminar partido](assets/eliminarCandidato.gif)

- Peticiones para **Votos**:

1. **Post - Inserción de nuevo candidatos**:
   Utilizamos el metodo Post para crear un nuevo candidato.
   ![Creación de partido](assets/crearCandidato.gif)
2. **Get - Obtener todos los candidatos**:
   Utilizamos el método Get para listar todos los candidatos en la base de datos.
   ![Obtener partidos](assets/obtenerCandidatos.gif)
3. **Patch - Editar un candidato**: Utilizamos el método Patch para editar un candidato.
   ![Editar partido](assets/editarCandidato.gif)
4. **Delete - Eliminar un candidato**: Utilizamos el método delete para eliminar un candidato.
   ![Eliminar partido](assets/eliminarCandidato.gif)

- **Modelo Relacional**:
  El modelo relacional utilizado para este proyecto es:
  ![Modelo Relacional](assets/ModeloRelacional.png)

### Notas Finales

**Adicionales Realizados:**

- Se realizó Frontend en React.
- Se documentó la API en Swagger
- No me fue posible desplegar el proyecto por cuestiones de tiempo.

¡Gracias!