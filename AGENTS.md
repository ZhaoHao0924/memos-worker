# Repository Guidelines

## Project Structure & Module Organization

- `src/index.js` is the Cloudflare Worker entrypoint. It contains API routing and handlers for authentication, notes, documents, files, sharing, and Telegram integration.
- `src/public/` contains the static HTML, JavaScript, images, and headers served by Wrangler. Keep browser-facing changes here.
- `src/schema.sql` is the initial D1 schema. `src/migrate_*.sql` contains one-off migrations for existing databases; do not fold migrations into the baseline schema without a clear upgrade plan.
- `wrangler.toml` defines the Worker, static asset directory, and D1, KV, and R2 bindings. `image/` contains README screenshots.

## Build, Test, and Development Commands

Run `npm ci` to install the locked Wrangler dependency. Use `npm start` or `npm run "dev local"` for a local Worker; use `npm run "dev remote"` when testing against configured Cloudflare bindings. Initialize a local D1 database with `npx wrangler d1 execute YOUR_D1_NAME --local --file=./src/schema.sql`. Deploy with `npm run deploy` (`npx wrangler deploy`). There is no separate build step; Wrangler bundles and serves the Worker and assets.

## Coding Style & Naming Conventions

JavaScript uses tabs, LF line endings, UTF-8, semicolons, single quotes, and a 140-character print width (`.editorconfig` and `.prettierrc`). Use `camelCase` for functions and variables and `UPPER_SNAKE_CASE` for module constants. Keep route matching near the router and place reusable behavior in focused helper functions. Match the surrounding SQL formatting and use explicit, parameterized D1 statements.

## Testing Guidelines

No automated test framework or test script is currently configured. For each change, run the appropriate Wrangler dev mode and manually exercise affected authenticated and public routes, including error paths. For schema changes, test against a fresh local D1 database and document any required production migration.

## Configuration and Security

Never commit `.dev.vars`, `.env`, API tokens, passwords, or other secrets; use Wrangler secrets/environment variables. Treat changes to `wrangler.toml` bindings as deployment-sensitive. Apply `src/migrate_*.sql` deliberately to the intended D1 database and mention the migration in the PR.

## Commit and Pull Request Guidelines

History favors short, focused subjects, commonly using prefixes such as `fix:` and concise feature descriptions. Keep commits scoped to one behavior. PRs should describe the user-visible change, list manual checks, identify route or schema effects, include migration/deployment steps, and attach screenshots for frontend changes.
