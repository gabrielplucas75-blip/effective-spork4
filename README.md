# Memória Luz 360 — Landing Page

Projeto React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

## Trocar a imagem pelo vídeo real do protótipo

1. Coloque o vídeo em `public/memoria-luz-hero.mp4`
2. Abra `src/App.tsx`
3. No Hero, remova/comente a tag `<img ... />`
4. Descomente o bloco `<FadingVideo ... />`

O vídeo ideal deve ter aproximadamente 14–16 s e loop suave:
- 0–2s: luminária apagada
- 2–4s: LED acende
- 4–7s: aproximação lenta
- 7–11s: rotação mostrando segunda foto
- 11–14s: terceira e quarta fotos
- 14–16s: retorno suave ao enquadramento inicial

O preço foi mantido fora do Hero e aparece apenas na segunda seção, após a construção de valor.
