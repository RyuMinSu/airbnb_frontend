



export interface IPhotoPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IRoomList {
  id: number;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhotoPhoto[];
	name: string;
}

export interface IRoomOwner {	
	avatar: string;
	name: string;
	username: string;
}

export interface IAmenity {
	pk: number;
	name: string;
	description: string;
}

export interface ICategory {
	pk: number;
	name: string;
	kind: string;
}

export interface IRoomDetail extends IRoomList {
	created_at: string;
	updated_at: string;
	name: string;
	rooms: number;
	toilets: number;
	description: string;
	address: string;
	pet_friendly: boolean;
	kind: string;
	owner: IRoomOwner;
	amenities: IAmenity[];
	category: ICategory;
	is_liked: boolean;
}

export interface IReview {
	user: IRoomOwner;
	payload: string;
	rating: number;
}

export interface IUser {
	"last_login": string;
	"username": string;
	"email": string;
	"date_joined": string;
	"avatar": string;
	"name": string;
	"is_host": boolean;
	"gender": string;
	"language": string;
	"currency": string;
}