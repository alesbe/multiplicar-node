# Tablas de multiplicar con NodeJS
Esta aplicación ha sido creada con fines prácticos, siguiendo un curso de NodeJS.

Permite crear tablas de multiplicar, usando la base y el limite que desees desde la linea de comandos.

![Tabla](https://i.imgur.com/roT4Xtw.png)

## Instalación
Dentro de la carpeta del proyecto, ejecutar el siguiente comando para instalar las dependencias:

```
npm install
```

## Uso
```
node app [operación] [args]
```

### listar
Lista la tabla de multiplicar

```
node app listar --b [--l]
```

### crear
Crea un archivo de texto en `./tablas` con la tabla de multiplicar.

```
node app crear --b [--l]
```

### help
Imprime la ayuda de la aplicación

```
node app --help
```

## Argumentos
`--base || --b`: Especifica la base de la tabla.
`--limite || --l`: Especifica el límite de la tabla.