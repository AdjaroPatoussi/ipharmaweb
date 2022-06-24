<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
mainStore.setDarkMode(true)
const router = useRouter()
mainStore.setStyle('white')
mainStore.setDarkMode(false)
router.push({ name: 'dashboard' })
// }
// const click = slug => {
//   slug='white'
  
</script>

