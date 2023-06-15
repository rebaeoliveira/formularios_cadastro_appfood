<h1 align="center">Formulários para cadastro AppFood</h1>
<h3 align="center">Criação de arquivos para cadastro de /categories e /products com um botão para salvar os dados no banco de dados mongo.</h2>

## Preparação do ambiente de desenvolvimento no Visual Studio Code:
+ Instalar o pacote npm (é criada a pasta node_modules)
    - `npm install`
+ Instalar o pacote yarn
    - `npm i -g yarn`
+ Inicializar o programa
    - `yarn dev`

## Caso ocorra erro ao conectar no mongoDB:
### (1ª opção):
+ Abrir um novo terminal no Visual Studio Code
    - `docker ps -a`
    - `docker run -p 27017:27017 mongo`
+ Voltar ao 1º terminal
+  Inicializar o programa
    - `yarn dev`
### (2ª opção):
+  Docker e Yarn
    - `docker ps -a`
    - `docker rm (CONTEINER ID)`
    - `docker run -p 27017:27017 mongo`
    - `yarn dev`
### (3ª opção):
+  Docker e Yarn
    - `docker run --name mongo --volume /save/mongo:/data/db -p 27017:27017 -d mongo`
    - `yarn dev`

# Para cadastrar uma categoria:
+ Abrir o site http://127.0.0.1:5500/categories.html;
+ Preencher os campos "nome" com o nome da categoria e "ícone" com o ícone da categoria;
+ Clicar em cadastrar.

# Para cadastrar um produto:
+ Abrir o site http://127.0.0.1:5500/products.html;
+ Preencher os campos "nome" com o nome do produto, "descrição" com a descrição do produto, "imagem" escolher uma imagem do produto localizada na pasta uploads, "preço" com o valor do produto e "categoria"
com a categoria do produto;
+ Clicar em cadastrar.

# Para visualizar as categorias cadastradas:
+ Abrir o site http://localhost:4000/categories.

# Para visualizar os produtos cadastrados:
+ Abrir o site http://localhost:4000/products.
