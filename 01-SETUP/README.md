setup
npm i typescript -g
create a file called and compile
## check the complited version to make sure it uses ES6 
    output var name: var
    target: es2016
## create a src and build foldertsc 
get a typescript config => tsc --init

## in tsc init:

rootDit: './src
outDir: './build'

## only compine from src
    include: "src"

!deleting ts files doesn't delete js files automatically