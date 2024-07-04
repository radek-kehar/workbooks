import {ROOT_URL} from "../../config/createViteConfig";
import {defineConfig} from 'vite';

export default defineConfig({
    base: `${ROOT_URL}`,
    build: {
        outDir: `../../dist/404`,
        emptyOutDir: true,

    },

})
