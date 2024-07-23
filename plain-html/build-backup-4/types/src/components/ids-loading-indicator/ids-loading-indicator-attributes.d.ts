declare const getPercentageTextHtml: ({ progress, type }: {
    progress: any;
    type?: string | undefined;
}) => string;
declare const getInnerIndicatorHtml: ({ progress, type, percentageVisible, inline }: {
    progress: any;
    type: string;
    percentageVisible: boolean | string;
    inline: boolean | string;
}) => string;
export { getPercentageTextHtml, getInnerIndicatorHtml };
