import { IResponseSessionInformation } from './services/auth.service';
import { BannersResponseInterface, MembersResponseInterface } from './services/common.service';

export interface AppStore {
  userInfo: IResponseSessionInformation[];
}

export interface AppStoreBanners {
  bannersInfo: BannersResponseInterface[];
}

export interface AppStoreFunnyGuy {
  funnyGuyInfo: MembersResponseInterface[];
}
