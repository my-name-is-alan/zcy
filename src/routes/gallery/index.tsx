import { component$, useStore, useTask$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Gallery from "~/components/UI/Gallery";

/**
 * @name GalleryList
 * @description 相册列表
 * @property {string[]} list 相册列表
 * @property {number} page_no 当前页码
 * @property {number} page_size 每页数量
 * @property {number} total 总数
 * @property {boolean} finished 是否加载完成
 * @example
 * {
 * list: [],
 * page_no: 1,
 * page_size: 20,
 * total: 0,
 * finished: false,
 * }
 */
interface GalleryList { 
  list: string[],
  page_no: number,
  page_size: number,
  total: number,
  finished: boolean,
}

export default component$(() => {
  const galleryList = useStore<GalleryList>({
    list: [],
    page_no: 1,
    page_size: 20,
    total: 0,
    finished: false,
  }) 
  useTask$(async () => { 
    const data = await fetch('http://101.132.250.82:8888/all')
    const json = await data.json()
    galleryList.list = json.map((v:string)=> `http://101.132.250.82:8888/image/${v}`)
  })
  return (
    <div class="pt-4">
      <Gallery {...galleryList} />
    </div>
  )
})
export const head: DocumentHead = {
  title: "相册-IZhong 粉丝站",
  meta: [
    {
      name: "相册",
      content: "Hi,我在这里保存了一些关于她的照片",
    },
  ],
};
