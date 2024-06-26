import { usePlayerInfoStore } from "@/stores/use-player-info-store";
import type {
  Building,
  BuildingUpgrade,
  CPS,
  CategoryUpgrade,
  GlobalUpgrade,
  ManyUpgrade,
  Metier,
  PaladiumClickerData,
  PaladiumPlayerInfo,
  PaladiumRanking,
  PlayerInfo,
  PosteriorUpgrade,
  TerrainUpgrade
} from "@/types";
import axios from "axios";

const PALADIUM_API_URL = "https://api.paladium.games/";

const fetchLocal = async <T>(file: string) => {
  const result = await axios<T>(window.location.origin + file, {
    headers: {
      Accept: "application/json",
    }
  });

  if (result.status !== 200) {
    throw result;
  }

  return result.data;
}

export default fetchLocal;

const getPaladiumProfileByPseudo = async (pseudo: string) => {
  const response = await axios.get<PaladiumPlayerInfo>(`${PALADIUM_API_URL}/v1/paladium/player/profile/${pseudo}`);

  if (response.status !== 200) {
    throw response;
  }

  return response.data;
}

export const getPaladiumLeaderboardPositionByUUID = async (uuid: string) => {
  const response = await axios.get<PaladiumRanking>(`${PALADIUM_API_URL}/v1/paladium/ranking/position/clicker/${uuid}`);

  if (response.status !== 200) {
    throw response;
  }

  return response.data.ranked ? response.data.position.toString() : "Unranked";
}

const getPaladiumClickerDataByUUID = async (uuid: string) => {
  const response = await axios.get<PaladiumClickerData>(`${PALADIUM_API_URL}/v1/paladium/player/profile/${uuid}/clicker`);

  if (response.status !== 200) {
    throw response;
  }

  return response.data;
}

export const getPlayerInfo = async (pseudo: string) => {
  const localData = usePlayerInfoStore.getState().data;

  if (localData !== null && localData.username === pseudo && localData.uuid !== "") {
    return localData;
  }

  if (localData !== null && localData.username !== pseudo) {
    return await fetchAllDataButKeepOwn(localData);
  }

  const initialPlayerInfo = localData !== null && localData.username !== pseudo ?
    await fetchAllDataButKeepOwn(localData) :
    await getInitialPlayerInfo();

  const paladiumProfil = await getPaladiumProfileByPseudo(pseudo);
  const { buildings, upgrades } = await getPaladiumClickerDataByUUID(paladiumProfil.uuid);

  const translateBuildingName = await fetchLocal<Record<string, number>>("/translate_building.json");
  const translateBuildingUpgradeName = await fetchLocal<Record<string, [keyof PlayerInfo, string]>>("/translate_upgrade.json");

  buildings.forEach((building) => {
    const buildingIndex = translateBuildingName[building["name"]];
    if (buildingIndex === undefined)
      throw `Unknown building name : '${building["name"]}', please contact the developer to fix it`;
    initialPlayerInfo["building"][buildingIndex].own = building["quantity"];
    initialPlayerInfo["production"] += building["production"];
  })
  upgrades.forEach((upgrade) => {
    const pathToFollow = translateBuildingUpgradeName[upgrade];
    if (pathToFollow === undefined)
      throw `Unknown upgrade name : '${upgrade}', please contact the developer to fix it`;

    const [translatedUpgrade, translatedPosition] = pathToFollow;

    // (initialPlayerInfo[translatedUpgrade] as []).at(translatedPosition).own = true;
  });

  initialPlayerInfo.faction = paladiumProfil.faction === "" ? "Wilderness" : paladiumProfil.faction;
  initialPlayerInfo.firstJoin = paladiumProfil.firstJoin;
  initialPlayerInfo.money = paladiumProfil.money;
  initialPlayerInfo.timePlayed = paladiumProfil.timePlayed;
  initialPlayerInfo.username = paladiumProfil.username;
  initialPlayerInfo.uuid = paladiumProfil.uuid;
  initialPlayerInfo.rank = paladiumProfil.rank;

  const existingJobs = ["miner", "farmer", "hunter", "alchemist"] as const;

  existingJobs.forEach((job, index) => {
    initialPlayerInfo.metier[index].level = paladiumProfil.jobs[job].level;
    initialPlayerInfo.metier[index].xp = paladiumProfil.jobs[job].xp;
  });

  return initialPlayerInfo;
}

const getInitialPlayerInfo = async (): Promise<PlayerInfo> => {

  const metiers = await fetchLocal<Metier[]>("/metier.json");
  const buildings = await fetchLocal<Building[]>("/building.json");
  const buildingUpgrade = await fetchLocal<BuildingUpgrade[]>("/building_upgrade.json");
  const categoryUpgrade = await fetchLocal<CategoryUpgrade[]>("/category_upgrade.json");
  const CPS = await fetchLocal<CPS[]>("/CPS.json");
  const globalUpgrade = await fetchLocal<GlobalUpgrade[]>("/global_upgrade.json");
  const manyUpgrade = await fetchLocal<ManyUpgrade[]>("/many_upgrade.json");
  const posteriorUpgrade = await fetchLocal<PosteriorUpgrade[]>("/posterior_upgrade.json");
  const terrainUpgrade = await fetchLocal<TerrainUpgrade[]>("/terrain_upgrade.json");

  const playerInfo: PlayerInfo = {
    metier: metiers,
    building: buildings,
    building_upgrade: buildingUpgrade,
    category_upgrade: categoryUpgrade,
    CPS: CPS,
    global_upgrade: globalUpgrade,
    many_upgrade: manyUpgrade,
    posterior_upgrade: posteriorUpgrade,
    terrain_upgrade: terrainUpgrade,
    production: 0.5,
    faction: "",
    firstJoin: 0,
    money: 0,
    timePlayed: 0,
    username: "",
    uuid: "",
    rank: "Rank inconnu"
  };

  return playerInfo;
}

const fetchAllDataButKeepOwn = async (playerInfo: PlayerInfo) => {
  const initialPlayerInfo = await getInitialPlayerInfo();

  console.log("Keeping own")

  initialPlayerInfo.metier.forEach((metier, index) => {
    metier.level = playerInfo.metier[index].level;
  });

  // Building
  initialPlayerInfo["building"].forEach((building, index) => {
    if (playerInfo["building"][index] !== undefined)
      building.own = playerInfo.building[index].own;
  })

  // Global
  initialPlayerInfo["global_upgrade"].forEach((global, index) => {
    global.own = playerInfo.global_upgrade[index].own;
  })

  // Terrain
  initialPlayerInfo["terrain_upgrade"].forEach((terrain, index) => {
    terrain.own = playerInfo.terrain_upgrade[index].own;
  })

  // building_upgrade
  initialPlayerInfo.building_upgrade.forEach((building, index) => {
    building.own = playerInfo.building_upgrade[index].own;
  })


  // many_upgrade
  initialPlayerInfo.many_upgrade.forEach((many, index) => {
    many.own = playerInfo.many_upgrade[index].own;
  })

  // posterior_upgrade
  initialPlayerInfo.posterior_upgrade.forEach((posterior, index) => {
    posterior.own = playerInfo.posterior_upgrade[index].own;
  })

  // category_upgrade
  initialPlayerInfo.category_upgrade.forEach((category, index) => {
    category.own = playerInfo.category_upgrade[index].own;
  })

  // CPS
  initialPlayerInfo.CPS.forEach((cps, index) => {
    cps.own = playerInfo.CPS[index].own;
  })
  return initialPlayerInfo;
}