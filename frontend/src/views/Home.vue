<template>
  <div class="home">
    <ProjectHeader />
    <main class="main-content">
      <ProgressOverview />
      <LocalAdvantages />
      <ModulesList />
    </main>
  </div>
</template>

<script setup>
import ProjectHeader from '../components/ProjectHeader.vue'
import ProgressOverview from '../components/ProgressOverview.vue'
import ModulesList from '../components/ModulesList.vue'
import LocalAdvantages from '../components/LocalAdvantages.vue'
</script>

<style scoped>
.home {
  padding-top: 20px; /* Réduction de l'espace avec la navbar */
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}
</style>
