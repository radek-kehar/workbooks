import {ProxyOptions} from "vite";
import {APPS_TYPE} from "./createViteConfig";

export interface CreateViteProxyInit {
    app: APPS_TYPE;
}

const BACKEND_PROXY = process.env.BACKEND_PROXY;

/** Lokalne spustene FE aplikace */
const LOCAL_APP_PROXY: Record<string, string | ProxyOptions> = {
    // '/dssp/': {
    //   target: 'http://127.0.0.1:5174',
    //   changeOrigin: true,
    // },
}

/** Lokalne spustene BE aplikace */
const LOCAL_VITE_PROXY: Record<string, string | ProxyOptions> = {
    // '/auth': {
    //     target: 'http://127.0.0.1:8081',
    //     changeOrigin: true,
    // },
    // '/services/auth': {
    //     target: 'http://127.0.0.1:8081',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services/, ''),
    // },
    // '/services/dokument/api': {
    //     target: 'http://127.0.0.1:8087',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services/, ''),
    // },
    // '/services/uprof/api': {
    //     target: 'http://127.0.0.1:8088',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services/, ''),
    // },
    // '/services/blobstorage/api': {
    //     target: 'http://127.0.0.1:8082',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services/, ''),
    // },
    // '/services/adresa/api': {
    //     target: 'https://jendaint.oksystem.cz',
    //     changeOrigin: true,
    // },
    // '/services/rs/api': {
    //     target: 'http://jpndi1.oksystem.vyvoj:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services\/rs\/api/, '/rs/api'),
    // },
    // '/outage': {
    //     target: 'https://jendaint.oksystem.cz/',
    //     changeOrigin: true,
    // },
};

/** Mockovane BE aplikace */
const LOCAL_MOCKOON_PROXY: Record<string, string | ProxyOptions> = {
    // '/outage': {
    //     target: 'http://127.0.0.1:25565',
    //     changeOrigin: true,
    // },
    // '/services/auth': {
    //     target: 'http://127.0.0.1:25566',
    //     changeOrigin: true,
    // },
    // '/services/rs/api': {
    //     target: 'http://127.0.0.1:25568',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/services/, ''),
    // },
    // '/services': {
    //     target: 'http://127.0.0.1:25565',
    //     changeOrigin: true,
    // },
};

let SELECTED_PROXY = LOCAL_VITE_PROXY;
if (BACKEND_PROXY === 'MOCKOON') {
    SELECTED_PROXY = LOCAL_MOCKOON_PROXY;
}

export function createViteProxy({ app }: CreateViteProxyInit) {
    return {
        ...(app === 'shell'
            ? LOCAL_APP_PROXY
            : {}
        ),
        ...SELECTED_PROXY,
    };
}
