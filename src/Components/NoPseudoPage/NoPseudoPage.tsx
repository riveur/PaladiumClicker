import ImportProfil from "../ImportProfil/ImportProfil";

import "./NoPseudoPage.css"

const NoPseudoPage = () => {

  return (
    <div className={"NoPseudoPage"}>
      <p style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>
        Afficher le profil&nbsp;
        <span className={"BroMine"}>Paladium</span>
        &nbsp;de&nbsp;
      </p>
      <ImportProfil resetButton={false} logError={true} />
    </div>
  );
}

export default NoPseudoPage;