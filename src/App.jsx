import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/common/Hero";
import Divider from "./components/common/Divider";
import About from "./components/common/About";
import Skills from "./components/common/Skills";
import AcademicProjects from "./components/common/AcademicProjects";
import Team from "./components/common/Team";
import Tasks from "./components/common/Tasks";
import Contact from "./components/common/Contact";
function App() {
  return (
    <MainLayout>
      <Hero />
      <Divider />

      <About />
      <Divider />

      <Skills />
      <Divider />

      <AcademicProjects />
      <Divider />
       

      <Team />
      <Divider />

      <Tasks />
        <Divider />

      <Contact />
    </MainLayout>
  );
}

export default App;