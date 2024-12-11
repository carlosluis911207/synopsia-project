// Images
import i1 from "../../public/images/i1.png";
import i2 from "../../public/images/i2.png";
import i3 from "../../public/images/i3.png";
import i4 from "../../public/images/i4.png";
import i5 from "../../public/images/i5.png";
import i6 from "../../public/images/i6.png";
import i7 from "../../public/images/i7.png";
import i8 from "../../public/images/i8.png";
import i9 from "../../public/images/i9.png";
import i10 from "../../public/images/i10.png";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Intranet() {
  const data = [
    {
      id: 1,
      title: "Documents d'interés",
      description: "Accedeix a documents importants.",
      image: i1,
      url: "/",
    },
    {
      id: 2,
      title: "Espais de treball",
      description: "Reserva espais per treballar en equip.",
      image: i2,
      url: "/",
    },
    {
      id: 3,
      title: "Recursos Humans",
      description: "Informació sobre política i tràmits d'RH.",
      image: i3,
      url: "/",
    },
    {
      id: 4,
      title: "Informàtica",
      description: "Suport i recursos tecnològics.",
      image: i4,
      url: "/",
    },
    {
      id: 5,
      title: "Adm. Electrònica",
      description: "Accedeix a serveis administratius.",
      image: i5,
      url: "/",
    },
    {
      id: 6,
      title: "Riscos Laborals",
      description: "Consells i informació sobre seguretat laboral.",
      image: i6,
      url: "/",
    },
    {
      id: 7,
      title: "Logos, plantilles i llibres d'estil",
      description: "Descàrrega de recursos corporatius.",
      image: i7,
      url: "/",
    },
    {
      id: 8,
      title: "Mobiliari outlet",
      description: "Compra mobles a preus especials.",
      image: i8,
      url: "/",
    },
    {
      id: 9,
      title: "Portal d'avisos",
      description: "Publica i consulta avisos interns.",
      image: i9,
      url: "/",
    },
    {
      id: 10,
      title: "Campus virtual",
      description: "Accedeix a recursos d'aprenentatge.",
      image: i10,
      url: "/",
    },
  ];
  return (
    <Layout title="Ajuntatech - Intranet">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 w-[95%] max-w-[1100px] p-5 mx-auto">
        {data?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
}
