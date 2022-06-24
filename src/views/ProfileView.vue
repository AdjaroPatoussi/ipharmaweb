<script setup>
import {  reactive } from 'vue'
 
import {   mdiLock , mdiAsterisk, mdiFormTextboxPassword } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
 
import DividerHorizontal from '@/components/DividerHorizontal.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
 
import BaseButton from '@/components/BaseButton.vue'
 
import BaseButtons from '@/components/BaseButtons.vue'
 
/*
 
var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
 */

 
const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: ''
})

 

const submitPass = () => {
  //
}
</script>

<template>
  

   

  <SectionMain>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
       

      <CardBox
        title="Change Password"
        :icon="mdiLock"
        form
        @submit.prevent="submitPass"
      >
        <FormField
          label="Current password"
          help="Required. Your current password"
        >
          <FormControl
            v-model="passwordForm.password_current"
            :icon="mdiAsterisk"
            name="password_current"
            type="password"
            required
            autocomplete="current-password"
          />
        </FormField>

        <DividerHorizontal />

        <FormField
          label="New password"
          help="Required. New password"
        >
          <FormControl
            v-model="passwordForm.password"
            :icon="mdiFormTextboxPassword"
            name="password"
            type="password"
            required
            autocomplete="new-password"
          />
        </FormField>

        <FormField
          label="Confirm password"
          help="Required. New password one more time"
        >
          <FormControl
            v-model="passwordForm.password_confirmation"
            :icon="mdiFormTextboxPassword"
            name="password_confirmation"
            type="password"
            required
            autocomplete="new-password"
          />
        </FormField>

        <DividerHorizontal />

        <BaseButtons>
          <BaseButton
            type="submit"
            color="info"
            label="Submit"
          />
          <BaseButton
            color="info"
            label="Options"
            outline
          />
        </BaseButtons>
      </CardBox>
    </div>
  </SectionMain>

  
</template>
