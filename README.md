# API REST con Node.js y Firebase 

La API levanta datos de una base de datos de Firebase, donde se puede agregar, buscar, o ver todos los productos de la misma.

## Instalación

```shell
npm install

```
## Tecnologías utilizadas: 
    `-bcrypt
    `-body-parser`
    `-cors`
    `-dotenv`
    `-express`
    `-firebase`
    `-jsonwebtoken`

# URL en render: https://api-node-ivanh.onrender.com

# Rutas disponibles:


## En GET:
".api/products" = Se despliegan todos los productos
".api/products/:id = se localiza el producto de un determinado id
".api/products/search$name=... = Funcionalidad de busqueda 

## En POST:
".api/products" = Se carga un nuevo producto con un JSON en el body indicando nombre, precio (price) y categorias (categories en forma de lista)

## En PUT:
".api/products/:id = Se carga en el body las modificaciones para el id solicitado.

## En DELETE:
".api/products/:id = Se elimina por delete el id seleccionado

# Autenticación:
## Las credenciales como administrador son: 

# email: "user@email.com"
# password: "strongPass123"

# En POST:
# ".api/login" Se pasa en un JSON las credenciales y se obtiene el token válido
