<script setup>
 
// const click = slug => {
//   slug='white'
import { useRouter } from 'vue-router'
import useLogout from '../composables/useLogout'
 
const { logout } = useLogout()
const router = useRouter()

 
      logout()
      console.log('logged out')
      router.push({ name: 'dashboard' })
 
  
</script>

