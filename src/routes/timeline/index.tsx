import { component$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => { 
  return (
    <>
      <div class="time-line">time-line</div>
    </>
  )
})
export const head: DocumentHead = {
  title: "时间纪年-IZhong 粉丝站",
  meta: [
    {
      name: "时间纪年",
      content: "Hi,我在这里记录了一些关于她的故事",
    },
  ],
};
