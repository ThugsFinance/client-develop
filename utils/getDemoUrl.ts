
const getDemoUrl = ({ providerName, gameId}) => {
  if (providerName.toLowerCase() === 'pragmatic') {
    return `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=GBP&gameSymbol=${gameId}&websiteUrl=https%3A%2F%2Fpragmaticplaygames.com%2Fen&lobbyUrl=https%3A%2F%2Fpragmaticplaygames.com%2Fen`
  }
  if (providerName.toLowerCase() === 'microgaming') {
    return `https://redirector3.valueactive.eu/Casino/Default.aspx?applicationid=4123&gameid=${gameId.slice(4)}&playmode=demo&serverid=3516&ul=en`
  }
}

export const getFishingDemoUrl = ({ providerName, gameId}) => {
  const pragmatic = {
    pp5fish: 'https://fishingdemo.com/blueocean3d/desktop-demo/',
    pp4fortune: 'https://fishingdemo.com/fishingdemo2.html',
    pp3fish: 'https://fishingdemo.com/fishingdemo1.html',
    pp6fish: 'https://fishingdemo.com/piratefishing/demo'
  }
  if (providerName.toLowerCase() === 'pragmatic') {
    return pragmatic[gameId]
  }
  if (providerName.toLowerCase() === 'spadegaming') {
    return `https://lobby.sgplayfun.com/touch/spadenew/index.jsp?mobile=true&menumode=off&game=${gameId}&language=en_US`
  }
  return 'https://97bet.casino'
}

export default getDemoUrl
