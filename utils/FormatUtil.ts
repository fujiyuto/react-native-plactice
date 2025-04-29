
// Dateクラスの値を受け取り、yyyy-mm-dd形式の文字列にして返却
export function getDateStringFromDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0始まり
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// yyyy-mm-dd形式の文字列を渡してDateクラスの値にして返却
export function getDateFromDateString(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}