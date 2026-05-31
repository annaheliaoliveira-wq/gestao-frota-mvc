Sistema de Gestão de Frota

Projeto desenvolvido utilizando a arquitetura MVC em JavaScript.

Funcionalidades

- Cadastro de usuários
- Login de usuários
- Cadastro de registros
- Controle de acesso por usuário
- Proteção de funcionalidades para usuários autenticados

Autenticação

A autenticação é realizada utilizando Local Storage para armazenamento dos usuários cadastrados e controle da sessão do usuário logado.

Permissões

- Apenas usuários autenticados podem cadastrar registros.
- Cada usuário pode alterar apenas seus próprios registros.
- Cada usuário pode excluir apenas seus próprios registros.
- Usuários não autenticados são redirecionados para a tela de login ao tentar acessar funcionalidades protegidas.

Estrutura do Projeto

gestao-frota-mvc/

├── index.html

├── cadastro.html

├── login.html

├── app.js

├── README.md

└── app/

    ├── controllers/

    │    └── controller.js

    ├── models/

    │    ├── tasks.js

    │    └── usuarioModel.js

    └── views/

        └── view.js

Tecnologias Utilizadas

- HTML5
- JavaScript
- Arquitetura MVC
- Local Storage

Observação sobre a Implementação

Este projeto foi desenvolvido em ambiente mobile, utilizando o editor Acode e o GitHub para gerenciamento do código.

Devido às limitações do ambiente de desenvolvimento disponível, a autenticação foi implementada utilizando Local Storage para simular o gerenciamento de usuários, sessões e permissões de acesso.

A solução mantém os conceitos fundamentais solicitados na atividade:

- Cadastro de usuários
- Login de usuários
- Controle de autenticação
- Controle de autorização
- Restrição de acesso a funcionalidades protegidas
- Permissões por usuário

Em uma implementação completa com backend, essas funcionalidades poderiam ser realizadas por meio de uma API REST, banco de dados e middlewares de autenticação.

Autor

Anna Hélia Oliveira
