import "./App.css";

const logoImage = "logo.png";
const petpalImage = "petpal.png";
const huellitas1 = "huellitas1.png";

function App() {
  return (
    <>
      <header className="bg-marron-900 py-6">
        <div className="flex justify-end items-center gap-4 px-4">
          <h1 className="font-titan text-marron-500">Ayuda</h1>
          <h1 className="font-titan text-marron-500">Contacto</h1>
        </div>
      </header>
      <section className="bg-marron-500 box-border relative">
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
          <div className="absolute bottom-0 right-0 w-1/4 h-3/4 invert">
            <img src={huellitas1} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
