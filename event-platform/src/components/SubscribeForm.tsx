import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubscriberNameContextType } from "../contexts/subscriberContext/useSubscriberName";
import { SubscriberContext } from "../contexts/subscriberContext/useSubscriberNameContext";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { SubscribeChildrenProps } from "../utils/constants";

const SubscribeForm = ({
  isAlreadySubscribed,
  setIsAlreadySubscribed,
}: SubscribeChildrenProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading, error }] = useCreateSubscriberMutation();

  const { setSubscriberName } = useContext(
    SubscriberContext
  ) as SubscriberNameContextType;

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    })
      .then((res) => {
        if (res.data?.createSubscriber?.id) {
          localStorage.setItem("userId", res.data?.createSubscriber?.id);
          setSubscriberName(name);

          return navigate("/event");
        }

        return alert("Ops! Algo deu errado. Tente novamente.");
      })
      .catch(() => {
        alert("E-mail já cadastrado no sistema.");
      });
  };

  return (
    <div className="p-8 bg-gray-700 border border-gray-500 rounded">
      <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
        <input
          className="bg-gray-900 rounded px-5 h-14"
          type="text"
          placeholder="Seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          Garantir minha vaga
        </button>
      </form>
      <button
        type="button"
        className="text-gray-300 pt-8 hover:text-gray-200"
        onClick={() => setIsAlreadySubscribed(!isAlreadySubscribed)}
      >
        Já é inscrito?
      </button>
    </div>
  );
};

export default SubscribeForm;
