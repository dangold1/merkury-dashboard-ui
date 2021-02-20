export const mapSalesData = (data) => {
    const series = [];
    const labels = [];
    for (const item of data) {
        series.push(item.value);
        labels.push(item.label);
    }
    return { series, labels }
}