export const hasDaylight = (time: string): boolean => {
    const month = new Date(time).getMonth();
    const hour = new Date(time).getHours();

    switch (month) {
        case 0: return hour >= 8 && hour <= 16;
        case 1: return hour >= 6 && hour <= 17;
        case 2: return hour >= 5 && hour <= 19;
        case 3: return hour >= 4 && hour <= 21;
        case 4: return hour >= 2 && hour <= 23;
        case 5: return true;
        case 6: return true;
        case 7: return hour >= 3 && hour <= 22;
        case 8: return hour >= 5 && hour <= 20;
        case 9: return hour >= 6 && hour <= 19;
        case 10: return hour >= 7 && hour <= 16;
        case 11: return hour >= 8 && hour <= 15;
        default: return true;
    }
}