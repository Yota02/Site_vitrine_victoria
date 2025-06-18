<template>
  <div class="home">
    <ProjectHeader />
    <main class="main-content">
      <!-- <ProgressOverview /> -->
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
  padding-top: 20px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .home {
    padding-top: 15px;
  }
  
  .main-content {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .home {
    padding-top: 10px;
  }
  
  .main-content {
    padding: 1rem 0.75rem;
  }
}

@media (max-width: 360px) {
  .main-content {
    padding: 0.75rem 0.5rem;
  }
}
</style>
