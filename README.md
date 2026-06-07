# API REST in NodeJS 📦

API REST para consulta de CEP construída com Node.js, TypeScript, Express, routers, controllers, aliases de módulos e integração com MySQL.

## Requisitos

- Node.js
- MySQL

## Variáveis de ambiente

A conexão com o banco deve ser configurada por variáveis de ambiente, evitando credenciais hardcoded no código-fonte:

| Variável | Descrição | Padrão |
| --- | --- | --- |
| `PORT` | Porta HTTP da API | `3000` |
| `DB_HOST` | Host do MySQL | - |
| `DB_PORT` | Porta do MySQL | `3306` |
| `DB_USER` | Usuário do MySQL | - |
| `DB_PASSWORD` | Senha do MySQL | - |
| `DB_DATABASE` | Database do MySQL | - |
| `DB_CONNECTION_LIMIT` | Limite de conexões do pool | `10` |

## Scripts

```bash
npm run dev
npm run typecheck
npm run build-prod
```

## Rotas

- `GET /` retorna resposta padronizada de acesso não autorizado.
- `GET /cep` retorna a estrutura base para listagem de CEPs.
- `GET /cep/:cep` valida CEPs com exatamente 8 números.
- `POST /cep/call` executa a procedure `showUsers` no MySQL.
