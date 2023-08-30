## **Atividade ponderada 2**

Nesta atividade foi feito uma aplicação web em react que é possível criar um to-do list com o CRUD completo.

### **Estrutura de pastas**

A atividade está divida em três pastas :

- Backend
  - Aqui está toda a estrutura do backend, tendo os arquivos .python para autenticação e rotas da api.
- db
  - Arquivo docker compose que cria uma instância do postgresql para ser utilizado como banco de dados relacional.
- frontend
  - Contém todas os arquivos em react e a página web.

### **Tecnologias utilizadas**

Para o melhor entendimento das tecnologias utilizadas, irei as separar por local de utilização e o motivo da escolha.

- Backend
  - FastAPI : É a tecnologia por trás  da API que permite a conexão entre banco de dados e frontend.
  - SQLAlchemy : É a ORM utilizada para conectar com o DB
  - JWT : Permite o úsuario logar de forma segura
- Data Base
  - PostgreeSQL : É o banco de dados relacional, opensource e muito otimizado comparado ao MySQL
- Frontend
  - React: Um dos frameworks web mais utilizados e que permite componentizar as páginas web.
- Conteiners
  - A tecnologia de containers é proporcionada pelo Docker, permitindo criar instâncias e aumentando a escalabilidade do sistema.

### **Arquitetura**

O sistema utiliza a seguinte arquitetura

`![Arquitetura_da_solucao]([ponderada2/to-do-list/arquitetura_solucao.jpg](https://drive.google.com/file/d/10O7VgVWQhQd4oPt3QJ8t_fCsX6JzA6Ce/view?usp=sharing))`

### **Como utilizar**

**Para utilizar basta utilizar os seguintes comandos**

```
cd " ponderada2\to-do-list\db"
```

E logo em seguida

```
docker-compose up
```

Para acessar a página basta entrar no link

```
http://localhost:3000/
```

E utilizar o login : teste e senha : "teste123"

### **Imagens docker**

A imagem do postgress foi a padrão que está no compose

A imagem do backend pode ser acessada no seguinte link [https://hub.docker.com/r/eduardoporto/backend](https://hub.docker.com/r/eduardoporto/backend)

A imagem do frontend pode ser acessada no seguinte link [https://hub.docker.com/r/eduardoporto/frontend-image](https://hub.docker.com/r/eduardoporto/frontend-image)
