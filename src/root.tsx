import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { initFlowbite }  from "flowbite"
import "./global.css";

export default component$(() => {
  /**
   * 注册 tailwindcss ui component
   */
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => { 
    initFlowbite()
  });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="zh-cn" class="flex flex-col min-h-screen dark:bg-black">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
