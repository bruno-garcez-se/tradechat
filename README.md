# Kanzap - Sistema de Multi-atendimento via WhatsApp

Site institucional do Kanzap, uma solução completa para gerenciamento de múltiplos atendimentos via WhatsApp.

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- PostCSS
- ESLint

## Requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Como Instalar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/kanzap-site.git
cd kanzap-site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o site em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de código com ESLint

## Estrutura do Projeto

```
kanzap-site/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── PricingSection.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── ...
├── public/
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 