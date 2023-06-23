export interface Root {
  equipment: Equipment[];
}

export interface Equipment {
  idEquipment: string;
  idTeam: string;
  date: string;
  strSeason: string;
  strEquipment: string;
  strType: string;
  strUsername: string;
}
