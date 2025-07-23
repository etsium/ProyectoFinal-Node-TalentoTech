# ProyectoFinal Node TalentoTech
# Api Rest en Node.js

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    {
        "id": 1,
        "nombre": "Cerveza Lager",
        "precio": 3.50,
        "stock": 200,
        "imagen": "/assets/imagenes/cerveza/Lager.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza lager refrescante con un sabor suave y ligeramente amargo.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 5.0,
        "origen": "Alemania"
    },
    {
        "id": 2,
        "nombre": "Cerveza IPA",
        "precio": 4.50,
        "stock": 150,
        "imagen": "/assets/imagenes/cerveza/Ipa.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza India Pale Ale con notas afrutadas y un amargor pronunciado.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 7.0,
        "origen": "Estados Unidos"
    }
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene las letras indicadas.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=Cerveza`
- **Respuesta ejemplo:**

```json
    {
        "id": 1,
        "nombre": "Cerveza Lager",
        "precio": 3.50,
        "stock": 200,
        "imagen": "/assets/imagenes/cerveza/Lager.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza lager refrescante con un sabor suave y ligeramente amargo.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 5.0,
        "origen": "Alemania"
    }
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
    {
        "id": 1,
        "nombre": "Cerveza Lager",
        "precio": 3.50,
        "stock": 200,
        "imagen": "/assets/imagenes/cerveza/Lager.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza lager refrescante con un sabor suave y ligeramente amargo.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 5.0,
        "origen": "Alemania"
    }
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto. (Los datos tienen que estar completos menos la imagen).
- **Body (JSON):**

```json
    {
        "nombre": "Cerveza Amper",
        "precio": 3.50,
        "stock": 200,
        "imagen": "/assets/imagenes/cerveza/Amper.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza lager refrescante con un sabor suave y ligeramente amargo.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 5.0,
        "origen": "Local"
    }
```

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**
s
```json
    { "nombre": "Producto Actualizado", "precio": 50 }
```

- **Respuesta ejemplo:**

```json
    {
        "id": 3,
        "nombre": "Producto Actualizado",
        "precio": 50,
        "stock": 200,
        "imagen": "/assets/imagenes/cerveza/Lager.webp",
        "categoria": "Cerveza",
        "descripcion": "Cerveza lager refrescante con un sabor suave y ligeramente amargo.",
        "tamanio": "500",
        "alcohol": true,
        "volumen_alcohol": 5.0,
        "origen": "Alemania"
    },
```


### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado


## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules