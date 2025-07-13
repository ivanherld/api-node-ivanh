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
   ` ```.api/products``` = Se despliegan todos los productos 
    ```.api/products/:id``` = se localiza el producto de un determinado id
    ```.api/products/search$name=...``` = Funcionalidad de busqueda `

La funcionalidad de busqueda tiene diferentes queries a probar:

- `search$soloMax=true` -> Busca el máximo en precio  
- `search$soloMin=true` -> Busca el mínimo en precio  
- `search$min=valor` -> Busca los productos de precio mayor al declarado  
- `search$max=valor` -> Busca los productos de precio menor al declarado  
- `search$min=valor&max=valor` -> Busca los productos dentro del rango declarado  
- `search$name=..` -> Busca por nombre de producto  

    

## En POST:
```.api/products``` = Se carga un nuevo producto con un JSON en el body indicando nombre, precio (price) y categorias (categories en forma de lista)

## En PUT:
```.api/products/:id``` = Se carga en el body las modificaciones para el id solicitado.

## En DELETE:
```.api/products/:id``` = Se elimina por delete el id seleccionado

# Autenticación:
## Las credenciales como administrador son (En el código la contraseña esta hasheada): 

email: "user@email.com"
password: "strongPass123"

# En POST:

`.api/login`  
Se pasa en un JSON las credenciales y se obtiene el token válido

```json
{
  "id": 1,
  "email": "user@email.com",
  "password": "strongPass123"
}

