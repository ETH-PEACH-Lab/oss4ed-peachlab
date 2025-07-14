import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import * as fs from 'fs/promises'; // Use fs/promises for async file operations

const firebaseConfig = {
    apiKey: "AIzaSyDqrv37hT1ger43uxOHRYuizclaRvamiKY",
    authDomain: "oss4ed.firebaseapp.com",
    projectId: "oss4ed",
    storageBucket: "oss4ed.appspot.com",
    messagingSenderId: "831552707348",
    appId: "1:831552707348:web:f9a94bc1272ef513240001",
    measurementId: "G-C533BSXLM2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const exerciseCollect = "exercises"

// Types
type GuidedExercise = {
    id : number,
    title : string,
    gitInfo : GitInfo,
    exercise : string,
    steps : Step[],
    tags? : string[],
}
type GitInfo = {
    repo : string,
    issue : string,
    pr : string,
}
type Step = {
    id : number,
    summary : string,
    codeSteps : CodeStep[],
}
type CodeStep = {
    id : number,
    summary : string,
    code : string
    path : string,
    range : CodeRange,
}
type CodeRange = {
    start : number,
    end : number,
}
type CodeDiffLocation = {
    path : string,
    range : CodeRange,
}

const readAllExercises = async () => {
    try {
        const allDocSnap = await getDocs(collection(db, exerciseCollect));

        let allExercises : GuidedExercise[] = []
        allDocSnap.forEach((docSnap) => {
            if (!docSnap.exists() || !docSnap.data()) return

            const docSnapData = docSnap.data() as GuidedExercise
            allExercises.push(docSnapData)
        });

        return allExercises as GuidedExercise[]

    } catch (e) {
        console.error(`Error reading all Exercises: `, e);
    }

    return null
}

async function exportFirestoreData(filename = 'firestore_data.json') {
  console.log('Starting data export process...');
  try {
      const data = await readAllExercises();
      if (data && data.length > 0) {
          const jsonData = JSON.stringify(data, null, 2);
          await fs.writeFile(filename, jsonData, 'utf8');
      } else if (data && data.length === 0) {
          console.log('No data found in the collection to write.');
      } else {
          console.log('Failed to retrieve data from Firestore.');
      }
  } catch (error) {
      console.error('Failed to export data to file:', error);
  }
}

exportFirestoreData();
