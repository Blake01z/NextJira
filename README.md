# Next.js OpenJira
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d significa _detached_

* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archvio __.env.template__ a  __.env__ 

## LLenar la base de datos con informacion de pruebas
Llamar:
```
http://localhost:3000/api/seed
```