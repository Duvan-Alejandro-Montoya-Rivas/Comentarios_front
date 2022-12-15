import './App.css';
import Testimonio from './componentes/Testimonios';
function App() {
  return (
    <div className="App">
      <div>
        <h1>Comentarios ramdons que escribo</h1>
        <Testimonio 
        nombre='Emma bostian'
        pais='Suecia'
        imagen='1'
        cargo='Ingeniera en software'
        empresa='Spotify'
        testimonio='lisudddddddddddddddddddddddfluibalsiubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddsldiuadbashfb'
        />
        <Testimonio 
        nombre='Emanuel Gutieerez'
        pais='Holanda'
        imagen='2'
        cargo='Ingeniero de sistemas'
        empresa='Tesla'
        testimonio='eriuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuusvbñubc clzisbc kzcb z'
        />
        <Testimonio 
        nombre='Jose Kottlin'
        pais='Andres ramierez'
        imagen='3'
        cargo='Ingeniero en software'
        empresa='IBM'
        testimonio='lirfgbasñoubc asñcuga duiahs ld8agñcihad89 gasd baskjñ dgashdvba sdgliu asdjasjdagduas di asduylasbdi'
        />
      </div>
    </div>
  );
}

export default App;
