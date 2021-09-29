import { format } from 'date-fns'   

export function formatDate(data) {
    return format(new Date(data), 'dd/MM/yyyy')
}