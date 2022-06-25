import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubscriberNameContextType } from "../contexts/subscriberContext/useSubscriberName";
import { SubscriberContext } from "../contexts/subscriberContext/useSubscriberNameContext";
import { useGetSubscriberByEmailLazyQuery } from "../graphql/generated";
import { SubscribeChildrenProps } from "../utils/constants";

const LoginForm = ({
  isAlreadySubscribed,
  setIsAlreadySubscribed,
}: SubscribeChildrenProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { setSubscriberName } = useContext(
    SubscriberContext
  ) as SubscriberNameContextType;

  const [getSubscriberByEmail, { loading }] =
    useGetSubscriberByEmailLazyQuery();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    await getSubscriberByEmail({
      variables: {
        email,
      },
    }).then((res) => {
      if (res?.data?.subscriber) {
        window.localStorage.setItem("userId", res.data?.subscriber?.id);
        setSubscriberName(res.data.subscriber.name);
        return navigate("/event");
      }

      return alert("E-mail não cadastrado.");
    });
  };

  return (
    <div className="p-8 bg-gray-700 border border-gray-500 rounded max-w-sm">
      <strong className="text-2xl mb-6 block">
        Já é inscrito? <br />
        Digite seu e-mail e acesse nossa plataforma
      </strong>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full">
        <input
          className="bg-gray-900 rounded px-5 h-14"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          Acessar plataforma
        </button>
      </form>
      <button
        type="button"
        className="text-gray-300 pt-8 hover:text-gray-200"
        onClick={() => setIsAlreadySubscribed(!isAlreadySubscribed)}
      >
        Ainda não se inscreveu?
      </button>
    </div>
  );
};

export default LoginForm;
