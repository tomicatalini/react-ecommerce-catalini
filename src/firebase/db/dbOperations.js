import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./db";

export async function get(entity, id) {
    const elementRef = doc(db,entity, id);
    const element = await getDoc(elementRef);

    return element.exists() ? parseDoc(element) : null;
}

export async function getAll(entity) {
    const elementsRef = collection(db, entity);
    const elements = await getDocs(elementsRef);

    return elements.empty ? [] : elements.docs().map(element => parseDoc(element));
}

export async function getByFilter(entity, filter, value) {
    const elementsRef = collection(db, entity);
    const queryResult = query(elementsRef, where(filter,'==',value));

    const elements = await getDocs(queryResult);

    return elements.empty ? [] : elements.docs().map(element => parseDoc(element)); 
}


function parseDoc(doc){
    return {id: doc.id, ...doc.data()}
}