import KPABreadcrumbs from "@/components/KPABreadcrumbs";
import EventDetail from "@/components/EventDetail";

export default function Event() {
  return (
    <main>
      <KPABreadcrumbs navigation={navigation} />
      <EventDetail />
    </main>
  );
}

const navigation = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "Our Events",
    url: "/events",
  },
  {
    page: "Blood donation campaign by KPA UAE chapter",
    url: "/event-detail",
  },
];
