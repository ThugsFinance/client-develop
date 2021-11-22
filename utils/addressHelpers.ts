import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  return address[chainId] ? address[chainId] : address[56]
}

export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getBusdAddress = () => {
  return getAddress(tokens.busd.address)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
