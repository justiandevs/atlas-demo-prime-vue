<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const products: Ref<any[][]> = ref([
  [
    { id: 1, name: 'Beheerders' },
    { id: 2, name: 'Admins' },
    { id: 3, name: 'Moderators ' }
  ],
  [{ id: 5, name: 'Kijkers' }]
])

const username: Ref<string> = ref('Willem')

const save = (e: MouseEvent) => {
  e.preventDefault()

  toast.add({
    severity: 'success',
    summary: 'De gebruiker is succesvol opgeslagen.',
    life: 2000
  })
}
</script>

<template>
  <main class="p-8 md:p-14 flex flex-col gap-2 items-start">
    <h1 class="text-2xl font-semibold">Gebruiker</h1>
    <p>Dit zijn velden die handig kunnen zijn bij het beheren van een gebruiker.</p>

    <form class="mt-4 flex flex-col gap-8 w-full md:w-1/2">
      <div class="flex flex-col gap-4">
        <label class="font-medium">Gebruikersnaam</label>
        <InputText type="text" v-model="username" />
      </div>
      <div class="flex flex-col gap-4">
        <label class="font-medium">Profielfoto</label>
        <FileUpload name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000">
          <template #empty>
            <span>Sleep een profielfoto naar hier om die te uploaden.</span>
          </template>
        </FileUpload>
      </div>
      <div class="flex flex-col gap-4">
        <label class="font-medium">Selecteer groep(en)</label>
        <PickList v-model="products" dataKey="id" breakpoint="1400px">
          <template #option="{ option }">
            {{ option.name }}
          </template>
        </PickList>
      </div>

      <div>
        <Button type="submit" @click="(e) => save(e)">Opslaan</Button>
      </div>
    </form>
  </main>
</template>
