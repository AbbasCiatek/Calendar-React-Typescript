export const Hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
export const backgroundFromColor = (colorSelected: string) => {
    switch (colorSelected) {
        case "red":
            return "bg-red-500";
        case "green":
            return "bg-green-500";
        case "yellow":
            return "bg-yellow-500";
        case "blue":
            return "bg-blue-500";
        case "purple":
            return "bg-purple-500";
        case "orange":
            return "bg-orange-500";
        case "gray":
            return "bg-gray-500";
        default:
            return "bg-gray-800"
    }
}