<template>
  <div class="home">
    <ProjectHeader />
    <main class="main-content">
      <ProgressOverview />
      <ModulesList />
    </main>
  </div>
</template>

<script setup>
import ProjectHeader from '../components/ProjectHeader.vue'
import ProgressOverview from '../components/ProgressOverview.vue'
import ModulesList from '../components/ModulesList.vue'
</script>

<style scoped>
.home {
  padding-top: 60px; /* Compensation pour la navbar fixe */
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
