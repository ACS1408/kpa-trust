import KPABreadcrumbs from "@/components/KPABreadcrumbs";
import NewsDetail from "@/components/NewsDetail";
import NewsDetailGallery from "@/components/NewsDetailGallery";

export default function News() {
  return (
    <main>
      <KPABreadcrumbs navigation={navigation} />
      <NewsDetail />
      <NewsDetailGallery />
    </main>
  );
}

const navigation = [
  {
    page: "Home",
    url: "/",
  },
  {
    page: "News & Stories",
    url: "/news",
  },
  {
    page: "Kerala Pravasi Association lays the foundation for its first housing project",
    url: "/news-detail",
  },
];
