import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/not_aicon.svg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="/" h3="Viberr" />
      </div>
    </section>
  );
}

export default Projects;
