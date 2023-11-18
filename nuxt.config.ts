// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Coinmate',
            meta: [{ name: 'description', content: 'Coinmate app.' }],
            bodyAttrs: {
                class: 'bg-gray-100 font-sans leading-normal tracking-normal',
            },
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js',
                    integrity: 'sha256-XF29CBwU1MWLaGEnsELogU6Y6rcc5nCkhhx89nFMIDQ=',
                    crossorigin: 'anonymous',
                },
                // @ts-ignore
                { type: 'text/javascript', src: '/js/drop-menu.js', body: true },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
                    integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
                    crossorigin: 'anonymous',
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
})
