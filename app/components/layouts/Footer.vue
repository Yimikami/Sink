<script setup>
const { title } = useAppConfig()
</script>

<template>
  <section class="md:pt-6">
    <div
      class="
        container flex flex-col items-center py-8
        sm:flex-row
      "
    >
      <span
        class="
          text-xl leading-none font-black text-gray-900 select-none
          dark:text-gray-100
        "
      >{{ title }}</span>
    </div>
  </section>
</template>
