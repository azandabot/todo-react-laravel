import {
    isToday,
    isYesterday,
    isThisWeek,
    isThisMonth,
    format
} from 'date-fns';

export default function formatDateLabel(date) {
    if (isToday(date)) {
        return 'Today';
    } else if (isYesterday(date)) {
        return 'Yesterday';
    } else if (isThisWeek(date, { weekStartsOn: 1 })) {
        return 'This Week';
    } else if (isThisMonth(date)) {
        return 'This Month';
    } else {
        // Display only the month for other dates
        return format(date, 'MMMM');
    }
}
