 

<script setup>
 
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount  } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
 import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import useLogin from '@/composables/useLogin'
 import {projectAuth} from  '../firebase/config'
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
        
      projectAuth.sendPasswordResetEmail(form.login).then(() =>  {
              router.push({ name: 'login' })
          }).catch((error) =>  {
              console.log(error);
               mainStore.setError(error)
              console.log(form.login,form.pass ,mainStore.error )
          });
      
   
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
           placeholder="it-innovation@gmail.com"
          :icon="mdiAccount"
          name="login"
          type="email"
          autocomplete="username"
          
        />
      </FormField>
 
      <DividerHorizontal />

      <BaseButtons>
        <BaseButton
          type="submit"
          color="info"
          label="Reset"
        />
        <BaseButton
           to="/login"
          color="info"
          outline
          label="Annuler"
          type="reset"
        />
      </BaseButtons>
   
    </CardBox>

    
  </SectionFullScreen>
  
</template>
