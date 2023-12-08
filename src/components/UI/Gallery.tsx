import { component$, useComputed$, useOnDocument, useSignal,$ } from "@builder.io/qwik";

interface GalleryList { 
    list: string[],
    page_no: number,
    page_size: number,
    total: number,
    finished: boolean,
}

export default component$<GalleryList>(({ list }) => {
    const page_no = useSignal(1)
    const page_size = useSignal(4)
    const total_page = useComputed$(() => {
        return Math.ceil(list.length / page_size.value)
    })
    useOnDocument('scroll', $(() => { 
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const totalHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (scrollPosition + windowHeight >= totalHeight) {
            if (total_page.value > page_no.value) { 
                page_no.value += 1
            }
      }
    }))
    /**
     * 将 list 改成每 3 个一组
     */
    const newList = useComputed$(() => { 
        const arr = []
        for (let i = 0; i < list.length; i += 3) {
            arr.push(list.slice(i, i + 3))
        }
        return arr
    })
    const currentList = useComputed$(() => {
        return newList.value.slice(0, page_no.value*page_size.value)
    })
  return (
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
          {
              currentList.value.map((v:string[]) => { 
                  return (
                      <div class="grid gap-4">
                            {
                                v.map((img:string) => { 
                                    return (
                                        <img src={img} class="h-auto max-w-full rounded-lg" alt="钟晨瑶啦" />
                                    ) 
                                })
                            }
                    </div>
                  )
               })
          }
    </div>
  )
})
