interface BadgeProps {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'default';
  children: string;
}

const badgeClasses: Record<BadgeProps['variant'], string> = {
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  danger: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  default: 'bg-gray-500 text-white'
};

export default function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeClasses[variant]} `}>
      {children}
    </span>
  );
}