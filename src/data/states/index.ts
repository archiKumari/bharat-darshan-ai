import type { StateData } from "../types";

import { andaman } from "./andaman";
import { andhra } from "./andhra";
import { arunachal } from "./arunachal";
import { assam } from "./assam";
import { bihar } from "./bihar";
import { chandigarh } from "./chandigarh";
import { chhattisgarh } from "./chhattisgarh";
import { delhi } from "./delhi";
import { goa } from "./goa";
import { gujarat } from "./gujarat";
import { haryana } from "./haryana";
import { himachal } from "./himachal";
import { jammukashmir } from "./jammukashmir";
import { jharkhand } from "./jharkhand";
import { karnataka } from "./karnataka";
import { kerala } from "./kerala";
import { ladakh } from "./ladakh";
import { lakshadweep } from "./lakshadweep";
import { madhyaPradesh } from "./madhyaPradesh";
import { maharashtra } from "./maharashtra";
import { manipur } from "./manipur";
import { meghalaya } from "./meghalaya";
import { mizoram } from "./mizoram";
import { nagaland } from "./nagaland";
import { odisha } from "./odisha";
import { puducherry } from "./puducherry";
import { punjab } from "./punjab";
import { rajasthan } from "./rajasthan";
import { sikkim } from "./sikkim";
import { tamilnadu } from "./tamilnadu";
import { telangana } from "./telangana";
import { tripura } from "./tripura";
import { uttarakhand } from "./uttarakhand";
import { uttarpradesh } from "./uttarpradesh";
import { westbengal } from "./westbengal";

export const statesMap: Record<string, StateData> = {
  "IN-AN": andaman,
  "IN-AP": andhra,
  "IN-AR": arunachal,
  "IN-AS": assam,
  "IN-BR": bihar,
  "IN-CH": chandigarh,
  "IN-CT": chhattisgarh,
  "IN-DL": delhi,
  "IN-GA": goa,
  "IN-GJ": gujarat,
  "IN-HR": haryana,
  "IN-HP": himachal,
  "IN-JK": jammukashmir,
  "IN-JH": jharkhand,
  "IN-KA": karnataka,
  "IN-KL": kerala,
  "IN-LD": lakshadweep,
  "IN-LA": ladakh,
  "IN-MH": maharashtra,
  "IN-ML": meghalaya,
  "IN-MN": manipur,
  "IN-MP": madhyaPradesh,
  "IN-MZ": mizoram,
  "IN-NL": nagaland,
  "IN-OR": odisha,
  "IN-PB": punjab,
  "IN-PY": puducherry,
  "IN-RJ": rajasthan,
  "IN-SK": sikkim,
  "IN-TG": telangana,
  "IN-TN": tamilnadu,
  "IN-TR": tripura,
  "IN-UP": uttarpradesh,
  "IN-UT": uttarakhand,
  "IN-WB": westbengal,
};
