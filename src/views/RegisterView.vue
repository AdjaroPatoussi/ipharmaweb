<script setup>
import FormFilePicker from '@/components/FormFilePicker.vue'
import { reactive } from 'vue'
import { mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
 import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
//mport { projectAuth } from '../firebase/config';
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
mainStore.setUrl(null)
const p  = reactive({
  nom: '',
  responsable:'',
  email: '',
  phone: '',
  address:'',
  image: null
})

  
 
const submit = async () => {
        
    
      }

</script>

<template>
   
  <SectionFullScreen  
    v-slot="{ cardClass, cardRounded }"
    bg="login"
  >a
 
    <CardBox
      :class="cardClass"
      :rounded="cardRounded"
      form
      @submit.prevent="submit"
    >
      <FormField
        label="nom  de la pharmacie"
        help="ENtrer le nom  de la  pharmacie"
        >
        <FormControl
          v-model="p.nom"
          type="text"
          placeholder="Le nom  de  la pharmacie"
          required
        />
      </FormField>

      <FormField
        label="nom  du  responsable"
        help="Entrer le nom  du  responsable  de la  pharmacie"
        >
        <FormControl
          v-model="p.responsable"
          type="text"
          placeholder="Responsable  de  la pharmacie"
        />
      </FormField>

      <FormField
        label="Email  de la  parmacie"
        help="Entrer l'email  de  la pharmacie"
        >
        <FormControl
          v-model="p.email"
          type="email"
          placeholder="emailpharmacie@pharmacie.com"
        />
      </FormField>

      <FormField
        label="Numero  de la  parmacie"
        help="Numero  de  la pharmacie"
        >
        <FormControl
          v-model="p.phone"
          type="tel"
           required
          placeholder="+228 00 00 00 00"
        />
      </FormField>
      <DividerHorizontal />
       <FormField
        label="Adresse  de la  parmacie"
        help="Adresse  de  la pharmacie"
        >
        <FormControl
          v-model="p.address"
          type="text"
          placeholder="Lome,Adidogome,,Asiyeye"
        />
      </FormField>  


      <FormField
        label="Mot de passe "
        help="Entrer  votre mot de passe"
      >
        <FormControl
          v-model="p.pass"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          placeholder="*************"
          autocomplete="current-password"
        />
      </FormField>

       <FormField
        label="Mot de passe "
        help="Entrer  votre mot de passe"
      >
        <FormControl
          v-model="p.confpass"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          placeholder="*************"
          autocomplete="current-password"
        />
      </FormField>
      
      <FormField
        label="Photo   de la  parmacie"
        help="Photo  de  la pharmacie"
        >
      <FormFilePicker  v-model="p.image"   @change="handleChange"/>
      </FormField>

      <FormField
        label="Autorisation   de la  parmacie"
        help="Photo  de l'autorisation  la pharmacie"
        >
      <FormFilePicker  v-model="p.image"   @change="handleChange"/>
      </FormField>
         
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
         
      </BaseButtons>
      
     
    
    </CardBox>
    
    
  </SectionFullScreen>
  
</template>
