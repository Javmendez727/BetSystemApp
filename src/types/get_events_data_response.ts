export interface EventType  {
    id: string;
    name: string;
    markets: MarketType[];
}

export interface MarketType  {
    id: string;
    name: string;
    selections: SelectionType[];
}

export interface SelectionType  {
    id: string;
    name: string;
    price: number;
    marketType: number;
}

export interface ResponseEvents {
    events: EventType[]
} 