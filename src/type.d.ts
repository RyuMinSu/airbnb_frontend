



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
}

export interface IRoomOwner {	
	avatar: string;
	name: string;
	username: string;
}

export interface IAmenity {
	name: string;
	description: string;
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
	amenities: IAmenity[]
	category: {
		name: string;
		kind: string;
	}
	is_liked: boolean;
}

export interface IReview {
	user: IRoomOwner;
	payload: string;
	rating: number;
}