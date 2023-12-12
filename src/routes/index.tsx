import { component$, useSignal, useTask$, $, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const imageList = useSignal<string[]>([])
  useTask$(() => { 
    for (let i = 1; i <= 400;i++) { 
      imageList.value.push(`https://images.lv-zcy.com/zcy/zcy${i}.webp`)
    }
  });
  const isLoad = useSignal<boolean>(false)
  const imgContainer = useSignal<HTMLDivElement>()
  const imageMap = useSignal<Map<number, HTMLImageElement>>(new Map())
  const currentKey = useSignal(0);
  const playLoad = $(() => { 
      setInterval(() => {
      if (currentKey.value === 400) { 
        currentKey.value = 1
      } else { 
        currentKey.value += 1
      }
    }, 150)
  })
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => { 
    imageList.value.forEach((v,i) => { 
      const img = new Image()
      img.className = 'object-cover w-full h-full';
      img.src = v;
      img.alt = '郑梓妍！！！！！';
        img.onload = () => {
        if (i+1 === imageList.value.length) {
          isLoad.value = true;
          playLoad()
        }
      }
      imageMap.value.set(i+1, img)
    })
  })
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => { 
    track(() => currentKey.value);
    if (imageMap.value.has(currentKey.value)) {
      imgContainer.value!.innerHTML = '';
      imgContainer.value?.appendChild(imageMap.value.get(currentKey.value) as HTMLImageElement)
    }
  })

  return (
    <section class="flex items-center justify-center flex-1 bg-white dark:bg-gray-900 relative h-[100%]">
      <div ref={imgContainer} class="absolute w-full h-full">
        <img src="https://images.lv-zcy.com/zcy/zcy1.webp" alt="郑梓妍！！！！！"  class="object-cover w-full h-full" />
      </div>
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
