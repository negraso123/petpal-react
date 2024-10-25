const logoImage = "logo.png";
const petpalImage = "petpal.png";
const huellitas1 = "huellitas1.png";
const huellitas2 = "huellitas2.png";
const estructura = "estructura.png";

export default function Home() {
  return (
    <section className="bg-marron-500 box-border relative">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="size-1/12 py-2 mt-10">
            <img src={logoImage} />
          </div>
          <div className="size-3/12 py-2">
            <img src={petpalImage} />
          </div>
          <div className="font-sans text-lg text-marron-900">
            <p>
              <span>
                Tu mascota merece lo mejor,
                <br />
              </span>
              <span>incluso cuando no estás</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="size-2/12 font-sans text-lg text-marron-900">
            <p>
              PetPal Interactive es un comedero automático para mascotas que
              busca satisfacer las necesidades tanto físicas cómo psicológicas
              de nuestras mascotas
            </p>
          </div>
          <div className="size-3/12 py-2">
            <img src={estructura} />
          </div>
        </div>
      </div>
      <div className="bg-arena box-border">
        <div className="flex flex-col justify-center items-center">
          <button className="w-1/4 bg-marron-900 my-5 p-3 rounded-full text-arena font-titan text-xl shadow-sm shadow-black">
            Registro
          </button>
          <button className="w-1/4 bg-marron-900 p-3 mb-5 rounded-full text-arena font-titan text-xl shadow-sm shadow-black">
            Iniciar Sesión
          </button>
        </div>
      </div>
      <img
        src={huellitas1}
        className="absolute top-0 right-0 object-cover border-solid border-black w-1/4 mix-blend-screen"
      />
      <img
        src={huellitas2}
        className="absolute bottom-0 left-0 object-cover border-solid border-black w-1/4 mix-blend-screen"
      />
    </section>
  );
}
