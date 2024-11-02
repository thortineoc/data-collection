export function mapDate(date?: Date): string {
    return date ? `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}` : ''
}