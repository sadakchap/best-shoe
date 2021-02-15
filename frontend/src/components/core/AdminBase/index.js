import React, { useState } from 'react';
import { PrimaryButton } from '../../reuseableComponents/Buttons';
import { 
    AdminHeaderText, 
    LeftColumn,
    AdminLeftPanel, 
    AdminPanelLink, 
    AdminRightPanel, 
    AdminWrapper,
    AdminHeadingP, 
    AdminHeaderContainer, 
    RightColumn, 
    Icon,
    HomeLink
} from './AdminBaseElements';
import { RiArrowLeftSLine } from 'react-icons/ri'

const AdminBase = ({ title, desc, children }) => {

    const [sideNavOpen, setSideNavOpen] = useState(false);

    const leftPanel = () => (
        <AdminLeftPanel>
            <li>
                <AdminPanelLink to="/admin/dashboard"> Dashboard </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/create/products"> Create Products </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/create/categories"> Create Categories </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/categories"> Manage Categories </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/products"> Manage Products </AdminPanelLink>
            </li>
            <li>
                <AdminPanelLink to="/admin/manage/orders"> Manage Orders </AdminPanelLink>
            </li>
            <Icon>
                <RiArrowLeftSLine size="2rem" onClick={() => setSideNavOpen(!sideNavOpen)} />
            </Icon>
        </AdminLeftPanel>
    );

    const rightPanel = () => (
        <AdminRightPanel  onClick={() => sideNavOpen && setSideNavOpen(!sideNavOpen)} >
            <AdminHeaderContainer>
                <div>
                    <AdminHeaderText>{title}</AdminHeaderText>
                    <AdminHeadingP>{desc}</AdminHeadingP>
                </div>
                <HomeLink to="/">
                    <PrimaryButton width="100%">Home</PrimaryButton>
                </HomeLink>
            </AdminHeaderContainer>
            {children}
        </AdminRightPanel>
    )

    return (
        <AdminWrapper className="row">
            <LeftColumn isOpen={sideNavOpen}>
                {leftPanel()}
            </LeftColumn>
            <RightColumn>
                {rightPanel()}
            </RightColumn>
        </AdminWrapper>
    )
}

export default AdminBase
