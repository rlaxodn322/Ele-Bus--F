import { NextPage } from 'next';
import type { ReactElement } from 'react';
// import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithPostLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType;

// eslint-disable-next-line no-unused-vars
export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

export default PageWithLayoutType;
