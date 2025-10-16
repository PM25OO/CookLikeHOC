<script setup lang="ts">
import { useRouter } from 'vitepress'

const recipeFiles = import.meta.glob(['/(炒菜|炖菜|烤类|凉拌|卤菜|汤|砂锅菜|配料|烫菜|饮品|早餐|炸品|蒸菜|主食|煮锅)/**/*.md'], { eager: false })

// 过滤并转换路径
const recipes = Object.keys(recipeFiles)
  .filter(path => !path.endsWith('README.md'))
  .map(path => path.replace('.md', ''))

const router = useRouter()

const goToRandomRecipe = () => {
  if (recipes.length === 0) return
  const randomIndex = Math.floor(Math.random() * recipes.length)
  router.go(recipes[randomIndex])
}
</script>

<template>
  <div class="random-recipe">
    <button @click="goToRandomRecipe" class="random-button">
      🎲 今天吃什么?
    </button>
  </div>
</template>

<style scoped>
.random-recipe {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.random-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.random-button:hover {
  transform: scale(1.05);
}
</style>