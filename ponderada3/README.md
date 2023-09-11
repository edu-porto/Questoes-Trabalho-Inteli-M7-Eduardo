# Atividade 3: Deploy de modelo de Machine Learning na Nuvem

### _**Introdução**_

O objetivo desta atividade foi criar um modelo de machine learning que consiga prever a quantia mensal de views de algum canal no youtube e ser usado como uma api.

O dataset pode ser encontrado no seguinte [Global YouTube Statistics 2023 on Kaggle](https://www.kaggle.com/datasets/nelgiriyewithana/global-youtube-statistics-2023)

Além disso, foram criadas imagens docker da api no seguinte link [Docker Hub - Eduardo Porto](https://hub.docker.com/r/eduardoporto/model)

### _**Estrutura de pastas**_

As pastas foram dividas de forma simples, visando facilitar a construção do Dockerfile e permitir encontrar tudo que foi desenvolvido de maneira fácil.

```  
├───api (api que foi gerada)  
├───dataset (dados utilizados para treinar o modelo)  
├───model ( modelo .pkl pronto para uso)  
├───notebook (notebook de desenvolvimento inicial)  
├───Dockerfile (arquivo Docker)

```

### _**Escolha do modelo**_

O ambiente de desenvolvimento inicial foi o Google Colab, devido à sua facilidade de uso em um ambiente isolado e baseado na nuvem. Nesta etapa, foi realizado o pré-processamento dos dados e a análise dos modelos com o PyCaret.

Para executar o projeto, é necessário apenas possuir o arquivo .csv. O modelo de machine learning escolhido foi o CatBoost Regressor, pois apresentou o melhor desempenho em comparação com outros tipos de regressão testados com o PyCaret.

A tabela a seguir mostra a comparação de métricas usando o PyCaret:

<table><tbody><tr><td>&nbsp;</td><td><strong>Model</strong></td><td><strong>MAE</strong></td><td><strong>MSE</strong></td><td><strong>RMSE</strong></td><td><strong>R2</strong></td><td><strong>RMSLE</strong></td><td><strong>MAPE</strong></td></tr><tr><td><i><strong>catboost</strong></i></td><td>CatBoost Regressor</td><td>100394858.3927</td><td>111322983041446016.0000</td><td>258324186.9647</td><td>0.5037</td><td>3.7699</td><td>231464.6598</td></tr><tr><td><i><strong>ridge</strong></i></td><td>Ridge Regression</td><td>111865876.2655</td><td>106211825206560000.0000</td><td>259469224.3694</td><td>0.4786</td><td>3.9377</td><td>1045861.1324</td></tr><tr><td><i><strong>lasso</strong></i></td><td>Lasso Regression</td><td>112369972.9885</td><td>106354023780639040.0000</td><td>259857460.5184</td><td>0.4757</td><td>3.9521</td><td>1076078.9958</td></tr><tr><td><i><strong>llar</strong></i></td><td>Lasso Least Angle Regression</td><td>112369973.0051</td><td>106354023780949312.0000</td><td>259857460.5236</td><td>0.4757</td><td>3.9521</td><td>1076078.9963</td></tr><tr><td><i><strong>lr</strong></i></td><td>Linear Regression</td><td>112369976.7338</td><td>106354024655052384.0000</td><td>259857462.7793</td><td>0.4757</td><td>3.9521</td><td>1076079.1651</td></tr></tbody></table>

### _**API**_

A API foi construída para facilitar o uso do modelo de maneira simples e rápida. Ela oferece uma rota onde você pode inserir os números do canal desejado para prever as visualizações mensais, e o modelo retorna uma estimativa de visualizações.

### _**Como utilizar**_

O processo para utilizar é simples, basta apenas executar o Dockerfile que está no diretorio raiz com o seguinte comando.

```
docker build -t model .
```

Após a conclusão do processo de construção da imagem é necessário executar um novo container com o comando.

```
docker run -p 8080:80 model
```

Com tais etapas concluidas o modelo já está pronto para ser utilizado, basta navegar até a página [http://localhost:8080/docs](http://localhost:8080/docs) e testar as rotas.
