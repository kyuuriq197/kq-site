# kyuuriq — portfolio

Персональный сайт-портфолио на React 19 + Vite + TypeScript.
Оформление: Google Pixel UI / Material You / Material Design 3 (Material 3 Expressive),
компоненты — [Material Web](https://github.com/material-components/material-web) (`md-*` элементы).

## Установка

```bash
pnpm install
```

## Dev-сервер

```bash
pnpm dev
```

Открой http://localhost:5173

## Сборка

```bash
pnpm build
pnpm preview
```

## Контент

Все данные сайта — в `src/config/profile.ts`:

- `username`, `github` — профиль;
- `projects[]` — реальные репозитории (название, описание, язык, категория, превью, ссылка).

Превью проектов лежат в `public/previews/`.

## Темы и цвета

- Светлая и тёмная темы, переключение через `data-theme` на `<html>`, выбор сохраняется в `localStorage`.
- Цветовые роли Material 3 заданы CSS-переменными `--md-sys-color-*` в `src/index.css`.

## Публикация

Собери проект и загрузи содержимое `dist/` на любой статический хостинг
(GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Структура

- `src/App.tsx` — композиция страницы;
- `src/components/` — TopBar, NavRail, BottomNav, ProjectCard, QuickSettings, ThemeToggle, EntryScreen;
- `src/config/profile.ts` — данные профиля и проектов;
- `src/index.css` — дизайн-токены, темы, компоненты, адаптивность, анимации;
- `public/` — favicon, robots.txt, превью проектов.
