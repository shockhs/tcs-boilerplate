import React, { FC, memo } from "react";
import { SContainer, SInnerContainer, SNavigation, SNavLink } from "./style";
import { navigation } from "@/types/providers";

const HeaderComponentImpl: FC = (props) => {
  return (
    <SContainer>
      <SInnerContainer>
        <SNavigation>
          <SNavLink to={navigation.NavigationRoutes.categories}>
            Категории
          </SNavLink>
          <SNavLink to={navigation.NavigationRoutes.costs}>Расходы</SNavLink>
          <SNavLink to={navigation.NavigationRoutes.stats}>Статистика</SNavLink>
        </SNavigation>
      </SInnerContainer>
    </SContainer>
  );
};

export const HeaderComponent = memo(HeaderComponentImpl);
