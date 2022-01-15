<h1 align="center">
Colocando em pratica os estudos sobre Node.js e Docker :computer:
</h1>

## Sobre a API

### Features utilizadas:
Express :heavy_check_mark:<br>
JWT (Json Web Token) :heavy_check_mark:<br>
Bcrypt :heavy_check_mark:

## Pontos a Melhorar 

Variáveis de ambiente dentro do docker 
Implementar autenticação dentro do mongo-express

## Running the app

```bash
# Permissão entrypoint
$ chmod +x app/entrypoint.sh

# Criar Network 
$ docker network create jwt

# Docker Compose
$ docker compose up -d --build

```
