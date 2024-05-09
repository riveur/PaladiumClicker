import BuildingList from "@/components/BuildingList/BuildingList";
import ClickList from "@/components/ClickList/ClickList";
import Graph from "@/components/Graph/Graph";
import ImportProfil from "@/components/ImportProfil/ImportProfil";
import MetierList from "@/components/Metier/MetierList";
import News from "@/components/News/News";
import NoPseudoPage from "@/components/NoPseudoPage/NoPseudoPage";
import RPS from "@/components/RPS/RPS";
import Stats from "@/components/Stats/Stats";
import Tuto from "@/components/Tuto/Tuto";
import UpgradeList from "@/components/UpgradeList/UpgradeList";
import Layout from "@/components/shared/Layout";
import { usePlayerInfoStore } from "@/stores/use-player-info-store";
import { useState } from "react";

const PaladiumClickerPage = () => {
  const { data: playerInfo } = usePlayerInfoStore();

  const [isModalNewsOpen, setIsModalNewsOpen] = useState(playerInfo === null);
  const [isModalTutoOpen, setIsModalTutoOpen] = useState(false);
  const [isModalGraphOpen, setIsModalGraphOpen] = useState(false);


  const [rps, setRPS] = useState(1);

  if (!playerInfo) {
    return (<NoPseudoPage />);
  }

  return (
    <Layout>
      <div id="container" className="container">
        <News open={isModalNewsOpen} onOpenChange={setIsModalNewsOpen} />
        <Graph open={isModalGraphOpen} onOpenChange={setIsModalGraphOpen} />
        <Tuto open={isModalTutoOpen} onOpenChange={setIsModalTutoOpen} />
        <div className="App">
          <header className="App-header">
            <div style={{ flexDirection: "row", display: "flex" }}>
              <h3 style={{ marginBottom: "0px", zIndex: 1, position: "relative" }}>
                Bienvenue sur l'optimiseur du&nbsp;
              </h3>
              <h3 style={{ marginBottom: "0px", zIndex: 1, position: "relative" }}
                className={"BroMine"}>
                PalaClicker
              </h3>
            </div>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div>
                Made by&nbsp;
              </div>
              <div className={"BroMine"}> BroMine__</div>
            </div>
            <div style={{ flexDirection: "row", display: "flex", paddingTop: "20px", columnGap: "10px" }}>
              <button onClick={() => setIsModalTutoOpen(true)} style={{ cursor: "pointer" }}>
                Comment utiliser l'outil
              </button>
              <button onClick={() => setIsModalNewsOpen(true)} style={{ cursor: "pointer" }}>
                Voir les nouvelles fonctionnalitées
              </button>
              <button onClick={() => setIsModalGraphOpen(true)} style={{ cursor: "pointer" }}>
                Voir l'évolution du top 10
              </button>
            </div>
          </header>
          <br />
          <ImportProfil showResetButton={true} />
          <br />
          <RPS rps={rps} />
          <h1>Statistiques</h1>
          <Stats rps={rps} />

          <h1>Métier</h1>
          <MetierList editable={true} />

          <h1>Bâtiments</h1>
          <BuildingList setRPS={setRPS} />

          <h1>Clic</h1>
          <ClickList />

          <h1>Global</h1>
          <UpgradeList upgradeName={"global_upgrade"} />

          <h1>Terrain</h1>
          <UpgradeList upgradeName={"terrain_upgrade"} />

          <h1>Amélioration des bâtiments</h1>
          <UpgradeList upgradeName={"building_upgrade"} />

          <h1>Many</h1>
          <UpgradeList upgradeName={"many_upgrade"} />

          <h1>Postérieur</h1>
          <UpgradeList upgradeName={"posterior_upgrade"} />

          <h1>Catégorie</h1>
          <UpgradeList upgradeName={"category_upgrade"} />
        </div>
      </div>
    </Layout>
  );
}

export default PaladiumClickerPage;