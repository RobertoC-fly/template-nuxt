# 🚀 Template Nuxt 4 - Starter Kit

Template completo para agilizar o desenvolvimento de novos projetos com **Nuxt 4**, incluindo as melhores práticas e ferramentas essenciais para desenvolvimento moderno.

## ✨ Tecnologias Principais

### Core Framework

- **[Nuxt 4.4.2](https://nuxt.com/)** - Framework Vue.js full-stack
- **[Vue 3.5.32](https://vuejs.org/)** - Framework JavaScript reativo
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### UI & Styling

- **[@nuxt/ui 4.6.1](https://ui.nuxt.com/)** - Biblioteca de componentes UI
- **[TailwindCSS 4.2.2](https://tailwindcss.com/)** - Framework CSS utility-first
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utility para classes condicionais
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind
- **[@nuxt/fonts 0.14.0](https://fonts.nuxt.com/)** - Otimização automática de fontes

### State Management & Data Fetching

- **[Pinia 3.0.4](https://pinia.vuejs.org/)** - Store state management para Vue
- **[pinia-plugin-persistedstate 4.7.1](https://prazdevs.github.io/pinia-plugin-persistedstate/)** - Persistência automática de estado no localStorage/sessionStorage
- **[@tanstack/vue-query 5.99.0](https://tanstack.com/query)** - Gerenciamento de estado servidor/cache
- **[Axios 1.15.0](https://axios-http.com/)** - Cliente HTTP com interceptors configurados

### Utilitários

- **[@vueuse/nuxt 14.2.1](https://vueuse.org/)** - Coleção de composables Vue utilitários
- **[@nuxt/image 2.0.0](https://image.nuxt.com/)** - Otimização automática de imagens

### Testing & Quality

- **[Vitest 4.1.4](https://vitest.dev/)** - Framework de testes unitários
- **[Playwright 1.59.1](https://playwright.dev/)** - Testes end-to-end
- **[ESLint 10.2.0](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier 3.8.2](https://prettier.io/)** - Formatador de código
- **[Husky 9.1.7](https://typicode.github.io/husky/)** - Git hooks para qualidade

## 📁 Estrutura do Projeto

```
app/
├── lib/                    # Configurações e utilitários core
│   ├── axios.ts           # Cliente HTTP configurado
│   └── utils.ts           # Utilitário cn() para classes CSS
├── services/              # Serviços de API
│   └── api/
│       └── testReq/       # Exemplo de serviço tipado
├── stores/                # Pinia stores
│   └── example.ts         # Store de exemplo
├── composables/           # Composables Vue
│   └── useExample.ts      # Composable com vue-query
├── utils/                 # Funções utilitárias
│   └── showToastError.ts  # Helper para toasts de erro
├── plugins/               # Plugins Nuxt
│   └── vue-query.ts       # Configuração do vue-query
├── assets/css/            # Estilos globais
└── app.vue               # Componente raiz

tests/
├── unit/                  # Testes unitários (Vitest)
└── e2e/                   # Testes E2E (Playwright)
```

## 🛠️ Funcionalidades Incluídas

### ⚡ Sistema de API Tipado

- Cliente Axios configurado com interceptors
- Runtime config para URLs de API por ambiente
- Serviços tipados com TypeScript
- Integração com vue-query para cache e estados

### 🎨 Interface Moderna

- Componentes UI prontos (@nuxt/ui)
- Sistema de toast para feedback
- TailwindCSS configurado
- Utility `cn()` para classes condicionais e merge inteligente
- Suporte a ícones (Lucide)

### 📊 Gerenciamento de Estado

- Pinia para estado local/global
- Persistência automática com pinia-plugin-persistedstate
- Vue Query para estado de servidor
- Composables organizados por funcionalidade

### 🧪 Testing Completo

- Testes unitários com Vitest
- Testes E2E com Playwright
- Configuração separada para cada tipo
- Exemplos funcionais incluídos

### 🔧 Qualidade de Código

- ESLint + Prettier configurados
- Husky para pre-commit hooks
- Import sort automático
- Regras personalizadas para Vue/Nuxt

## 🚀 Scripts Disponíveis

### Desenvolvimento

```bash
yarn start:dev          # Ambiente de desenvolvimento (.env.development)
yarn start:hml          # Ambiente de homologação (.env.staging)
yarn start:prod         # Ambiente de produção (.env.production)
```

### Build & Deploy

```bash
yarn build              # Build para produção
yarn generate           # Gerar site estático
yarn preview            # Preview do build
```

### Testes

```bash
yarn test               # Testes unitários (Vitest)
yarn test:e2e           # Testes E2E (Playwright)
yarn test:e2e:ui        # Testes E2E com interface
```

### Qualidade

```bash
yarn lint:check         # Verificar ESLint + Prettier
yarn lint:fix           # Corrigir problemas automaticamente
```

## ⚙️ Configuração Inicial

1. **Clone e instale dependências:**

```bash
git clone <your-repo>
cd template-nuxt
yarn install
```

2. **Configure variáveis de ambiente:**

```bash
cp .env.example .env.development
# Edite as variáveis conforme necessário
```

3. **Inicie o desenvolvimento:**

```bash
yarn start:dev
```

## 📋 Configurações de Ambiente

Crie os arquivos de ambiente baseados no `.env.example`:

- `.env.development` - Desenvolvimento local
- `.env.staging` - Ambiente de homologação
- `.env.production` - Produção

### Variáveis Disponíveis

```bash
API_BASE_URL=https://api.example.com  # URL base da API
```

## 🎯 Próximos Passos

1. **Personalize o projeto:**
   - Atualize informações no `package.json`
   - Configure suas variáveis de ambiente
   - Adapte os serviços de API para sua necessidade

2. **Desenvolva funcionalidades:**
   - Crie novos services em `app/services/api/`
   - Adicione stores em `app/stores/`
   - Desenvolva composables em `app/composables/`

3. **Mantenha a qualidade:**
   - Escreva testes para novas funcionalidades
   - Use os scripts de lint antes dos commits
   - Aproveite o Husky para automações

## 📚 Documentação Útil

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [Pinia Store Management](https://pinia.vuejs.org/)
- [TanStack Query](https://tanstack.com/query/latest/docs/vue/overview)
- [VueUse Composables](https://vueuse.org/)

---

**Desenvolvido para acelerar o desenvolvimento de projetos Nuxt 4 com as melhores práticas da comunidade Vue.js** 🎉
