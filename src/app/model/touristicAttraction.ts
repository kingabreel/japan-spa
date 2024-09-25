export interface TouristicAttraction {
    id: string;
    name: string;
    imgUrl: string;
}

export interface AddTouristicAttraction {
    name: string;
    description: string;
    imgUrl: string;
    cityName: string;
}