![Logo do Inteli](../assets/logo-inteli.png)

# Atividade 4: Construção de Dashboard para Visualização de Dados

## Objetivo

O objetivo desta atividade foi desenvolver uma API que retorna a previsão mensal de visualizações de um canal do YouTube. O usuário insere as informações do canal e, em seguida, o valor das visualizações mensais é retornado. Além disso, a autenticação JWT também foi implementada.

## Como Utilizar

Para executar localmente, siga estas etapas:

**Executar o Backend:**

Siga os seguintes passos:
```
1 cd ponderada4/backend/app
2 python -m venv .
3 cd scripts
4 activate
5 cd ..
6 python -m pip install -r requirements.txt
7 cd app
8 uvicorn main:app --reload
```


**Executar frontend**

Siga os seguintes passos
```
1 cd "ponderada4\\frontend"
2 npm install
3 npm start
```


Pronto, agora basta acessar o http://localhost:3000/ e digitar o usuario "_admin"_ e senha _"admin123"_. Feito isso é só executar qualquer previsão de visualização mensal.

## Imagem Docker

O link para as imagens no dockerhub está dividido entre :

frontend : [link](https://hub.docker.com/repository/docker/eduardoporto/front-pond-4/general)

api/backend :[link](https://hub.docker.com/repository/docker/eduardoporto/back-pond-4/general)

## Funcionamento do projeto

Para ver o projeto funcionando na AWS, acesse o seguinte link: [Link do vídeo no YouTube](https://youtu.be/jtOsQ5CBkMk).

Todo o projeto foi desenvolvido localmente e logo em seguida após válidado foi colocado em produção na aws utilizando nginx tanto para o back como o frontend. 

