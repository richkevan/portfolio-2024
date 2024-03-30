import { firestore } from "../client";
import { query, collection, getDocs } from "firebase/firestore";

const getBlogPosts = async () => {
  const posts = [];
  try {
    const querySnapshot = query(collection(firestore,"BlogPosts"));
    console.log("querySnapshot", querySnapshot);
    
    const querySnapshotDocs = await getDocs(querySnapshot);
    querySnapshotDocs.forEach((doc) => {
      posts.push({id:doc.id, ...doc.data()});
    });
    return posts;
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
  return posts;
};

const getBlogPost = async (id) => {
  try {
    const doc = await getDoc(doc(firestore, "BlogPosts", id));
    if (doc.exists()) {
      return { id: doc.id, ...doc.data() };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error getting document:", error);
  }
  return null;
};

export { getBlogPosts, getBlogPost };