# API CONCESSIONÁRIA
    
    ### PASTA CONFIG
        1. Na nossa pasta config temos as configurações da API (versão e porta).
        2. Para passar os parêmtros, criamos um arquivo api.json que contém essas informações.
    
    ### ARQUIVO SERVER.JS
        1. No arquivo temos algumas variáveis e algumas configurações da API.
        2. Nossa primeira constante recebe a biblioteca express, enquanto a nossa segunda constante <br> recebe uma função da primeira.
        3. Criamos duas constantes para receber uma rota. A primeira constante recebe nosso arquivo <br> de configuração da API, a segunda recebe a rota para o nosso arquivo com a configuração da nossa API.
        4. No nosso app.listen a nossa API está "escutando" o que entra na porta da api_config.
        5. No nosso app.use configuramos para poder receber requisições .json.
        6. No nosso segundo app.use, ele configura para quando recebermos arquela URL ir para o  <br> cars_route.

    ### ARQUIVO CARS.JS
        1. Como querermos somente a função Router, realizamos o require do express com .Router().
        2. Criamos nossas rotas para realizar as alterações/buscas nem nosso banco de dados. Neste <br> aquivo realizamos a solicitação dos parâmetros para alteração/inserção/busca em nosso banco.
        3. Criamos constantes que chamam as funções nos arquivos desejados.
    
    ### PASTA SERVICES
        1. Na nossa pasta services criamos um arquivo para cada função que será utilizada no nosso <br> arquivo cars.js.