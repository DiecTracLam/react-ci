import './App.css'
import { addToDo, editTodo, getTodo, signUp } from "./ultis/ultis";
signUp({ user: 'Lam', password: '123' })
    .then(function (data) {
        console.log(data)
    })
    .catch(data=>{
        console.log(data);
    })
addToDo({user:'Kien',password:'456'}) 
editTodo({
    everyday:'coi phim , lam bai ',
    playgame:'Lien minh , fifa , ... '
})
getTodo({user:'Kien'})   
function App() {
    return (
        <div></div>
    )
}

export default App;
