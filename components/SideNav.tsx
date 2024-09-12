import { Dispatch, SetStateAction } from 'react';
import MobileSideNavigation from './MobileSideNavigation';
import SideNavigation from './SideNavigation';

type SideNavProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function SideNav({ isOpen, setIsOpen }: SideNavProps) {
  return (
    <div className='overflow-scroll transition-all scrollbar-none'>
      <SideNavigation />
      {isOpen && <MobileSideNavigation setIsOpen={setIsOpen} />}
    </div>
  );
}

export default SideNav;
