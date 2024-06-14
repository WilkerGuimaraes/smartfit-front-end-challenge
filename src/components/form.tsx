import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { LocationsContext } from "../contexts/LocationsContext";

const formSchema = z.object({
  period: z.string(),
  showClosed: z.boolean(),
});

type FormSchemaData = z.infer<typeof formSchema>;

export function Form() {
  const { filteredLocations, onSubmit, onReset } = useContext(LocationsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      period: "",
      showClosed: true,
    },
  });

  const handleFilterLocations = (data: FormSchemaData) => {
    onSubmit(data);
  };

  return (
    <div className="rounded-lg border-[6px] border-zinc-200 p-6 mx-8">
      <form onSubmit={handleSubmit(handleFilterLocations)}>
        <div className="flex items-center gap-4">
          <img src="/icon-hour.png" alt="iconHour" className="size-12" />
          <h2 className="text-2xl text-light-grey">Horário</h2>
        </div>

        <h1 className="text-4xl font-gotham-light text-light-grey pt-8 pb-5 border-b-2">
          Qual período quer treinar?
        </h1>

        <div className="flex py-4 border-b-2 font-gotham-book text-lg text-light-grey sm:text-2xl">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              {...register("period")}
              value="morning"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="morning">Manhã</label>
          </div>
          <span className="ml-auto">06:00 às 12:00</span>
        </div>

        <div className="flex py-4 border-b-2 font-gotham-book text-lg text-light-grey sm:text-2xl">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              {...register("period")}
              value="afternoon"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="afternoon">Tarde</label>
          </div>
          <span className="ml-auto">12:01 às 18:00</span>
        </div>

        <div className="flex py-4 border-b-2 font-gotham-book text-lg text-light-grey sm:text-2xl">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              {...register("period")}
              value="night"
              className="size-6 hover:cursor-pointer"
            />
            <label htmlFor="night">Noite</label>
          </div>
          <span className="ml-auto">18:01 às 23:00</span>
        </div>

        <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("showClosed")}
              className="size-6 hover:cursor-pointer"
            />
            <span className="ml-3 font-gotham-book text-lg text-dark-grey sm:text-2xl">
              Exibir unidades fechadas
            </span>
          </div>
          <p className="ml-2 font-gotham-book text-lg text-dark-grey sm:text-2xl">
            Resultados encontrados:{" "}
            <span className="font-gotham-black">
              {filteredLocations.length}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center">
          <button
            type="submit"
            className="px-[20%] py-5 bg-yellow font-gotham-black text-xl rounded-lg lg:px-28"
          >
            ENCONTRAR UNIDADE
          </button>
          {errors.period && (
            <span className="text-red">{errors.period.message}</span>
          )}
          <button
            type="button"
            onClick={() => {
              reset();
              onReset();
            }}
            className="px-20 py-5 border-[3px] font-gotham-black text-xl rounded-lg lg:px-44"
          >
            LIMPAR
          </button>
        </div>
      </form>
    </div>
  );
}
