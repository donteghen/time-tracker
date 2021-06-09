export function millisecondsToHuman (timelapse) {
    
    const elapsedTimeNum = parseInt(timelapse, 10)
    
    const transformedValue = new Date(elapsedTimeNum).toISOString().split('T')[0];
    
    return transformedValue
}
