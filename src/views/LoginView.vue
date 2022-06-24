 

<script setup>
 
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import useLogin from '@/composables/useLogin'
 
//import { projectAuth } from '../firebase/config';


import { useMainStore } from '@/stores/main'


const mainStore = useMainStore()
 
 mainStore.setError(null)
console.log(mainStore.error)
const form = reactive({
  login: '',
  pass: '',
  remember: ['remember']
})


const router = useRouter()


    
 
// eslint-disable-next-line no-unused-vars
const { error, login, isPending } = useLogin()
console.log(error.value)
 
 
const submit = async () => {
        
      //  
      console.log("ca marche")
     // console.log(form.login,form.pass)
      // eslint-disable-next-line no-unused-vars
      const res = await login(form.login,form.pass)
      if (!error.value) {
        //router.push('/dashboard')
         router.push({ name: 'dashboard' })
      }
      else
      { 
        mainStore.setError(error)
        console.log(form.login,form.pass ,mainStore.error )

      }
      }

   // console.log(erro)
   
 

</script>

<template>
   
  <SectionFullScreen  
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >
 
    <CardBox
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <FormField
        label="Email"
        help="Entrer  votre  email"
      >
        <FormControl
          v-model="form.login"
          :icon="mdiAccount"
          name="login"
          placeholder="it-innovation@gmail.com"
          type="email"
          autocomplete="username"
          
        />
      </FormField>

      <FormField
        label="Mot de passe "
        help="Entrer  votre mot de passe"
      >
        <FormControl
          v-model="form.pass"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          placeholder="*************"
          autocomplete="current-password"
        />
      </FormField>

      <FormCheckRadioPicker
        v-model="form.remember"
        name="remember"
        :options="{ remember: 'Se souvenir' }"
      />

      <DividerHorizontal />

      <BaseButtons>
        <BaseButton
          type="submit"
          color="info"
          label="Connexion"
        />
        <BaseButton
        
          color="info"
          outline
          label="Annuler"
          type="reset"
        />
          <BaseButton
          to="/resetpassword"
          color="info"
          outline
          label="Annuler"
          type="reset"
        />
      </BaseButtons>
     <div v-if="error"  >{{ error }}</div>
    </CardBox>

    
  </SectionFullScreen>
  
</template>
