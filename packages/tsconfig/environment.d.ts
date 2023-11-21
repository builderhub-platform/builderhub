declare global {
  namespace NodeJS {
    /* Extending the NodeJS.ProcessEnv interface with the new properties. */
    export interface ProcessEnv extends NodeJS.ProcessEnv {
      /**
       * `PORT`: App port number
       */
      PORT?: string;
      /**
       * `NODE_ENV`: NodeJS environment (`production`, `development`, `test`) Node 실행 환경을 의미합니다.
       */
      NODE_ENV?: string;
      DEVICE_IDENTIFIER?: string;
      TESTING?: string;
      ANALYZE: string;
      POSTGRESQL_USER: string;
      POSTGRESQL_PASSWORD: string;
      POSTGRESQL_CONTAINER_NAME: string;
      POSTGRESQL_DEFAULT_DB: string;
      POSTGRESQL_PORT: number;
      SUPERTOKENS_PORT: number;
      SUPERTOKENS_CONTAINER_NAME: string;
      API_ENV: "dev" | "prod";
      DATABASE_URL: string;
      API_SECRET: string;
      API_KEYS: string;
      APOLLO_KEY: string;
      APOLLO_GRAPH_REF: string;
      FORGE_CLIENT_ID: string;
      FORGE_CLIENT_SECRET: string;
      IAMPORT_KEY: string;
      IAMPORT_SECRET_KEY: string;
      KAKAO_API_ACCESS_KEY: string;
      KAKAO_KEY: string;
      S3_ACCESS_KEY_ID: string;
      S3_ACCESS_SECRET_ID: string;
      S3_BUCKET_ID: string;
      S3_PUBLIC_BUCKET_ID: string;
      CDN_URL: string;
      OTEL_EXPORTER_OTLP_ENDPOINT: string;
      AUTH_DOMAIN: string;
      AUTH_URL: string;
      API_DOMAIN: string;
      CLIENT_DOMAIN: string;
      CONVERTER_URL: string;
      CONVERTER_CALLBACK_URL: string;
      CONVERTER_ACCESS_KEY_ID: string;
      CONVERTER_ACCESS_SECRET_ID: string;
      OPENSEARCH_USER_ID: string;
      OPENSEARCH_USER_PW: string;
      IB_CLIENT_ID: string;
      IB_CLIENT_SECRET: string;
      IB_CLIENT_BUILDERHUB_SENDER_KEY: string;
      REDIS_URL: string;
      SQS_MAIN_QUEUE_URL: string;
      SQS_MAIN_DEAD_QUEUE_URL: string;
      SQS_COMPLETE_QUEUE_URL: string;
      SQS_COMPLETE_DEAD_QUEUE_URL: string;
      /**
       * Supertokens cookie domain
       */
      DOMAIN: string;
      POSTGRESQL_USER: string;
      POSTGRESQL_PASSWORD: string;
      POSTGRESQL_CONTAINER_NAME: string;
      POSTGRESQL_DEFAULT_DB: string;
      POSTGRESQL_PORT: string;
      SUPERTOKENS_PORT: string;
      SUPERTOKENS_CONTAINER_NAME: string;
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_VECTORDRAW_LICVAL: string;
      NEXT_PUBLIC_SERVICE_URL: string;
      NEXT_PUBLIC_KAKAO_MAP_KEY: string;
      /**
       * Supertokens cookie domain
       */
      NEXT_PUBLIC_DOMAIN: string;
      NEXT_PUBLIC_TUNNEL?: string;
    }
  }
}

export {};
