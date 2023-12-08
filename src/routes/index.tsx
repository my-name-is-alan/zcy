import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
      <section class="flex items-center justify-center flex-1 bg-white dark:bg-gray-900 relative h-[100%]">
        <video muted loop class="object-cover w-full h-full absolute top-0 z-1"  autoplay>
          <source src="/home_v.webm" />
        </video>
      <div class="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12 z-10">

<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">完蛋，</span>我被钟晨瑶包围啦</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">抖音：@战斗天使ZCY</p>
          </div>
      </section>
  );
});

export const head: DocumentHead = {
  title: "Hi,钟晨瑶",
  meta: [
    {
      name: "钟晨瑶",
      content: "战斗天使 ZCY",
    },
  ],
};
