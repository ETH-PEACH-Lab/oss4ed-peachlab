"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ID = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const promises_1 = __importDefault(require("fs/promises")); // Use fs/promises for async file operations
const firebaseConfig = {
    apiKey: "AIzaSyDqrv37hT1ger43uxOHRYuizclaRvamiKY",
    authDomain: "oss4ed.firebaseapp.com",
    projectId: "oss4ed",
    storageBucket: "oss4ed.appspot.com",
    messagingSenderId: "831552707348",
    appId: "1:831552707348:web:f9a94bc1272ef513240001",
    measurementId: "G-C533BSXLM2"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.USER_ID = "0";
const exerciseCollect = "exercises";
const techEvalCollect = "techEval";
const readAllExercises = async () => {
    try {
        const allDocSnap = await (0, firestore_1.getDocs)((0, firestore_1.collection)(db, exerciseCollect));
        let allExercises = [];
        allDocSnap.forEach((docSnap) => {
            if (!docSnap.exists() || !docSnap.data())
                return;
            const docSnapData = docSnap.data();
            allExercises.push(docSnapData);
        });
        return allExercises;
    }
    catch (e) {
        console.error(`Error reading all Exercises: `, e);
    }
    return null;
};
async function exportFirestoreData(filename = 'firestore_data.json') {
    console.log('Starting data export process...');
    try {
        const data = await readAllExercises();
        if (data && data.length > 0) {
            const jsonData = JSON.stringify(data, null, 2);
            await promises_1.default.writeFile(filename, jsonData, 'utf8');
            console.log(`Data successfully written to ${filename}`);
        }
        else if (data && data.length === 0) {
            console.log('No data found in the collection to write.');
        }
        else {
            console.log('Failed to retrieve data from Firestore.');
        }
    }
    catch (error) {
        console.error('Failed to export data to file:', error);
    }
}
exportFirestoreData();
