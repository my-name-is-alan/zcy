import { component$, $, useSignal, useVisibleTask$, } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

type Theme = 'light' | 'dark'

export default component$(() => {
  const data = useLocation().url.pathname
  const getActiveClass = (path:string) => { 
    if (path === data) { 
      return "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 border-b-blue-500 md:border-b-2"
    }
    return "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  }
  
  const currentTheme = useSignal<Theme>('light')
  useVisibleTask$(() => { 
    const classList = document.querySelector('html')?.classList
    if (classList?.contains('dark')) {
      currentTheme.value = 'dark'
    } else {
      currentTheme.value = 'light'
    }
  })
  const changeTheme = $(() => { 
    const classList = document.querySelector('html')?.classList
    const type = classList?.contains('dark') ? 'light' : 'dark'
    if (type === 'dark') {
      document.querySelector('html')?.classList.add('dark')
      currentTheme.value = 'dark'
    } else {
      document.querySelector('html')?.classList.remove('dark')
      currentTheme.value = 'light'
    }
  })
  return (
    <nav class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/zcy.jpeg" class="h-8 rounded-md" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> ZCY</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick$={()=>changeTheme()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">日/月</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <a href="/" class={ getActiveClass('/')} aria-current="page">Hi，你好</a>
          </li>
          <li>
              <a href="/gallery" class={ getActiveClass('/gallery/')} >光影</a>
          </li>
          <li>
            <a href="/timeline" class={ getActiveClass('/timeline/')}>琐碎</a>
          </li>
          <li>
            <a href="/location" class={ getActiveClass('/location/')}>我们在这</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
})
