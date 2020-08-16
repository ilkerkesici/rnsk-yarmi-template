import { EUserRole, EContactType } from "../enums";

/**
 * Interface for user
 */
export interface IUser{
    id: number,
    full_name: string,
    access_token: string,
    profile_image: string,
    email?: string,
    role: EUserRole
}

/**
 * Interface for Toast component
 */
export interface IToast {
    message: string,
    type: string, // Success, Error, Message,
    onPress?: () => void,
    onClose?: () => void,
    onCancel?: () => void,
    showCancel?: boolean,
    title?: string
}

/**
 * The inerface for jome data
 */
export interface IHomeData {
    Id: number,
    Date: Date,
    MeetType: string,
    MeetWith: {
        Id: number,
        Fullname: string,
        ProifleImage: string
    },
    Title: string,
    Content: string,
    Invite?: string,
    PublisherId: number
}

/**
 * Contact row props
 */
export interface IContactDataProps {
    Id: number
    FullName: string,
    Email?: string,
    About: string,
    ProfileImage: string,
    Type: EContactType,
    CreatorId?: number
}

