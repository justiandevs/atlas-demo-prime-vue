<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const toast = useToast()

const layer_name: Ref<string> = ref('Scholen 2024')

const selected_datasets: Ref<any> = ref()

const datasets: Ref<any[]> = ref([
  { label: 'Scholen 2024', value: 1 },
  { label: 'BAG Adressen', value: 2 },
  { label: 'Bomen', value: 3 }
])

const template: Ref<string> = ref(
  '{\n' +
    '  "name": "GeoStyler Demo",\n' +
    '  "rules": [\n' +
    '    {\n' +
    '      "name": "Rule 1",\n' +
    '      "symbolizers": [\n' +
    '        {\n' +
    '          "kind": "Fill",\n' +
    '          "color": "#0E1058"\n' +
    '        }\n' +
    '      ]\n' +
    '    }\n' +
    '  ]\n' +
    '}'
)

const visible: Ref<boolean> = ref(false)

const save = (e: MouseEvent) => {
  e.preventDefault()

  toast.add({
    severity: 'success',
    summary: 'De kaartlaag is succesvol opgeslagen.',
    life: 2000
  })
}
</script>

<template>
  <main class="p-8 md:p-14 flex flex-col gap-2 items-start">
    <h1 class="text-2xl font-semibold">Kaartlagen</h1>
    <p>Dit zijn velden die handig kunnen zijn bij het beheren van een gebruiker.</p>

    <form class="mt-4 flex flex-col gap-8 w-full md:w-1/2">
      <div class="flex flex-col gap-4">
        <label class="font-medium">Laagnaam</label>
        <InputText type="text" v-model="layer_name" />
      </div>

      <div class="flex flex-col gap-4">
        <label class="font-medium">Datasets</label>
        <MultiSelect
          v-model="selected_datasets"
          :options="datasets"
          optionLabel="label"
          filter
          placeholder="Selecteer datasets"
        />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between items-center">
          <label class="font-medium">Stijl voor WFS / MVT laag</label>
          <Button size="small" outlined @click="visible = true">Uitleg</Button>
        </div>
        <Textarea v-model="template" autoResize rows="5" cols="30" />
      </div>

      <div>
        <Button type="submit" @click="(e) => save(e)">Opslaan</Button>
      </div>
    </form>

    <Drawer v-model:visible="visible" header="Uitleg" position="right">
      <p>
        Door middel van dit veld kan je de standaard GeoServer stijl overschrijven, de inhoud van
        dit veld moet opgesteld zijn in het GeoStyler formaat.
      </p>
    </Drawer>
  </main>
</template>
