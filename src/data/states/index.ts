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
  "INAN": andaman,
  "INAP": andhra,
  "INAR": arunachal,
  "INAS": assam,
  "INBR": bihar,
  "INCH": chandigarh,
  "INCT": chhattisgarh,
  "INDL": delhi,
  "INGA": goa,
  "INGJ": gujarat,
  "INHR": haryana,
  "INHP": himachal,
  "INJK": jammukashmir,
  "INJH": jharkhand,
  "INKA": karnataka,
  "INKL": kerala,
  "INLD": lakshadweep,
  "INLA": ladakh,
  "INMH": maharashtra,
  "INML": meghalaya,
  "INMN": manipur,
  "INMP": madhyaPradesh,
  "INMZ": mizoram,
  "INNL": nagaland,
  "INOR": odisha,
  "INPB": punjab,
  "INPY": puducherry,
  "INRJ": rajasthan,
  "INSK": sikkim,
  "INTG": telangana,
  "INTN": tamilnadu,
  "INTR": tripura,
  "INUP": uttarpradesh,
  "INUT": uttarakhand,
  "INWB": westbengal,
};
