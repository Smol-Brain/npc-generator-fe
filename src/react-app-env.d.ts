/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        REACT_APP_GOOGLE_API_KEY: string
        REACT_APP_GOOGLE_AUTH_DOMAIN: string
        REACT_APP_GOOGLE_PROJECT_ID: string
        REACT_APP_GOOGLE_STORAGE_BUCKET: string
        REACT_APP_GOOGLE_MESSAGING_ID: string
        REACT_APP_GOOGLE_APP_ID: string

        REACT_APP_NPC_API: string
        REACT_APP_NPC_API_GENERATE: string
    }
}
