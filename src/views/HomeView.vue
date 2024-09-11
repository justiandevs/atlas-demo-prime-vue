<script setup lang="ts"></script>

<template>
  <main class="p-8 md:p-14 flex flex-col gap-2 items-start">
    <h1 class="text-2xl font-semibold">PrimeVue demo voor Atlas</h1>
    <p>
      Welkom bij de PrimeVue demo voor Atlas. Aan de hand van deze demo laten wij met een paar
      componenten zien wat er onder andere haalbaar zou zijn met het gebruik van de component
      library PrimeVue wanneer wij dit gaan inzetten binnen Atlas.
    </p>
    <Divider />
    <div class="mt-4 flex md:flex-row flex-col gap-8">
      <RouterLink to="/layers">
        <Panel header="Kaartlagen" class="!bg-slate-100 !border-none">
          <p>Stel navigeren naar kaartlagen</p>
        </Panel>
      </RouterLink>
      <RouterLink to="/user">
        <Panel header="Gebruiker" class="!bg-slate-100 !border-none">
          <p>Stel navigeren naar gebruiker</p>
        </Panel>
      </RouterLink>
    </div>
  </main>
</template>
