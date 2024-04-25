# SP4-DEMO3 - Documentação com Swagger

## Organização de rotas

No momento, temos distribuidas várias configurações de rotas entre o `app.ts` e cada arquivo router especifico.

- [x] - Centralizar declaração de rotas no arquivo `routers/index.ts`.
- [x] - Organizar arquivo `app.ts` com as rotinas de configurações iniciais da API.
- [x] - Chamar inicializador do app em `server.ts`

## Swagger

A especificação Swagger permite que desenvolvedores definam a estrutura da API, incluindo endpoints, parâmetros, tipos de dados aceitos e retornados, métodos HTTP permitidos, entre outras informações. Essa definição é feita em um formato JSON ou YAML.

Além disso, o Swagger fornece ferramentas que podem gerar automaticamente documentação interativa para a API com base nessa especificação. Isso permite que os desenvolvedores visualizem e testem a API diretamente no navegador, facilitando a compreensão de como ela funciona e como consumi-la.

### Instalação

```bash
npm install swagger-ui-express swagger-jsdoc
```

```bash
# Tipos
npm install -D @types/swagger-ui-express @types/swagger-jsdoc
```

### Utilização

- [x] - Criar arquivo de configuração do swagger em `configs/swagger.ts`
- [x] - Adicionar inicialização do arquivo de configuração em `app.ts`
- [x] Documentar rota de bands.

## Referências

- [Documentação Oficial OPENAPI Swagger](https://swagger.io/docs/specification/about/)

- [Documentação Github OPENAPI Swagger](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md)
