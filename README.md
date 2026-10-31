# kyuuriq profile

Персональный сайт-профиль в стиле guns.lol, реализованный на React + Vite + TypeScript.

## Установка

```bash
pnpm install
```

## Запуск dev-сервера

```bash
pnpm dev
```

Открой http://localhost:5173

## Сборка

```bash
pnpm build
```

## Настройка

Отредактируй `src/config/profile.ts`:

- username, handle, bio, uid
- avatar, background
- theme (accent, socialColor)
- effects (snowfall, animations, glow, parallax)
- socialLinks (id, platform, label, url, enabled)
- copyButtons (discord, telegram)
- music (enabled, source, title)
- views (enabled, mode, backendUrl)

## Публикация

Загрузи содержимое `dist/` на любой статический хостинг (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Структура

- `src/config/profile.ts` — конфигурация
- `src/components/` — компоненты
- `src/App.tsx` — корневой компонент
- `public/` — статические ассеты (avatar.png, bg.png, music.mp3, favicon.svg)
