import MailIcon from '@/icons/MailIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import SendIcon from '@/icons/SendIcon';
import {FC, memo} from 'react';
import CalendarIcon from '@/icons/CalendarIcon';
import ArrowIcon from '@/icons/ArrowIcon';
import LocationIcon from '@/icons/LocationIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import SmileIcon from '@/icons/SmileIcon';
import SparklesIcon from '@/icons/SparklesIcon';
import LayersIcon from '@/icons/LayersIcon';
import ShieldCheckIcon from '@/icons/ShieldCheckIcon';
import ScanIcon from '@/icons/ScanIcon';
import ZapIcon from '@/icons/ZapIcon';

const Icon = ({name, ...props}: {name: IconName} & Icon) => {
  const icons: Record<IconName, FC<Icon>> = {
    mail: MailIcon,
    phone: PhoneIcon,
    send: SendIcon,
    calendar: CalendarIcon,
    arrow: ArrowIcon,
    location: LocationIcon,
    instagram: InstagramIcon,
    smile: SmileIcon,
    sparkles: SparklesIcon,
    layers: LayersIcon,
    shieldCheck: ShieldCheckIcon,
    scan: ScanIcon,
    zap: ZapIcon,
  };

  const IconComponent = icons[name];

  return IconComponent ? <IconComponent {...props} /> : null;
};

export default memo(Icon);
