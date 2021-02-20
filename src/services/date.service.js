import moment from 'moment';

export const getTimeTextByDate = date => {
    const d = moment(date);
    const fromNow = d.fromNow();
    return fromNow;
}

export const getIsTimePassed = date => {
    const now = moment();
    const d = moment(date);
    return d.isAfter(now);
}