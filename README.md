# kyuuriq profile

Персональный сайт-профиль в стиле guns.lol, полностью настраивается через `config.js`.

## Запуск

Любой статический сервер. Например:

```bash
python -m http.server 8000
```

Открой http://localhost:8000

## Настройка

Отредактируй `config.js`:

- `username`, `handle`, `bio`, `uid`, `status`
- `avatar`, `background`
- `theme.accent`, `theme.socialColor`
- `snowflakes` — включить/выключить снег
- `music` — `enabled`, `src`, `title`
- `socialLinks` — массив ссылок, `enabled: false` отключает
- `discord`, `telegram` — ники для копирования
- `profileViews` — число или `null` для авто-счётчика

## Публикация

Загрузи файлы на любой статический хостинг (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Структура

- `index.html` — оболочка
- `style.css` — стили
- `app.js` — логика и рендеринг из конфига
- `config.js` — данные профиля
- `avatar.png`, `bg.png`, `music.mp3` — медиа
