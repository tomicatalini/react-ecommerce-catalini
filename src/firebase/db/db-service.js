import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./db";

export const PRODUCT_COLLECTION_NAME = 'products';
export const ORDER_COLLECTION_NAME = 'orders';
export const CATEGORY_COLLECTION_NAME = 'categories';

export async function get(collectionName, id) {
    const elementRef = doc(db,collectionName, id);
    const element = await getDoc(elementRef);

    return element.exists() ? parseDoc(element) : null;
}

export async function getAll(collectionName) {
    const elementsRef = collection(db, collectionName);
    const elements = await getDocs(elementsRef);

    return elements.empty ? [] : elements.docs.map(element => parseDoc(element));
}

export async function getByFilter(collectionName, filter, value) {
    const elementsRef = collection(db, collectionName);
    const queryResult = query(elementsRef, where(filter,'==',value));

    const elements = await getDocs(queryResult);

    return elements.empty ? [] : elements.docs.map(element => parseDoc(element)); 
}

export async function save(collectionName, data){
    const collectionRef = collection(db, collectionName);
    const newDoc = await addDoc(collectionRef, data);

    return newDoc ? {id: newDoc.id, ...data} : null;
}

export async function update(collectionName, data, id){
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data).catch(err => console.log(err));
}

export async function deleteById(collectionName, id){
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef).catch(err => console.log(err));
}

function parseDoc(doc){
    return {id: doc.id, ...doc.data()}
}