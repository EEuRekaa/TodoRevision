import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import HomeView from './pages/home/HomeView'
import FormAddTodoContainer from './pages/form.add.todo/FormAddTodo.container'
import DetailTodoContainer from './pages/detail.todo/DetailTodo.container'
import AllTodosContainer from './pages/all.todos/AllTodos.container';


function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#bcbcbc" highlightColor="#FFFFFF">
        <Router>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/addtodo' element={<FormAddTodoContainer />} />
            <Route path='/detailTodo/:id' element={<DetailTodoContainer />} />
            <Route path='/alltodos' element={<AllTodosContainer />} />
          </Routes> 
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
