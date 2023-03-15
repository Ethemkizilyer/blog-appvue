import { ref } from "vue";
import {fb} from "../firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const getPosts =async() => {
const db = getFirestore()
const fbRef= collection(db,"posts")
const fbDocs = await getDocs(fbRef);
const data = fbDocs.docs.map((doc) => doc.data());
const docID = fbDocs.docs.map((doc) => doc.id);
const docdata = fbDocs.docs.map((doc) => {
  return { ...doc.data(), id: doc.id };
});

return docdata;
}

export default getPosts