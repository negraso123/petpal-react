import "./App.css";

const logoImage = "logo.png";

function App() {
  return (
    <>
      <video
        className="background-video absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="videos/perro1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      <audio autoPlay loop>
        <source src="musica/musica-minecraft.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <header className="flex justify-between items-center pt-3 pr-5 bg-gradient-to-b from-transparent to-gray-950 z-10">
        <div className="logo w-28 h-auto brightness-100">
          <img src={logoImage} alt="Logo de PetPal" />
        </div>
        <div className="links flex gap-4">
          <a
            href="mailto:marianomartincervera@itisjt.edu.ar"
            className="contact-link font-serif text-white font-black hover:underline"
          >
            Contacto
          </a>
          <a
            href="https://smallpdf.com/es/file#s=67cb08d4-6598-4c0a-af42-1024f12fe090"
            className="about-us-link font-serif text-white font-black hover:underline"
            target="_blank"
          >
            Sobre nosotros
          </a>
        </div>
      </header>
      <div className="container p-20 w-full flex flex-col items-center justify-end font-sans bg-gradient-to-b from-transparent to-gray-950 absolute bottom-0 left-0 z-10">
        <a href="../register-login/register.html">
          <button className="register-button p-4 bg-sky-500 max-w-4xl border-none rounded-3xl text-4xl cursor-pointer transition-colors duration-300 ease-in-out text-black mb-5 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-900">
            REGISTRATE YA
          </button>
        </a>
        <a
          href="../register-login/login.html"
          className="login-link bg-sky-500 font-black text-base mb-4 hover:text-sky-200 hover:underline"
        >
          ¿Ya tienes una cuenta? Iniciar Sesión
        </a>
      </div>
    </>
  );
}

export default App;
