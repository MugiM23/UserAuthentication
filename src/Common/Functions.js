export const getRandomDarkColor = (index) => {
    let colors = ['#087568', '#0b8715', '#c7326d', '#ecc27c']
    let selectedIndex = index % 4
    return colors[selectedIndex]
}
export const getRandomLightColor = (index) => {
    let colors = ['#EFFFFD', '#C1F4C5', '#FFBED8', '#fef4e8']
    let selectedIndex = index % 4
    console.log('selectedIndex',selectedIndex)
    return colors[selectedIndex]
}