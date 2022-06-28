<script setup>
import { reactive } from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'
import { projectAuth,projectFirestore  } from '../firebase/config';
import useStorage from '@/composables/useStorage'
 
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'
 
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()
mainStore.setUrl(null)
const p  = reactive({
  nom: '',
  responsable:'',
  email: '',
  phone: '',
  address:'',
  longitude:'',
  latitude:'',
  image: null
})

 
const router = useRouter()


const { url,filePath,uploadImage } = useStorage()
console.log('2',url.value)
// const { error, addDoc } = useCollection('pharmacie')
// const { user } = getUser()
// const router = useRouter()
// const { errorr, signup, isPending } = useSignup()
 
const newPassword = 'projectAut3AVR3 3V 3ABVREZVBe"h.sword()';

console.log(newPassword)
console.log('3',url.value)
const handleSubmit = async () => {
     projectAuth.createUserWithEmailAndPassword(p.email, newPassword)
                .then((user) => {
                     if (p.image.value) {
                      uploadImage(p.image.value,user.user.uid )
                     }
                     
                    console.log(mainStore.image_url)
                    projectFirestore.collection("pharmacie").doc(user.user.uid).set({
                        nom: p.nom,
                        responsable: p.responsable,
                        email:p.email,
                        phone:p.phone,
                        adress:p.address,
                        latitude:p.latitude,
                        longitude:p.longitude,
                        coverUrl: mainStore.image_url,
                        filePath: filePath.value,
                        createdAt: timestamp(),
                        is_active:true,
                        is_open:false,
                       
                    })
                     .then(function() {
                       console.log(mainStore.image_url)
                       mainStore.setUrl(null)
                      console.log("Document successfully written!")
                      router.push({ name: 'dashboard' })
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

                   
                })
                .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
   // if (p.image.value) {
      //  // isPending.value = true
      //   await uploadImage(p.image.value )
           
      //   const res = await addDoc({
      //     title: title.value,
      //     description: description.value,
      //     userId: user.value.uid,
      //     userName: user.value.displayName,
      //     coverUrl: url.value,
      //     filePath: filePath.value, // so we can delete it later
      //     songs: [],
      //     createdAt: timestamp()
      //   })
      //   isPending.value = false
      //   if (!error.value) {
      //     router.push({ name: 'PlaylistDetails', params: { id: res.id }})
      //   }
     }
    
    console.log('5',url.value)
    // allowed file types
    const types = ['image/png', 'image/jpeg']
    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)

      if (selected && types.includes(selected.type)) {
       p.image.value = selected
        //fileError.value = null
      } else {
        p.image.value = null
       // fileError.value = 'SVP votre fichier doit etre  une  image png ou jpg)'
      }
    }
   
    console.log('4',url.value)


</script>

<template>
   
   

  <SectionMain>
    <SectionTitleBarSub
       
      title="Forms pharmacy"
    />
    <CardBox
      form
      @submit.prevent="handleSubmit"
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

      <FormField label="Localisation">
        <FormControl
          v-model="p.longitude"
          type="number"
          placeholder="Longitude"
           required
        />
        <FormControl
          v-model="p.latitude"
          type="number"
          placeholder="Latitude"
           required
        />

      </FormField>
        <DividerHorizontal />
      <FormField
        label="Photo   de la  parmacie"
        help="Photo  de  la pharmacie"
        >
      <FormFilePicker  v-model="p.image"   @change="handleChange"/>
      </FormField>
      
      <DividerHorizontal />

      <BaseButtons>
        <BaseButton
          type="submit"
          color="info"
          label="Submit"
        />
        <BaseButton
          type="reset"
          color="info"
          outline
          label="Reset"
        />
      </BaseButtons>
    </CardBox>
  </SectionMain>

   

  
</template>
