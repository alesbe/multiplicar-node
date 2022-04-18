# Multiplication tables made with NodeJS

Allow you to create multiplication tables with the base and limit that you want.

![Table](https://i.imgur.com/roT4Xtw.png)

## Install
Install (inside project folder):

```
npm install
```

## Usage
```
node app [operation] [args]
```

### listar
Displays the table

```
node app listar --b [--l]
```

### crear
Creates a file in `./tablas` with the multiplication table.

```
node app crear --b [--l]
```

### help
Prints app help

```
node app --help
```

## Argumentos

### -base
Specifies the base of the table

Alias: `-b`

### -limite
Specifies the limit of the table.

Alias: `-l`
