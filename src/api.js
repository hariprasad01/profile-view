import { collection, doc, getDoc, getDocs, updateDoc, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { formatDocumentResponse } from './utils'

const usersCollectionRef = collection(db, 'users');

export const getAllUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  return data.docs.map((doc) => formatDocumentResponse(doc));
}

export const getUserById = async (id) => {
  const docRef = doc(db, 'users', id)
  const data = await getDoc(docRef)
  return formatDocumentResponse(data);
}

export const updateUserDetails = async (id, details) => {
  const docRef = doc(db, 'users', id)
  return await updateDoc(docRef, details)
}

export const createUser = async (details) => {
  return await addDoc(usersCollectionRef, details)
}

