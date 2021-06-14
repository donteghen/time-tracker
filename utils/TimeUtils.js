export function millisecondsToHuman (timelapse) {
    const elapsedTimeNum = parseInt(timelapse, 10)
    const transformedValue = new Date(timelapse).toISOString().split('T')[0];
    return transformedValue
}
