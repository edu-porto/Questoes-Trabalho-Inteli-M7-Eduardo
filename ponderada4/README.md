![Logo do Inteli](../assets/logo-inteli.png)

# Atividade 4: Construção de Dashboard para Visualização de Dados

## Objetivo

O objetivo desta atividade foi desenvolver uma api que retorna a predição mensal de views de um canal do youtube.

De tal forma que o usúario insere as informações do canal e logo em seguida e retornado o valor de views mensais.

Além disso, também é implementado autenticação JWT

## Como utilizar

Para executar localmente acesse a  pasta

_**Executar backend**_

cd "ponderada4\\backend\\app"

python -m venv .

cd scripts

activate

cd ..

python -m pip install -r requirements.txt

cd app

uvicorn main:app --reload

_**Executar frontend**_

cd "ponderada4\\frontend"

npm install

npm start

Pronto, agora basta acessar o http://localhost:3000/ e digitar o usuario "_admin"_ e senha _"admin123". Feito isso é só executar qualquer previsão de visualização mensal._

## Imagem Docker

O link para as imagens no dockerhub está dividido entre :

frontend :

api/backend :
