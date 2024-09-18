import styles from "./Home.module.css";
import todolist from "../../img/todolist.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>StrugglerDev</span>
      </h1>
      <p>Comece a gerenciar as suas tarefas agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={todolist} alt="list" />
    </section>
  );
}

export default Home;
