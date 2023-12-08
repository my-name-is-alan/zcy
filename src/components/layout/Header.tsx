import { component$ } from "@builder.io/qwik";

export default component$(() => { 
  return (
    <div class="layout-header">
      <div class="layout-header__logo">
        <a href="/">
        </a>
      </div>
      <div class="layout-header__menu">
        <a href="/about">关于</a>
      </div>
    </div>
  )
});
