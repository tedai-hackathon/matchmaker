import React, { useEffect, useState } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { getUser } from '@/utils/client_side_utils/userUtils'
import {DropdownMenu} from '@/components/common/drop_down_menu_animated';
import MenuLink from '@/components/common/menu_link';
import LanguageSwitch from '@/components/application/navbar/user_profile_menu/language_switch';

import { useTranslation } from 'next-i18next'
import MenuButton from '@/components/common/menu_button';
import { useOnlineStatus } from '@/contexts/is_online';
import { Auth } from 'aws-amplify';
import router from 'next/router';
//import { getStaticPropsWithTranslations } from '@/utils/server_side_utils/i18n'
const i18nContexts = ['common', 'navbar'];

interface Props {
    className?: string;
}

const UserProfileMenu: React.FC<Props> = ({className}) => {
    const { t } = useTranslation(i18nContexts)    
    const [user, setUser] = useState<string | null>(null);
    const iconStyle = 'text-gray-600 w-6 h-6';

    const isOnline = useOnlineStatus();


    useEffect(() => {
        const initUser = async () => {
            const userName = await getUser();
            setUser(userName);
        };
        initUser();
    }, []); 

    const signOut = async () => {
        if( confirm('Are you sure you want to sign out?')) {
        await Auth.signOut();
        }
    };

    return (
        <DropdownMenu className={className} imageSrc="/avatar_user_male.png">
            {user ? (
                <>
                    <MenuLink name={t('navbar.user-profile.menu.profile')} href='/profile' icon={<FaUser className={iconStyle}/>}/>
                    <MenuLink name={t('navbar.user-profile.menu.settings')} href='/settings' icon={<FaCog className={iconStyle}/>}/>
                    <MenuButton name={t('navbar.user-profile.menu.signout')} details={user} onClick={signOut} icon={<FaSignOutAlt className={iconStyle}/>}/>

                </>
            ) : (
                <MenuLink name='SignIn' href='/signin' icon={<FaSignInAlt className={iconStyle}/>}/>
            )}
            <LanguageSwitch />
        </DropdownMenu>
    );
};

//export const getStaticProps = getStaticPropsWithTranslations(i18nContexts)

export default UserProfileMenu;
