This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Contador React usando Redux

### State
- Objeto global onde você pode guardar suas informações.

  O State é criado pelo método createState() que recebe como parâmetro um reducer ou um objeto que possue vários reducers.

### Actions
- São funções que retornam um objeto que tem pelo menos uma propriedade descritiva que "explica" o que a action executa.

Obs.: Actions não executam nenhuma ação, e nem especificam qual state será alterado. Elas apenas notificam/avisam o que deve ser feito através de uma string dentro do objeto retornado.

### Reducers
- São funções que recebem como primeiro parâmetro o state que irão controlar e como segundo o objeto action que muda toda vez que o metodo dispatch é chamado.

 Quando temos mais de um reducer devemos combiná-las usando o método combineReducers() e usar o retorno para criar o nosso state.
 

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
