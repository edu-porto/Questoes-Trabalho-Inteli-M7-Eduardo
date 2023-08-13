**Aluno :** Eduardo França Porto

**Grupo:** 03

O objetivo deste repositório é permitir a construção de uma imagem a partir do arquivo docker, criar um container e ter acesso ao curriculum . As tecnologias que utilizei foram python e HTML.

Link da imagem no dockerhub : [https://hub.docker.com/r/eduardoporto/ex-sem-1](https://hub.docker.com/r/eduardoporto/ex-sem-1)

**Como executar**

Para executar o projeto são necessários pouquissimos passos. Que serão explicados partindo do terminal da ide.

Todos os passos de _**1 a 4**_ são executados no terminal.

1.  Primeiro acesse a pasta raiz do diretório atráves do terminal com o seguinte comando :

```
cd ponderada1\Eduardo-curriculum
```

1.  Construa a imagem docker  :

```
docker build .
```

1.  Descubra o id da imagem para criar o container :

```
docker images
```

Após obter o id da imagem na coluna "IMAGE ID" anote os 4 primeiros caracteres

1.  Crie o container com base no id gerado :

```
docker run -p 8080:80 (id da imagem)
```

1.  Acesse no seu navegador o seguinte endereço :

```
http://localhost:8080/
```

Pronto, agora a página já está rodando em um container e é possível visualizar o curriculum do aluno.
