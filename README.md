# CGL Offline — Gerenciamento de Obras

Aplicativo web (PWA) para gerenciar obras, equipe, materiais, despesas, pagamentos, ferramentas e diário de obra. Funciona **sem internet** e **sem servidor**: todos os dados ficam salvos no próprio aparelho.

Feito com React 19, TypeScript e Vite.

## O que o app faz

- **Dashboard** com resumo financeiro, andamento e obra em destaque
- **Obras** com etapas, equipe, fotos, orçamento e valor recebido
- **Tarefas** com status e percentual de progresso
- **Funcionários** com diárias, meias diárias, controle semanal e PIX
- **Materiais**, **Despesas** e **Pagamentos**
- **Ferramentas** com controle de unidades e localização
- **Diário de Obra** com fotos
- **PDF** de materiais e do diário de obra (gerador próprio, sem bibliotecas externas)
- **Backup** completo para arquivo e restauração

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento
npm run build     # gera a pasta dist/ (verifica os tipos antes)
npm run preview   # testa o build localmente
npm run lint
```

O resultado de `npm run build` é um site estático (pasta `dist/`). Pode ser publicado em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages etc.) e instalado na tela inicial do celular como aplicativo.

## Onde ficam os dados

- Fonte principal: **IndexedDB** (`cgl_dados_offline`), que comporta muito mais dados que o `localStorage`, importante por causa das fotos.
- Cópia de compatibilidade: `localStorage` (`obracontrol_dados_v2`). Se estiver cheio, o app continua salvando pelo IndexedDB.
- Cada gravação recebe um carimbo de data. Ao abrir, se a cópia do `localStorage` for mais nova que a do IndexedDB (por exemplo, porque uma gravação no IndexedDB falhou), o app usa a mais nova para não perder alterações.
- O app pede ao navegador armazenamento persistente (`navigator.storage.persist()`), para os dados não serem apagados quando faltar espaço. A decisão é do navegador.
- Não há conta, login real nem envio de dados para nenhum servidor. A "sessão" é apenas local.

> **Importante:** como os dados vivem no navegador, limpar os dados do site ou trocar de aparelho apaga tudo. Faça backup com frequência.

## Backup e restauração

- **Exportar:** gera um arquivo `CGL_Backup_AAAA-MM-DD_HH-MM-SS.cglbackup` (JSON), com compartilhamento nativo no celular quando disponível.
- **Importar:** aceita `.cglbackup`, `.json` e `.zip` contendo um JSON. Também lê backups antigos exportados da versão online (Supabase).

## Funcionamento offline

O `public/sw.js` é um service worker que guarda o app no cache já no primeiro acesso.

- **Com internet:** o app sempre busca a versão mais recente ao abrir (se a rede demorar mais de 4 s, abre a cópia guardada).
- **Sem internet:** abre a cópia guardada.
- O service worker só é registrado na versão publicada (`npm run build`), nunca em `npm run dev`.

## Estrutura do código

```
src/
├── main.tsx                      # entrada e registro do service worker
├── App.tsx                       # telas e lógica do app
├── cloud.ts                      # sessão local, leitura/gravação e backup
├── types.ts                      # tipos (Obra, Pessoa, Tarefa, Material...)
├── utils.ts                      # dinheiro, números, datas, fotos, tempo limite
├── storage.ts                    # IndexedDB + leitura inicial do localStorage
├── pdf.ts                        # gerador de PDF
├── estilos.ts                    # CSS do app
└── components/
    ├── ui.tsx                    # Empty, StatusSelect, Campo, Modal, BarraProgresso, IconeNav
    └── AppErrorBoundary.tsx      # tela de erro amigável
```
