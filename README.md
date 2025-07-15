# CROSS KNIGHTS - Site Vitrine

Site vitrine completo e responsivo para a marca de roupas fitness CROSS KNIGHTS, inspirada nos Cavaleiros Templários.

## 🎯 Características

- **Design Imersivo**: Tema escuro com paleta vermelha e tipografia medieval
- **Responsivo**: Mobile-first design que funciona em todos os dispositivos
- **Animações**: Loader animado, hover effects e scroll reveal
- **Hero Section**: Vídeo de fundo com overlay e call-to-action
- **Produtos**: Cards interativos com links diretos para a Shopee
- **Redes Sociais**: Links para Instagram, Facebook e TikTok

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes UI

## 📁 Estrutura do Projeto

```
cross-knights-site/
├── public/
├── src/
│   ├── assets/          # Imagens, vídeos e ícones
│   ├── components/      # Componentes React
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos customizados
│   └── main.jsx        # Entry point
├── dist/               # Build de produção
└── package.json        # Dependências
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm ou pnpm

### Instalação
```bash
npm install
# ou
pnpm install
```

### Executar em desenvolvimento
```bash
npm run dev
# ou
pnpm run dev
```

### Build para produção
```bash
npm run build
# ou
pnpm run build
```

## 🌐 Deploy

### Opção 1: Deploy Automático (Recomendado)
O projeto está pronto para deploy em plataformas como:
- **Vercel**: Conecte o repositório e faça deploy automático
- **Netlify**: Arraste a pasta `dist/` ou conecte o repositório
- **GitHub Pages**: Configure o workflow para build automático

### Opção 2: Deploy Manual
1. Execute `npm run build` para gerar a pasta `dist/`
2. Faça upload da pasta `dist/` para seu servidor web
3. Configure o servidor para servir arquivos estáticos

### Opção 3: Deploy com Manus
```bash
# No diretório do projeto
manus-deploy-frontend --framework react --project-dir ./
```

## 🔗 Links Importantes

- **Shopee**: Links configurados para buscar "cross knights" na Shopee Brasil
- **Redes Sociais**: 
  - Instagram: @crossknights
  - Facebook: /crossknights
  - TikTok: @crossknights

## 🎨 Customização

### Cores
As cores principais estão definidas no arquivo `src/App.css`:
- **Primária**: #dc2626 (Vermelho)
- **Background**: #0a0a0a (Preto)
- **Cards**: #1a1a1a (Cinza escuro)

### Fontes
- **Logo**: Cinzel Decorative (Medieval)
- **Texto**: Cardo (Serif clássica)

### Vídeo de Fundo
O vídeo está localizado em `src/assets/Loopcrooscruzbackgroundfundotela(1).mp4`
Para substituir, coloque o novo vídeo na pasta assets e atualize a importação em `App.jsx`

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:
- **Mobile**: 375px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Otimização**: Build minificada e comprimida
- **Caching**: Headers de cache configurados
- **SEO**: Meta tags otimizadas

## 🐛 Solução de Problemas

### Vídeo não carrega
- Verifique se o arquivo está na pasta `src/assets/`
- Confirme que o formato é suportado (MP4 recomendado)

### Fontes não aparecem
- Verifique a conexão com Google Fonts
- Confirme que os imports estão corretos no CSS

### Links não funcionam
- Verifique se os URLs estão corretos
- Confirme que `target="_blank"` está configurado

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

---

**CROSS KNIGHTS** - Cavaleiros Templários em busca de Cristo através do fitness.

