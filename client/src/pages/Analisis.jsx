  import "../css/Pages.css";
  import Chart from "../components/Chart";
  import Modalgrafico from "../components/Modalgrafico";
  import Modaleft from "../components/Modaleft";
  import Botonpdf from "../components/Botonpdf";

  function Analisis() {
    return (
      <main>
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
          <Modalgrafico/>
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
          <Modalgrafico/>
        </div>
      </main>
    );
  }
  
  export default Analisis;