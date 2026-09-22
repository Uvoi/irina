export type Item = 
{
    id: number;
    image: string;
    answer: boolean;
}

export type ItemsGroup = 
{
    items: Item[];
}

export type TestItem = 
{
    id: number;
    group: ItemsGroup;
    question: string;
    trueAnswer: string;
    falseAnswer: string;
}