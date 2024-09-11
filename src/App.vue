<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
import { useWindowSize } from '@vueuse/core'

const items: MenuItem[] = [
  {
    label: 'Kaartlagen',
    url: '/layers',
    icon: 'pi pi-map',
    class: ''
  },
  {
    label: 'Gebruiker',
    url: '/user',
    icon: 'pi pi-users',
    class: ''
  }
]

const { width } = useWindowSize()
</script>

<template>
  <Toast />
  <Splitter
    class="min-h-screen max-h-screen !rounded-none !border-none"
    :layout="width < 768 ? 'vertical' : 'horizontal'"
  >
    <SplitterPanel :size="20" :min-size="10">
      <nav class="p-4">
        <div>
          <RouterLink to="/">
            <span class="text-xl font-semibold">Admin</span>
          </RouterLink>
        </div>
        <div class="border-l-2 border-slate-200 my-4 px-2">
          <Menu
            :model="items"
            class="!border-none"
            :pt="{
              itemLink: (options: any) => ({
                id: 'itemLink',
                class: ['!px-4 !py-2']
              }),
              itemContent: (options: any) => ({
                id: 'itemContent',
                class: ['!px-0 !py-2']
              }),
              item: (options: any) => ({
                id: 'item',
                class: ['!px-0']
              })
            }"
          ></Menu>
        </div>
      </nav>
    </SplitterPanel>
    <SplitterPanel :size="80" :min-size="50" class="!overflow-scroll">
      <RouterView />
    </SplitterPanel>
  </Splitter>
</template>
