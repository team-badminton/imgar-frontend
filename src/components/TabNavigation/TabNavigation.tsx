import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  TabNavigationContainer,
  TabNavigationItem,
  TabNavigationLink,
  TabNavigationList,
} from './TabNavigation.styled';
import { TabNavigationProps } from './TabNavigation.type';

export default React.memo(function TabNavigation({ tabs }: TabNavigationProps): ReactElement {
  const { url } = useRouteMatch();
  return (
    <TabNavigationContainer>
      <TabNavigationList>
        {tabs.map((tab, index) => (
          <TabNavigationItem key={tab.label}>
            <TabNavigationLink
              to={`${url}/${tab.path}`}
              activeClassName="active"
              isActive={
                index === 0
                  ? (match, location) => {
                      if (match) {
                        return true;
                      }
                      if (location.pathname === url) return true;
                    }
                  : null
              }
            >
              {tab.label}
            </TabNavigationLink>
          </TabNavigationItem>
        ))}
      </TabNavigationList>
    </TabNavigationContainer>
  );
});
