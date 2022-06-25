import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = (props: LessonProps) => {
  const isLessonAvailable = isPast(props.availableAt);

  const { slug } = useParams<{ slug: string }>();

  const isActiveLesson = slug === props.slug;

  const availableDateFormatted = format(
    props.availableAt,
    "EEEE'  •  'd'  de  'MMMM'  •  ' k'h'MM",
    {
      locale: ptBR,
    }
  );
  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${props.slug}` : "/event"}
      className={`group ${!isLessonAvailable && "cursor-not-allowed"}`}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : null
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm  font-medium flex items-center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[2px] text-white border  font-bold ${
              isActiveLesson ? "border-white" : "border-green-300"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`${
            isActiveLesson ? "text-white" : "text-gray-200"
          } mt-5 block`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
