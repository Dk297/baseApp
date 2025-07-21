// file này hỗ trợ xử lý navigaiton ngoài màn hình

import React from 'react';
import type { NavigationContainerRef } from '@react-navigation/core';

// @ts-ignore
export const refNavigation = React.createRef<NavigationContainerRef>();

/**
 * func lấy ra thông tin màn hình trước khi đi vào màn hình đăng nhập
 * @return key: String
 */

/** func navigate tới màn hình nào đó từ màn hình hiện tại
 * @param routerName tên màn hình cần nvigate đến
 */
export const navigateFromCurrentScreen = (router: string, params?: any) => {
  refNavigation?.current?.navigate(router, params);
};

/**
 * lấy thông tin màn hình trước trong navigation
 * @return key: String
 */
export const getPreviousScreen: () => string | undefined = () => {
  // lấy ra toàn bộ state của navigation
  const routes = refNavigation.current?.getRootState()?.routes || [];
  // -2 because -1 is the current route
  return routes[routes.length - 2]?.key;
};
