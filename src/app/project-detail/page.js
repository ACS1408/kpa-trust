import KPABreadcrumbs from "@/components/KPABreadcrumbs";
import ProjectDetail from "@/components/ProjectDetail";

export default function Event() {
  return (
    <main>
      <KPABreadcrumbs navigation={navigation} />
      <ProjectDetail />
    </main>
  );
}

const navigation = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "Projects",
    url: "/projects",
  },
  {
    page: "Help the homeless with their dream home",
    url: "/project-detail",
  },
];
