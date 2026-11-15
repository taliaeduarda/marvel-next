# Marvel Next

Catálogo de personagens e quadrinhos da Marvel em Next.js, consumindo a API oficial da Marvel. Busca por personagem, página de detalhe de cada herói e de cada quadrinho, com cabeçalho em parallax e tema customizado do Material UI.

## O que tem aqui

- Rotas de API do Next.js (`/api/hero` e `/api/comics`) que funcionam como proxy: montam o hash MD5 exigido pela Marvel e mantêm a chave privada só no servidor.
- Páginas dinâmicas `hero/[id]` e `comic/[id]` com dados carregados por id.
- Componentes de card, listas de personagens e quadrinhos, input de busca e efeito parallax.
- Tema próprio do Material UI e estilos globais em Sass.

## Stack

Next.js, React, Material UI, Sass, axios.

## Como rodar

Crie uma conta em https://developer.marvel.com e gere o par de chaves. Depois:

```bash
cp .env.example .env.local   # preencha MARVEL_PUBLIC_KEY e MARVEL_PRIVATE_KEY
yarn
yarn dev
```

## Status

Projeto pessoal de 2021, funcional. A demo antiga na Vercel foi desativada. Em novembro de 2026 as chaves da API foram removidas do código e passaram para variáveis de ambiente.
