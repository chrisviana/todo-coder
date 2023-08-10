import style from "./styles.module.css";
import icone from "../../assets/trash.svg";

export function TodoList({ tarefas }) {

  return (
    <div className={style.container}>
      <ul>
        {tarefas && 
          tarefas.map((terefa, index) => {
            return (
              <li key={index}>
                {terefa}
                <button className={style.btnExcluir}>
                  <img src={icone} />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
