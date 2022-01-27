import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqTP3bXMcVmJ5sL0uMuN78LCnP1tuTm9s",
    authDomain: "pattas-petshop-ecommerce.firebaseapp.com",
    projectId: "pattas-petshop-ecommerce",
    storageBucket: "pattas-petshop-ecommerce.appspot.com",
    messagingSenderId: "373969698422",
    appId: "1:373969698422:web:132ffefef65f44983a6957"
};
  
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}