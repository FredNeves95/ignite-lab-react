import { useContext } from "react";
import { IsSidebarHiddenContextType } from "../contexts/sidebarMenu/useSidebarMenu";
import { SidebarContext } from "../contexts/sidebarMenu/useSidebarMenuContext";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

const Sidebar = () => {
  const { data } = useGetLessonsQuery();
  const { getIsSidebarHidden } = useContext(
    SidebarContext
  ) as IsSidebarHiddenContextType;

  const isHidden = getIsSidebarHidden();

  return (
    <aside
      className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 ${
        isHidden ? "hidden" : "block absolute right-0 z-50"
      } lg:block`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
