declare const labels: {
    value: number;
    text: string;
    color: string;
}[];
declare const getClosestLabelSettings: (targetValue: number) => {
    value: number;
    text: string;
    color: string;
} | undefined;
