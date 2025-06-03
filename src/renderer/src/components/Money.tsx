import { Chip, ChipProps, Tooltip } from '@heroui/react'
import {  formatMoneyToMAD, formatShortMoney } from '@renderer/lib/utils'
import { useState } from 'react'

interface AmounthProps extends ChipProps {
  amounth: number
}

const Amounth = ({ amounth, ...res }: AmounthProps) => {
   
  return <Tooltip   content={formatMoneyToMAD(amounth)} showArrow size='lg' color='foreground' closeDelay={0}><Chip  {...res}>{formatShortMoney(amounth)}</Chip></Tooltip>
}

export default Amounth
