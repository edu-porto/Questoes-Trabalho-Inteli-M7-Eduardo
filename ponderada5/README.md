# Atividade 5: Resenha sobre o artigo


## Introdução

O artigo “Machine learning for internet of things data analysis: a survey”  é bem completo e explica as seguintes coisas : conceito de iot, aplicação de iot em diversas situações, casos de uso para iot nas cidades inteligentes, algoritmos de machine learning mais populares para cidades inteligentes, como funcionam esses algoritmos e toda matemática por trás do modelo, e em quais tipos de problemas este modelo funciona melhor . 

O artigo revela-se profundamente cativante ao começar com uma visão ampla do tema de IoT e machine learning, adentrando, em seguida, nas complexidades matemáticas subjacentes a cada algoritmo de aprendizagem de máquinas. Muitos dos conceitos apresentados foram aplicados ao longo das últimas 10 semanas no projeto com a Azul. No restante do texto, apresentarei a jornada de desenvolvimento de forma cronológica e estabelecerei comparações com as abordagens do artigo.

## Desenvolvimento 

De início, ao receber os dados do parceiro e conduzir a entrevista inicial, ficou evidente que seria enfrentado um problema envolvendo séries temporais. Ao explorar o conjunto de dados, foi constatado a presença de diversas linhas incompletas e outras peculiaridades como a captação de dados em um intervalo específico para cada tipo de sensor. Além disso, os datasets são enormes e a variável alvo estava em poucos arquivos.
Em resposta, aos dados foi realizado um rigoroso processo de limpeza dos dados, agregação e implementado a técnica de Análise de Componentes Principais (PCA), mencionada na página 169 do artigo, para diminuir a dimensionalidade do data set.

Após concluir a etapa de pré-processamento,foi optado abordar o problema como uma tarefa de classificação, determinando se, em determinada semana, ocorreria falha ou não no avião. Na primeira iteração foi feita a aplicação de um algoritmo de auto machine learning, apresentando resultados satisfatórios com o uso do algoritmo Random Forest.

É importante destacar que o Random Forest é altamente eficaz para lidar com grandes conjuntos de dados e tem grande escalabilidade. Porém, um desafio substancial existe na explicabilidade do modelo, pois é difícil saber quais são os parâmetros de otimização e ponderação dos pesos do modelo, o que torna complexa a tarefa de explicar como o modelo alcançou um resultado específico. Tais pontos críticos são explorados no artigo em discussão.

## Conclusão
Após concluir a fase de preparação dos dados e treinamento do modelo, é necessário considerar que a solução deve ser implementada na nuvem e colocada em produção, o que acarreta custos e exige a avaliação de trade-offs entre o desempenho do algoritmo e seu custo computacional.

Por fim, o artigo não apenas fornece um guia valioso para iniciar o processo de desenvolvimento do modelo, mas também oferece uma visão inicial do caminho que estudantes e profissionais podem seguir para compreender, aplicar e otimizar soluções de IoT em cidades inteligentes.
