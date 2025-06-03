import { Chip, ChipProps, Tooltip } from '@heroui/react'
import { formatQuantity, formatWithSeparators } from '@renderer/lib/utils'

interface QuantityProps extends ChipProps {
  quantity: number
}

const Quantity = ({ quantity, ...res }: QuantityProps) => {
  return <Tooltip content={formatWithSeparators(quantity)} showArrow  size='lg' color='foreground' closeDelay={0}><Chip {...res}>{formatQuantity(quantity)}</Chip></Tooltip>
}

export default Quantity
