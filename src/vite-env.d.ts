/// <reference types="vite/client" />

// Vite ya proporciona los tipos para `import.meta.env` a través de
// `vite/client`. Si necesitas declarar variables personalizadas (VITE_...)
// agrégalas aquí. Evitamos redeclarar las propiedades predefinidas
// (BASE_URL, MODE, DEV, PROD) para no entrar en conflicto con las
// definiciones que trae Vite.

interface ImportMetaEnv {
	// Ejemplo: descomenta y agrega tus vars personalizadas
	// readonly VITE_API_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
