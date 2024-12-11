import Card from "../components/Card";
import Layout from "../components/Layout";

// Images
import IntranetIA from "../../public/images/1.png";
import DocumentsIA from "../../public/images/2.png";
import TranscripcioDiaritzacio from "../../public/images/3.png";
import ReunionsIA from "../../public/images/4.png";
import LinksInteres from "../../public/images/5.png";
import Calendari from "../../public/images/6.png";

export default function Dashboard() {
  const data = [
    {
      id: 1,
      title: "Intranet IA",
      description:
        "Permet extreure informació clau de tota la documentació emmagatzemada.",
      image: IntranetIA,
      url: "/intranet",
    },
    {
      id: 2,
      title: "Documents IA",
      description:
        "Possibilita la pujada de documents per a l'extracció d'informació.",
      image: DocumentsIA,
      url: "/documents-ia",
    },
    {
      id: 3,
      title: "Transcripció i diarització",
      description:
        "Transcriu i identifica els diferents participants en les reunions.",
      image: TranscripcioDiaritzacio,
      url: "#",
    },
    {
      id: 4,
      title: "Reunions amb IA",
      description:
        "Genera actes automàtiques i facilita el seguiment i la gestió de les tasques.",
      image: ReunionsIA,
      url: "#",
    },
    {
      id: 5,
      title: "Links d'interès",
      description:
        "Accés ràpid a recursos i enllaços rellevants centralitzats.",
      image: LinksInteres,
      url: "#",
    },
    {
      id: 6,
      title: "Calendari",
      description: "Organitza esdeveniments, reunions i tasques programades.",
      image: Calendari,
      url: "#",
    },
  ];
  return (
    <Layout title="Ajuntatech">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-[95%] max-w-[1100px] p-5 mx-auto">
        {data?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
}
