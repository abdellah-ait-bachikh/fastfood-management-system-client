import { IconBaseProps, IconType } from "react-icons";

interface IconComponentProps extends IconBaseProps {
  Icon: IconType;
}

const IconComponent = ({ Icon, ...IconBaseProps }: IconComponentProps) => {
  const IconEl = Icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
  return <IconEl {...IconBaseProps} />;
};

export default IconComponent;
