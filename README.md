# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy On Render

This repository includes a Render Blueprint file at `render.yaml` that creates:

- `team31-project3-api` as a Node Web Service running `server.js`
- `team31-project3-web` as a Static Site serving the Vite build output

### Steps

1. Push this repository to GitHub.
2. In Render, click **New +** and choose **Blueprint**.
3. Connect your repository and deploy using the detected `render.yaml`.
4. Set the required Postgres environment variables for the API service:
   - `PSQL_HOST`
   - `PSQL_USER`
   - `PSQL_DATABASE`
   - `PSQL_PASSWORD`
   - `PSQL_PORT` (defaults to `5432`)
   - `PSQL_SSL_MODE` (defaults to `require`)
5. After deployment, verify API health at `/health` on the API service URL.

The API server reads `PORT` automatically on Render, so no extra port configuration is required.
