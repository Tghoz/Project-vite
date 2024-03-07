  import "../css/Pages.css";
  import Chart from "../components/Chart";
  import Modalright from "../components/Modalright";
  import Modaleft from "../components/Modaleft";
  import Modalpropuesta from "../components/Modalpropuesta";
  import Botonpdf from "../components/Botonpdf";

  function Analisis() {
    return (
      
      <main>
        <div>
       <Modalpropuesta/>
       </div>
        <ul className="box-info">
          <li>
            <i>
            </i>
            <span className="text"> 
              <p>Facebook</p>
              <img src="/facebook.png" alt="Icono" width={50} height={60} />
            </span>
            <Chart />
          </li>
          <li>
            <i> 
            </i>
            <span className="text">
              <p>Instagram</p>
              <img src="/instagram.png" alt="Icono" width={50} height={60} />
            </span>
            <Chart />
          </li>
        </ul>
        <div className="modal-container">
          <button className="open-modal-btn"></button>
          <Botonpdf/>
          <Modaleft/>
          <Botonpdf/>
          <Modalright/>
        </div>
        <ul className="box-info">
          <li>
            <i>
            </i>
            <span className="text">
              <p>X</p>
              <img src="/twitterx.png" alt="Icono" width={50} height={60} />
            </span>
            <Chart />
          </li>
          <li>
            <i> 
            </i>
            <span className="text">
              <p>Tik Tok</p>
              <img src="/tiktok.png" alt="Icono" width={50} height={60} />
            </span>
            <Chart />
          </li>
        </ul>
        <div className="modal-container">
          <button className="open-modal-btn"></button>
          <Botonpdf/>
          <Modaleft/>
          <Botonpdf/>
          <Modalright/>
        </div>
      </main>
    );
  }
  
  export default Analisis;