export interface IExtraDataUser {
    firstName: string,
    lastName: string,
    isAdmin: boolean | undefined,
    
}


export interface IExtraDataRequestBody {
    userExtraData: IExtraDataUser,
    uid: string;
}