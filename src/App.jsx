import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export function App() {
  const tarefas = ["Estudar React", "Estudar React Native", "Estudar NodeJS", "Realizar Feedback"]

  return (
    <>
      <Header />
      <TodoForm />
      <TodoList tarefas={tarefas}/>
      <Footer>
        <p>ToDo desenvolvido na aula da CoderHouse</p>
      </Footer>
      
    </>
  )
}