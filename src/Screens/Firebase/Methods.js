import React from "react";
import app from "./FirebaseConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
    from "firebase/auth";

import {
    getDatabase,
    set, ref, onValue, push,
}
    from "firebase/database";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPUbxPFids53oWBMJ80TRJdiohE-GXvf0",
    authDomain: "software-development-893aa.firebaseapp.com",
    databaseURL: "https://software-development-893aa-default-rtdb.firebaseio.com",
    projectId: "software-development-893aa",
    storageBucket: "software-development-893aa.appspot.com",
    messagingSenderId: "934678694542",
    appId: "1:934678694542:web:0c906f26c9329c82ba17df",
    measurementId: "G-4J44M94VC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getDatabase(app)



function LoginUser(obj) {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `Users/${res.user.uid}`)
                onValue(reference, (userData) => {
                    if (userData.exists()) {
                        resolve(userData.val())
                    }
                    else {
                        reject('User Not Exist')
                        return <>
                            <span>User Not Found</span>
                        </>
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}


 function SignupUser(obj) {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(
            auth, obj.email,
            obj.password,
            obj.username
        )
            .then((res) => {
                // sending data in database with id

                obj.id = res.user.uid;
                const reference = ref(db, `Users/${obj.id}`)

                // Now setting Data in Database 
                set(reference, obj)
                    .then((res) => {
                        resolve(res, "Data send and user Created")
                    })
                    .catch((err) => {
                        reject(err, "Unknown Error")
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

export {LoginUser,SignupUser};


