import "./styles.css";

export function TodoForm() {
  
  return (
   <form>
    <input 
      type="text"
      placeholder="Adcione uma tarefa"
    />
    <button className="btnAdicionar">Adicionar</button>
   </form>
  )
}