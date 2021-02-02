import { firebaseConfig } from '../config/config.firebase.js';
import "firebase/firestore";
import firebase from 'firebase/app'
try {
    firebase.initializeApp(firebaseConfig)
}
catch {
    console.log('Firebase was installed')
}
const db = firebase.firestore()

export function signUp(userInfo) {
    return new Promise((resolve, reject) => {
        const { user, password } = userInfo;
        db.collection('users')
            .where('user','==',user)
            .get()
            .then(querySnapshot=>{
                if(querySnapshot.empty){
                    db.collection('users').add({
                        user,
                        password
                    }).then(data=>{
                        console.log('user has been create');
                        resolve(data.id);
                    })
                }
                else{
                    throw new Error ('User was existed');
                }
            }).catch(err=>{
                reject(err)
            })
    })
    // console.log(firebaseConfig);
} 

export function addToDo(userInfo) {
    return new Promise((resolve, reject) => {
        const { user, password } = userInfo;
        db.collection('todoApps')
            .where('user','==',user)
            .get()
            .then(querySnapshot=>{
                if(querySnapshot.empty){
                    db.collection('todoApps').add({
                        user,
                        password
                    }).then(data=>{
                        console.log('user has been create');
                        resolve(data.id);
                    })
                }
                else{
                    throw new Error ('User was existed');
                }
            }).catch(err=>{
                // alert(err);
            })
    })
    // console.log(firebaseConfig);
} 

export function editTodo(userInfo) {
    const {playgame,everyday}=userInfo;
    db.collection('todoApps').doc('ZsWyNcJiKGkfrXBW0BgK').set({
        playgame,
        everyday
    },{
        merge:true
    })
}

export function getTodo(userID){
    db.collection('todoApps').where('user','==',userID.user)
    .get()
    .then(querySnapshot=>{
        const todoList=[];
        if(querySnapshot.empty)
            console.log('Empty');
        // console.log(typeof querySnapshot);
        querySnapshot.forEach(doc=>{
            todoList.push({
                id:doc.id,
                ...doc.data()            
            })
            console.log(todoList);
        })
    })
}