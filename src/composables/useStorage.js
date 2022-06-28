import { projectStorage } from '../firebase/config'
import { ref } from "vue"
import { useMainStore } from '@/stores/main'

 
//import getUser from "./getUser"
const mainStore = useMainStore()

//const { user } = getUser()

const useStorage = () => {
  const error = ref(null)
  const url = ref(null)
  const filePath = ref(null)

  const uploadImage = async (file,pharmacie) => {
    filePath.value = `pharmacie/${pharmacie}/${file.name}`
    const storageRef = projectStorage.ref(filePath.value)

    try {
      const res = await storageRef.put(file)
      url.value = await res.ref.getDownloadURL()

      console.log('je suis dans try')
      mainStore.setUrl(url.value)
      console.log('1',mainStore.image_url)
    } catch (err) {
      console.log(err.message)
      error.value = err
      console.log('je suis pas dans try')
    }
  }

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    try {
      await storageRef.delete()
    } catch (err) {
      console.log(err.message)
      error.value = err
    }
  }

  return { uploadImage, deleteImage, url, filePath, error }
}

export default useStorage;