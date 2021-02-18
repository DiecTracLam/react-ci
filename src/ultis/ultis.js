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

// export function signUp(userInfo) {
//     return new Promise((resolve, reject) => {
//         const { user, password } = userInfo;
//         db.collection('users')
//             .where('user','==',user)
//             .get()
//             .then(querySnapshot=>{
//                 if(querySnapshot.empty){
//                     db.collection('users').add({
//                         user,
//                         password
//                     }).then(data=>{
//                         console.log('user has been create');
//                         resolve(data.id);
//                     })
//                 }
//                 else{
//                     throw new Error ('User was existed');
//                 }
//             }).catch(err=>{
//                 reject(err)
//             })
//     })
//     // console.log(firebaseConfig);
// } 

// export function addToDo(userInfo) {
//     return new Promise((resolve, reject) => {
//         const { user, password } = userInfo;
//         db.collection('todoApps')
//             .where('user','==',user)
//             .get()
//             .then(querySnapshot=>{
//                 if(querySnapshot.empty){
//                     db.collection('todoApps').add({
//                         user,
//                         password
//                     }).then(data=>{
//                         console.log('user has been create');
//                         resolve(data.id);
//                     })
//                 }
//                 else{
//                     throw new Error ('User was existed');
//                 }
//             }).catch(err=>{
//                 // alert(err);
//             })
//     })
//     // console.log(firebaseConfig);
// } 

// export function editTodo(userInfo) {
//     const {playgame,everyday}=userInfo;
//     db.collection('todoApps').doc('ZsWyNcJiKGkfrXBW0BgK').set({
//         playgame,
//         everyday
//     },{
//         merge:true
//     })
// }

// export function getTodo(userID){
//     db.collection('todoApps').where('user','==',userID.user)
//     .get()
//     .then(querySnapshot=>{
//         const todoList=[];
//         if(querySnapshot.empty)
//             console.log('Empty');
//         // console.log(typeof querySnapshot);
//         querySnapshot.forEach(doc=>{
//             todoList.push({
//                 id:doc.id,
//                 ...doc.data()            
//             })
//             console.log(todoList);
//         })
//     })
// }
let i = 0;
export function getTodo(userID) {
    return new Promise((resolve, reject) => {
        db.collection('todos').where('ownerID', '==', userID).get()
            .then(data => {
                if (data.empty)
                    console.log('Empty')
                let list = []
                data.forEach(data => {
                    list.push({ ...data.data() });
                    i++;
                })
                resolve(list);
            })
    })
}

export function signup({ user, password }) {
    return new Promise((resolve, reject) => {
        db.collection('users').where('user', '==', user).get()
            .then(querysnapShort => {
                if (querysnapShort.empty) {
                    db.collection('users').add({
                        user,
                        password
                    }).then(data => {
                        resolve(data.id);
                    })
                }
                else
                    alert("Username was existed")
            }
            )
    })
}

export function signinUtis({ user, password }) {
    return new Promise((resolve, reject) => {
        user=user.trim();
        db.collection('users').where('user', '==', user).get()
            .then(querysnapShort => {
                if (querysnapShort.empty) {
                    throw new Error("Username wrong")
                }
                let data = [];
                querysnapShort.forEach(doc => {
                    data.push({
                        userID: doc.id,
                        ...doc.data(),
                    })
                })
                if (data[0]['password'] == password) {
                    console.log(data[0]['userID'])
                    resolve(data[0]['userID'])
                }
                throw new Error('Login failed')

            })
            .catch(mess => {
                reject(mess);
            })
    })
}
export function updateTodo(newTodo) {
    db.collection('todos').doc(newTodo.id).set(
        newTodo
        , {
            merge: true
        })
}
export function addTodo(newTodo) {
    console.log(newTodo)
    return new Promise((resolve, reject) => {
        db.collection('todos').add(newTodo)
            .then(data => {
                resolve(data.id);
            })
    })
}
export function removeToDo(todo) {
    db.collection('todos').doc(todo.id).delete()
}
export function infor(userID) {
    return new Promise((resolve, reject) => {
        console.log(userID)
        db.collection('users').doc(userID).get()
            .then(data => {
                resolve(data.data().img)
            })
    })
}