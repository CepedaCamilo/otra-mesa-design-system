// Le dice al inspector de tipos que importar un .css está bien (lo carga Vite, no TypeScript).
declare module '*.css'

// Importar un archivo como texto (tokens.css?raw): lo hace Vite al compilar.
declare module '*?raw' { const texto: string; export default texto }
