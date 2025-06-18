<template>
  <div class="team">
    <div class="hero-section">
      <div class="container">
        <h1>Notre Équipe</h1>
        <p class="hero-subtitle">Les experts qui donnent vie à l'intelligence artificielle conversationnelle</p>
      </div>
    </div>
    
    <div class="content">
      <div class="container">
        <div class="team-grid">
          <div class="member-card" v-for="member in teamMembers" :key="member.id">
            <div class="member-avatar">
              <div class="avatar-placeholder">{{ member.initials }}</div>
            </div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
            <div class="member-expertise">
              <span v-for="skill in member.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    id: 1,
    name: "Dr. Marie Dubois",
    role: "Directrice de Recherche",
    bio: "Experte en NLP avec 15 ans d'expérience dans le développement d'IA conversationnelle.",
    initials: "MD",
    skills: ["NLP", "Deep Learning", "Recherche"]
  },
  {
    id: 2,
    name: "Jean Dupont",
    role: "Ingénieur IA Senior",
    bio: "Spécialiste en architectures neuronales et optimisation d'algorithmes d'apprentissage.",
    initials: "JD",
    skills: ["Neural Networks", "Python", "TensorFlow"]
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Data Scientist",
    bio: "Experte en analyse de données conversationnelles et modélisation statistique.",
    initials: "SM",
    skills: ["Data Science", "Statistics", "R"]
  },
  {
    id: 4,
    name: "Pierre Legrand",
    role: "Ingénieur Logiciel",
    bio: "Développeur full-stack spécialisé dans l'intégration de systèmes IA.",
    initials: "PL",
    skills: ["Vue.js", "Node.js", "DevOps"]
  }
])
</script>

<style scoped>
.team {
  padding-top: 60px;
}

.hero-section {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.content {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.member-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(30, 64, 175, 0.1);
}

.member-avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto;
}

.member-name {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.member-role {
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-expertise {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .content {
    padding: 2rem 1rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
