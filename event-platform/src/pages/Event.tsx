import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultEvent from "../components/DefaultEvent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

type Slug = string;

const Event = () => {
  const { slug } = useParams<Slug>();
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("userId");

  if (isLogged) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex flex-1">
          {slug ? <Video lessonSlug={slug} /> : <DefaultEvent />}

          <Sidebar />
        </main>
      </div>
    );
  } else {
    useEffect(() => {
      alert(
        "Cadastre-se ou insira seu e-mail cadastrado para acessar a plataforma."
      );
      navigate("/");
    }, []);
  }
};

export default Event;
