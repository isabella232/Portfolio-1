import IKeyPoint from "@/models/keypoint";
import ILorem from "@/models/lorem";
import IProject from "@/models/project";
import ISkill from "@/models/skill";
import { initializeApp } from "firebase/app";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});
const firestore = getFirestore(app);
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const SkillsCol = createCollection<ISkill>("Skills");
export const LoremsCol = createCollection<ILorem>("Lorems");
export const ProjectsCol = createCollection<IProject>("Projects");
export const KeyPointsCol = createCollection<IKeyPoint>("KeyPoints");
