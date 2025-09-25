export const Hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
export const backgroundFromColor = (colorSelected: string) => {
    switch (colorSelected) {
        case "red":
            return "border-red-200 bg-red-100 text-red-700 hover:bg-red-200 dark:border-red-800 dark:bg-red-950 dark:text-red-300 dark:hover:bg-red-950";
        case "green":
            return "border-green-200 bg-green-100 text-green-700 hover:bg-green-200 dark:border-green-800 dark:bg-green-950 dark:text-green-300 dark:hover:bg-green-950";
        case "yellow":
            return "border-yellow-200 bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 dark:hover:bg-yellow-950";
        case "blue":
            return "border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-950";
        case "purple":
            return  "border-purple-200 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300 dark:hover:bg-purple-950";
        case "orange":
            return "border-orange-200 bg-orange-100 text-orange-700 hover:bg-orange-200 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300 dark:hover:bg-orange-950";
        default:
            return "border-blue-200 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-950"
    }
}
