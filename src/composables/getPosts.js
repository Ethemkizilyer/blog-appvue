import { ref } from "vue";
import {fb} from "../firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const getPosts =async() => {
const db = getFirestore()
const fbRef= collection(db,"posts")
const fbDocs = await getDocs(fbRef);
const data = fbDocs.docs.map((doc)=>doc.data())

return data
}

export default getPosts