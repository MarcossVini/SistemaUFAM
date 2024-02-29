# App


SIstemaUFAM style App


##RFs (Requisitos FUncionais)
-[] Deve ser possivel buscar TCCs
-[] Deve ser possivel obter dados de TCcs do curso de Sistemas de Informação
-[] Deve ser possivel obter dados de TCcs do curso de Engenharia de Software
-[] Deve ser possivel adicionar,remover, atualizar TCC(optativo)
-[] Deve ser possivel fazer download dos arquivos(TCC) do site
-[] Deve ser possivel acessar a area de coordenador(crud)[optativo] 





##RNs (Regras de Negócios)
-[] O usuário não pode cadastrar com email duplicado
-[] O usuário não pode adicionar TCc já disponivel na plataforma
-[] Se for perdida a conexão no momento de adicionar um tcc, ele fica pré salvo para continuar do ponto que parou
-[] O tcc só pode ser cadastrado por um administrador
-[] 
-[] 
-[] 
-[] 
-[] 


##RNFs (Requitos não-funcionais)

-[] A senha do coordenador precisa estar criptografada
-[] Os dados da aplicação precisam estar persistindo em um banco PostgreSQL
-[] Todas as listas de dados precisam estar paginadas
-[] O usuário tem que ser identificado com JWT(Json Web Token)



