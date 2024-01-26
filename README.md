Desafio Docker nginx com nodejs da fullcycle

Basta rodar o comando docker-compose up -d --build
(Na primeira execução tem que colocar o --build para buildar os containers, a partir da segunda execução não precisa usar - --build)

Após subir os containers com o comando acima, pode chamar a URL http://localhost:8080
(Obs. Precise colocar um delay de alguns segundos para rodar a aplicacao do node no container app, para garantir que o banco mysql do container db fosse criado antes, e a table people fosse criada dentro desse banco(container init-db). Com isso, caso rode o coamndo docker-compose citado acima e imediatamente tentar acessar a URL http://localhost:8080, pode obter um HTTP 502 - bad gateway server pois o container app,com a aplicação node ainda não subiu a aplicação. Caso isso ocorra, aguarde mais alguns segundos e tente invocar a URL novamente.)

Descrição do desafio:
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser:
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
Suba tudo em um repositório e faça a entrega.
* A linguagem de programação para este desafio é Node/JavaScript.
