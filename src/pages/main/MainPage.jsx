import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
export default function MainPage() {
  const [postLists, setPostLists] = useState([]);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>{
    postLists.map((post) => (<Post key={post.id} post={post} />))}</div>;
}
