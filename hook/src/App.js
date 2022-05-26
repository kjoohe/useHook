// import react, {useReducer, useState} from 'react';
// import Todo from './Todo';

// const reducer = (state, action) => {
//   switch(action.type){
//     case 'add-todo':
//       const todo =action.payload.todo;
//       const newTodo ={
//         id: Date.now(),
//         todo,
//         isHere: false
//       }
//       return{
//         count: state.count+1,
//         todos: [...state.todos, newTodo],
//       }
//       case 'delete-todo':
//         return {
//           count : state.count - 1,
//           todos: state.todos.filter(
//             (todo) => todo.id !== action.payload.id
//           )
//         }//변경될 state넣어주기
//       default:
//         return state;
//   }
// };

// const initialState = {
//    count : 0,
//    todos : [],
// }

// function App() {
//   const [todo, setTodo] = useState('');
//   const [countTodo, dispatch] = useReducer (reducer, initialState)

//   return (
//     <div>
//       <h1>TODO</h1>
//       <p>남은 TODO 수 : {countTodo.count} </p>
//       <input 
//       type="text"
//       placeholder = "할 일"
//       value ={todo} 
//       onChange = {(e) => setTodo(e.target.value)}/>
//       <button onClick={()=>{
//         dispatch ({type: `add-todo`, payload: {todo}})
//       }}>추가</button>
//       {countTodo.todos.map((todo) => {
//         return<Todo key={todo.id} 
//         todo={todo.todo}
//         dispatch={dispatch}
//         id ={todo.id} />
//       })}
//     </div>
//   )
// }

// export default App;



// import React from 'react';
// import useChangeAppState, {
//   STATE_START,
//   STATE_RUNNING
// } from './Debug';

// export default function App() {
//   const [state, next] = useChangeAppState(true);
//   const msg = 
//     state === STATE_START
//       ? '앱 시작'
//       : state === STATE_RUNNING
//       ? '앱 시작'
//       : '앱 종료';
//   return (
//     <div>
//       <p>{msg}</p>
//       <button onClick={next}>next</button>
//     </div>
//   );
// }

// import React, { useRef, useState } from "react";

// const App = () =>{
//     const [count, setCount] = useState(0);
//     //countRef값안에는 {current: 0}이 들어있음
//     const countRef = useRef(0);

//     console.log(countRef)

//     console.log (' 렌더링 ')

//     const increaseCountState = () => {
//         setCount(count + 1);
//     };

//     const increaseCountRef = () => {
//         countRef.current = countRef.current + 1;
//     };


//     return (
//         <div>
//             <p>State : {count}</p>
//             <p>Ref: {countRef.current}</p>
//             <button onClick={increaseCountState}>State 올리기</button>
//             <button onClick={increaseCountRef}>Ref 올리기</button>
//         </div>
//     )
// }
// export default App;


import React, {useEffect, useRef} from 'react';

const App = () => {
    const logRef =useRef('')

    useEffect(()=> {
        //logRef에 무엇이 있는지 찍어줌
        //useRef안에는 current가 들어있음
       console.log(logRef)
        // input 요소가 포커스되게하기위해서
        logRef.current.focus();
    },[])
    return (
        <div>
            {/* input요소를 current안에 넣어주기 위해서 ref={logRef} */}
            <input ref={logRef} type="text" placeholder='아이디' />
            <button>로그인</button>
        </div>
    )
}

export default App;