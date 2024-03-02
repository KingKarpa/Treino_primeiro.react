# primeiro.react

Esse é meu primeiro projeto feito com **React**. <br>
Esse código foi feito seguindo as ferramentas da biblioteca aprendidas no curso gratuito do [Matheus Battisti](https://www.youtube.com/@MatheusBattisti) juntamente com a ferramenta de desenvolvimento Vite.

### [Teste ToDoList](https://kingkarpa.github.io/Treino_primeiro.react/)

## Sobre a Aplicação
A aplicação ToDoList tem por objetivo prover uma lista de tarefas que podem ser adicionadas e removidas pelo usuário. <br>
Como primeira experiência real, meu objetivo foi usar várias ferramentas e estruturas da biblioteca e da linguagem JavaScript que comunmente não uso. Além disso, escolhi usar o package React Router (react-router-dom) para enriquecer meus estudos.

### Estrutura da Aplicação

**Estrutura das Tarefas** <br>
As tarefas criadas pelo usuário são objetos compostos por 3 propriedades:
- **Title** -> propriedade obrigatória e única para cada tarefa;
- **Description** -> propriedade opcional;
- **Urgency** -> propriedade opcional;

**Estrutura de Componentes** <br>
Além de Main.jsx e App.jsx a aplicação possui 6 componentes:
- **Header.jsx** -> componente de cabeçalho presente nas duas rotas da aplicação;
- **ToDoAdd.jsx** -> componente importante responsável pela adição de tarefas à lista;
    - ***FormAdd.jsx*** -> componente responsável pelo formulário de adição das tarefas;
    - ***StatusMsg.jsx*** -> componente responsável pela mensagem de feedback do submit do formulário;
- **ToDoList.jsx** -> componente importante responsável por filtrar e exibir as tarefas;
    - ***UrgencySection.jsx*** -> componente responsável pela exibição das tarefas de mesma urgência;

### Estrutura de Rotas
A aplicação é composta por duas rotas e layouts:
- **/** -> layout que exibe a lista de tarefas;
- **/adicionarTarefa** -> layout com formulário que permite adicionar as tarefas;

## :hammer_and_wrench: Construção
Essa aplicação foi construida na IDE **VSCode**, usando a ferramenta de desenvolvimento **Vite** nas configurações de **JavaScript + SWC**
