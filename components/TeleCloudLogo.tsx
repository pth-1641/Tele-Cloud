import { Icon } from "@iconify/react";
import { HTMLAttributes, useMemo } from "react";

const TeleCloudLogo = ({
  className,
  size = 128,
  ...props
}: HTMLAttributes<HTMLDivElement> & { size?: number }) => {
  const teleSize = useMemo(() => size * 0.35, [size]);
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      {...props}
    >
      <Icon icon="fluent:cloud-48-filled" height={size} color="#2aabee" />
      <Icon
        icon="mingcute:telegram-fill"
        height={teleSize}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default TeleCloudLogo;
