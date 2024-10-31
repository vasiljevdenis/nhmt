# NHMT - проект для сборки ЦОК
Разработано разработчиком @denpiligrim

## Запускаем генерацию манифеста
В tsconfig.json определяем параметр:
```json
  {
    "compilerOptions": {
      "module": "CommonJS",
    }
  }
```
В package.json определяем параметр:
```json
  {
    "type": "commonjs"
  }
```
Запускаем скрипт командой `npm run manifest` или `ts-node generateManifest.ts`

## Установка cwebp
### Шаг 1: Скачайте WebP Tools

1. Перейдите на [страницу WebP от Google](https://developers.google.com/speed/webp/download).
2. Скачайте **WebP Utilities for Windows**, обычно архив называется `libwebp-x.x.x-windows.zip`, где `x.x.x` — версия.
3. Распакуйте скачанный архив в удобное место, например, в папку `C:\webp`.

### Шаг 2: Настройка переменной окружения PATH (рекомендуется)

Добавьте путь к `cwebp.exe` в переменную окружения PATH, чтобы иметь возможность запускать его из любой папки.

1. Откройте **Параметры** > **Система** > **О системе** > **Дополнительные параметры системы**.
2. В разделе **Переменные среды** выберите переменную **Path** и нажмите **Изменить**.
3. Нажмите **Создать** и укажите путь к папке, где находится **cwebp.exe**. Например, `C:\webp\bin`.
4. Сохраните изменения и закройте все окна.

Теперь **cwebp** доступен для выполнения в любой директории.

### Шаг 3: Проверка установки

Откройте **Командную строку** и выполните команду:

```cmd
cwebp -version
```

## Конвертация изображений в webp
```powershell
Get-ChildItem -File | Where-Object { $_.Extension -match '\.(jpg|JPG|PNG|png)$' } | ForEach-Object { cwebp -q 80 $_.FullName -o "$($_.DirectoryName)\$($_.BaseName).webp" }
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
